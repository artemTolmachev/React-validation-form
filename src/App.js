import React from 'react';
import OrderForm from './OrderForm';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from 'framer-motion';


import './App.scss';

const textAnimation = {
  hidden: {
    x: -50,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.7}
  })
}

function App() {

  return (
    <>
      <motion.div

      initial = 'hidden'
      whileInView = 'visible'

      className="main">
        <div className="container">
          <div className="container__left">
            <div className="container__left-wr">
              <motion.div 
                variants={textAnimation}
                custom = {2}
              className="main__logo">
                  Hello<br/>
                  World.
                </motion.div>
                <motion.p 
                variants={textAnimation}
                custom = {3}
                >You have everything needed for the extravagant<br/> journey that is your life.</motion.p>
                <motion.div 
                variants={textAnimation}
                custom = {4}
                className='main__social-wr'>
                  <a className='main__social social--fa' href="https://www.facebook.com/profile.php?        id=100061966137095" target='blank'><FaFacebookF size='1em' color='white'/></a>
                  <a className='main__social social--in' href="https://www.linkedin.com/in/artem-tolmachev-8a5b03203/" target='blank'><FaLinkedinIn size='1em' color='white'/></a>
                </motion.div>
              </div>
          </div>
          <div className="container__right">
            <OrderForm/>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default App;
