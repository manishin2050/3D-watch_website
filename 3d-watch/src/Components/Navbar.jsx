import React, { useEffect } from 'react'

// import { NavLink } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import gsap from 'gsap'


function Navbar() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to('nav',{
      marginTop:'0%',
      duration:.5
    })
    tl.to('nav .same', {

      y:0,
      opacity:1,
      delay:.2,
      duration: 1,
      stagger: 0.2,
      // ease: "power4.out"
    });
  }, []);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const handleLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate("/")
  }

  return (
    <nav>
      <div className="logo same"> <NavLink to='/'  ><h1>Watch TO Watch</h1></NavLink>  </div>
      <div className="links ">
        <NavLink className={(e)=>{return e.isActive?'shadows':''} } to="/"><h2 className='same'>Home</h2></NavLink>
        <NavLink className={(e)=>{return e.isActive?'shadows':''} } to="/shop"><h2 className='same'>Shop</h2></NavLink>
        <NavLink className={(e)=>{return e.isActive?'shadows':''} } to="/orders"><h2 className='same'>Orders</h2></NavLink>
        {/* <ul className="nav-links same">
                {user ?
                    <>
                        <NavLink className='nav-childs' to="/homepage">Dashboard</NavLink>
                        <NavLink className='nav-childs' to="/" onClick={handleLogout}>Logout</NavLink>
                    </>
                    :
                    <>
                        <NavLink className='nav-childs' to="/homepage">Dashboard</NavLink>
                    </>
                }
            </ul> */}
      </div>
    </nav>
  )
}

export default Navbar