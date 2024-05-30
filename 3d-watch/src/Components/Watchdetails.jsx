import {useEffect, useState } from "react";
import axios from 'axios';

function Watchdetails()
{

  const [id, setId] = useState('');
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [students, setUsers] = useState([]);


useEffect(() => {
    (async () => await Load())();
}, []);


async function  Load()
{
     const result = await axios.get(
         "http://127.0.0.1:4304/watch");
         setUsers(result.data);
         console.log(result.data);
        }


        async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://127.0.0.1:4304/watch",
        {

          name: name,
          price: price,
          img: img,
          model:model

        });
          alert("Details Registated Successfully");
          setId("");
          setName("");
          setImg("");
          setPrice("");
          setModel("");
          Load();



        }
    catch(err)
        {
          alert("Details Registation Failed");
        }
   }



   async function editStudent(students)
   {
    setName(students.name);
    setImg(students.img);
    setPrice(students.price);
    setModel(students.model);
    setId(students.id);

   }
   async function DeleteStudent(id)
   {

        await axios.delete("http://127.0.0.1:4304/watch/" + id);
        alert("Details deleted Successfully");
        setId("");
        setName("");
        setModel("");
        setImg("");
        setPrice("");
        Load();


   }
   async function update(event)
   {
    event.preventDefault();
   try
       {

        await axios.put("http://127.0.0.1:4304/watch/"+ students.find(u => u.id === id).id || id,
       {
         id: id,
         name: name,
         model: model,
         price: price,
         img: img

       });
         alert("Details Updateddddd");
         setId("");
         setName("");
         setImg("");
         setModel("");
         setPrice("");
         Load();

       }
   catch(err)
       {
         alert(" Details updateddd Failed");
       }
  }
  return (
    <div style={{minHeight:'91vh'}} >
       <h1 style={{paddingTop:'10vw',fontSize:'3rem'}} >Your Orders:</h1>
       <div  className="container mt-4" >
          {/* <form>
              <div className="form-group">

               <label>Name</label>
                <input  type="text" className="form-control" id="name"
                value={name}
                onChange={(event) =>
                  {
                    setName(event.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label>Model</label>
                <input  type="text" className="form-control" id="address"
                 value={model}
                  onChange={(event) =>
                    {
                     setModel(event.target.value);
                    }}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input type="text" className="form-control" id="fee"
                  value={price}
                onChange={(event) =>
                  {
                    setPrice(event.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Imgae</label>
                <input type="text" className="form-control" id="fee"
                  value={img}
                onChange={(event) =>
                  {
                    setImg(event.target.value);
                  }}
                />
              </div>
                 <div>
              <button   className="btn btn-primary mt-4"  onClick={save}>Register</button>
              <button   className="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>


            </form> */}
          </div>


<table className="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Model</th>
      <th scope="col">Price</th>

      <th scope="col">Option</th>
    </tr>
  </thead>
       {students.map(function fn(student,index)
       {
            return(
            <tbody key={student.id}>
                <tr>
                <th scope="row">{index+1}  </th>
                <td><img style={{height:'50px',width:'50px'}} src={student.img} alt="nhi" /></td>
                <td>{student.name}</td>
                <td>{student.model}</td>
                <td>{student.price}</td>
                <td>
                    {/* <button type="button" className="btn btn-warning"  onClick={() => editStudent(student)} >Edit</button> */}
                    <button type="button" className="btn btn-danger" onClick={() => DeleteStudent(student.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }






export default Watchdetails;