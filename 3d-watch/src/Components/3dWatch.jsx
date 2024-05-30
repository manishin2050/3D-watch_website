import React, { useEffect } from 'react'
// import './watc.css'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import AppleWatch from '../WatchComponents/AppleWatch'
import gsap from 'gsap'
function Watch() {


  useEffect(() => {


    const timeoutIdd = setTimeout(() => {
      let watch =gsap.timeline()
      watch.from('.watch',{
        x:1000,
        opacity:0,
        duration:3,

      },)
      // watch.from('.container .heading',{
      //   x:500,
      //   opacity:0,
      //   duration:3,

      // },'hi')
    }, 100);
    return () => clearTimeout(timeoutIdd);
  }, []);

    return (

      <div className='container'>
        <div className='watch'>
            <Canvas>
               {/* <ambientLight/> */}
               <Environment preset="warehouse" />
               <OrbitControls enableZoom={false} autoRotate/>
              <AppleWatch/>
              {/* <DigitalWatch/> */}
            </Canvas>
        </div>
        <div className="heading">

        <h1 className='text text-center ' >Next-level adventure</h1>
        <p> The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP. A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.        </p>
        </div>
      </div>

    )
  }
export default Watch