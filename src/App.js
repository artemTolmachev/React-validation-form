import React from 'react';
import OrderForm from './OrderForm';
import { FaFacebookF } from "react-icons/fa";
import {Link} from 'react-router-dom'; 


import './App.scss';

function App() {


  return (
    <>
      <div className="main">
        <div className="container">
          <div className="container__left">
            <div className="container__left-wr">
              <div className="main__logo">
                  Hello<br/>
                  World.
                </div>
                <p>Страх – первый неизбежный враг, которого человек должен победить на пути к знанию.</p>
                <div className='main__social-wr'>
                  <a className='main__social' href="https://www.facebook.com/profile.php?        id=100061966137095" target='blank'><FaFacebookF size='1.5em' color='white'/></a>
                </div>
              </div>
          </div>
          <div className="container__right">
            <OrderForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
