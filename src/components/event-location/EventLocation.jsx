import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css'

const EventLocation = () => {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setShowBox(true);
    }, 1500);

    return () => clearTimeout(delayTimeout);
  }, []);

  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsBlurred(true);
    }, 2000);

    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <motion.section
      transition={{ duration: 0.6 }}
      className='w-full flex flex-col items-center h-screen relative'
    >
      <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: 0.6 }}>
        <h3 className='text-decoration-1 md:mt-12'>Event Location</h3>
        <h1 className='text-decoration-2 md:py-2'>Syphax Hotel</h1>
      </motion.div>
      <motion.div
        initial={{ y: 400, x: -180 }}
        animate={{ y: -160, x: -180 }}
        transition={{ delay: 0.6 }}
        className='absolute top-1/2 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px]'
      >
        <img className={`logo ${isBlurred ? 'blurred' : ''}`} src='/event_location/syphax.png' alt='SYPHAX' style={{ zIndex: 1 }} />
      </motion.div>
      {showBox && (
        <>
          <motion.div className='box' initial={{ y: 500 }} animate={{ y: 0 }} transition={{ delay: 0.6 }} style={{ zIndex: 2 }}>
            <motion.div
              initial={{ x: -900, y: -300 }}
              animate={{ x: 0, y: 0 }}
              transition={{ delay: 0.6 }}
              className='bg-image'
            >
              <img src='/event_location/shadow.png' className='w-full h-full' alt='' />
            </motion.div>
            <motion.div
              initial={{ x: 900, y: -300 }}
              animate={{ x: 0, y: 0 }}
              transition={{ delay: 0.6 }}
              className='bloc text-white text-[20px] w-[350px]'
            >
              Syphax Hotel offers a comfortable and welcoming retreat for visitors. As a 3-star establishment, it combines
              affordability with a range of amenities. It is an ideal choice for those seeking a modest yet comfortable stay
              in a picturesque Algerian setting.
            </motion.div>
          </motion.div>
          <motion.div
            initial={{  y: 800 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
            className='btn-div'
            >
            <button className='btn'>
              <span className='text-decoration'>
                View location
              </span>
            </button>
          </motion.div>
        </>
      )}
      
      
    </motion.section>
  );
};

export default EventLocation;
