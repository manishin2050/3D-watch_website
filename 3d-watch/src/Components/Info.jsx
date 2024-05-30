import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import DigitalWatch from '../WatchComponents/DigitalWatch'
import Handwatch from '../WatchComponents/Patek'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Info() {
  useEffect(() => {
    gsap.fromTo('.items .upleft',
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.info',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );
    gsap.fromTo('.items .upright',
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.info',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );
    gsap.fromTo('.items .downleft',
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.info',
          start: 'top 10%',
          end: 'top -40%',
          scrub: 1,
        },
      }
    );
    gsap.fromTo('.items .downright',
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.info',
          start: 'top 10%',
          end: 'top -40%',
          scrub: 1,
        },
      }
    );
  }, []);



  return (
    <div className='info'>
      <div className="items">
        <div className="item upleft box-1">
       <h1>TITAN’S EVOLUTION OF ELEGANCE: DIGITAL WATCHES IN MEN REDEFINING FASHION</h1>
        <p>The world has changed! Style has become an extension of one’s personality. How we present ourselves often reflects our unique personalities. Keeping this in mind, our range of Titan digital watches for men stands out as a symbol of poise and forward-thinking innovation.

Our best digital watches for men transcend the conventional notion of being mere timekeepers. They embody the essence of contemporary masculinity by flawlessly merging technological advancement with refined elegance.</p>
        </div>
        <div className="item upright box-2">
            <Canvas>
               {/* <ambientLight/> */}
               <Environment preset="warehouse" />
               <OrbitControls enableZoom={false}/>
              <DigitalWatch/>
            </Canvas>
        </div>
      </div>
      <div className="items">
        <div className="item downleft box-2">
            <Canvas>
               <ambientLight/>
               <Environment preset="warehouse" />
               <OrbitControls enableZoom={false}/>
              <Handwatch/>
            </Canvas>
        </div>
        <div className="item downright box-1">
          <h1>  UNVEILING TIMELESS ELEGANCE: THE MODERN MAN’S ACCESSORY</h1>
          <p>

Fashion is not merely about garments or jewellery. It has evolved into a sharp tool for crafting one’s identity. Our range of Titan digital watches for men symbolises this ethos. They offer more than just a way to tell time — they are expressions of refined taste and personality.

Imagine yourself slipping on a digital wristwatch for men — the glint of polished metal or the understated elegance of a sleek design. This watch is not just an accessory, it has now become an extension of your style. So, whether you’re heading to a high-stakes meeting or a casual hangout, our watch is your go-to partner.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info