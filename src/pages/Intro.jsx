// imports
import React, { useEffect, useState } from 'react';

// import framer motion

import { motion, AnimatePresence } from 'framer-motion';

// styles
import '../styles/pages/_intro.scss';

function Intro() {
  const [introTextTimer, setIntroTextTimer] = useState(false);
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    if (introTextTimer === false) {
      setTimeout(() => {
        setIntroTextTimer(!introTextTimer);
        console.log('yooo');
      }, 2500);

      // check if the browser screen is mobile sized to set state to true
      if (window.innerWidth <= 1280) {
        setIsTouchScreen(!isTouchScreen);
      }
    }
  }, [introTextTimer, isTouchScreen]);
  return (
    <AnimatePresence>
      {introTextTimer === false && (
        <motion.div
          className='intro-div'
          key='intro'
          initial={{ opacity: 0.8, color: '#BFB1DF', x: 0, y: -100 }}
          animate={{ opacity: 1, color: '#9581c1', y: 350 }}
          transition={{ ease: 'easeIn', type: 'tween', duration: 1.5 }}
          exit={{ opacity: 0 }}
        >
          <p className='intro-text'>Clide 0_0</p>
        </motion.div>
      )}
      {introTextTimer === true && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              ease: 'easeIn',
              type: 'tween',
              delay: 2.5,
              duration: 0.4,
            }}
          >
            <h1 className='intro-title'>Clide</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 0, 0, 1],
            }}
            transition={{
              ease: 'easeOut',
              type: 'tween',
              delay: 2.5,
              repeat: 'Infinity',
              repeatDelay: 1,
              duration: 1,
            }}
          >
            {isTouchScreen === true && (
              <p className='intro-start-text'> tap to start</p>
            )}
            {isTouchScreen === false && (
              <p className='intro-start-text'> press enter to start</p>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Intro;
