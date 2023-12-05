import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import '../event-location/style.css'

const AboutBytecraft = () => {

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
    <>
      <motion.section
        className='w-screen flex flex-col items-center h-screen relative'
      >
        <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: 1,duration:0.3 }}>
          <h3 className='text-decoration-1 mt-12'>Bytecraft</h3>
          <h1 className='text-decoration-2 pt-4'>Bytecraft CLub</h1>
        </motion.div>
        <motion.div
          initial={{ y: 400, x: -180 }}
          animate={{ y: -110, x: -150 }}
          transition={{ delay: 1,duration:0.3 }}
          className='absolute top-1/2 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[260px]'
        >
          <img className={`logo ${isBlurred ? 'blurred' : ''}`} src='/about_bytecraft/logo.png' alt='SYPHAX' style={{ zIndex: 1 }} />
        </motion.div>
        {showBox && (
          <>
            <motion.div className='box2' initial={{ y: 500 }} animate={{ y: 0 }} transition={{ delay: 0.6 }} style={{ zIndex: 2 }}>
              <motion.div
                initial={{  y: 500 }}
                animate={{  y: 0 }}
                transition={{ delay: 1,duration:0.3 }}
                className='bloc text-white md:text-[30px] lg:text-[35px] text-[24px] w-[350px] lg:w-[800px] md:w-[600px]'
              >
                Syphax Hotel offers a comfortable and welcoming retreat for visitors. As a 3-star establishment, it combines
                affordability with a range of amenities. It is an ideal choice for those seeking a modest yet comfortable stay
                in a picturesque Algerian setting.
              </motion.div>
            </motion.div>
          </>
        )}
      </motion.section>
    </>
  )
}

export default AboutBytecraft