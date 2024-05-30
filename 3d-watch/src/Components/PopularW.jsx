import React, { useState, useEffect, useRef } from 'react';
import watches from '../api/watches.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PopularW = () => {
  const [watchList, setWatchList] = useState([]);
  const popularWatchesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set the watch list state
    setWatchList(watches);

    // Delay the animation to ensure the DOM has updated
    const timeoutId = setTimeout(() => {
      let popW = gsap.timeline();
      popW.from('.popularwatches .popWbox', {
        y: -200,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1
      });
      popW.pause();

      ScrollTrigger.create({
        trigger: popularWatchesRef.current,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
        onEnter: () => {
          popW.play();
        },
        onLeaveBack: () => {
          popW.reverse();
        },
      });
    }, 100); // Delay in milliseconds, adjust if necessary

    // Cleanup timeout on unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='popularwatches' ref={popularWatchesRef}>
      <h1>Connection With Brands:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {watchList.map((watch) => (
          <div className='popWbox' key={watch.id} style={{ margin: '10px', border: '1px solid black', padding: '10px' }}>
            <h2>{watch.brand}</h2>
            <p>Model: {watch.model}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularW;
