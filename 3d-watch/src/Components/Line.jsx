import React from 'react'
import gsap from 'gsap';


function Line() {
    let path="M 80 150 Q 625 150 1250 150";
    const finalPath="M 80 150 Q 625 150 1250 150";
    function mouseMove(dets){
      // console.log(dets.clientY);
      path=`M 80 150 Q ${dets.clientX}  ${dets.clientY} 1250 150`
      // console.log(path)
      gsap.to('svg path',{
        attr:{d:path},
        duration:0.3,
        ease:"power4.out",
      })
    }


    function mouseLeave(){
      gsap.to('svg path',{
        attr:{d:finalPath},
        duration:1,
        ease: "elastic.out(1,0.1)"
      })
    }

    return (
      <div className="App">


        <div onMouseMove={mouseMove} onMouseLeave={mouseLeave} viewBox="0 0 1300 200"  preserveAspectRatio="xMidYMid meet" className="svg">
        <svg  width="190" height="300" >
            <path d="M 80 150 Q 625 150 1250 150" stroke="white" fill="transparent"/>
        </svg>
        </div>
      </div>
    );
  }

export default Line