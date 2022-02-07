import React from 'react';
import OrderForm from './OrderForm';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



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
                <p>You have everything needed for the extravagant<br/> journey that is your life.</p>
                <div className='main__social-wr'>
                  <a className='main__social social--fa' href="https://www.facebook.com/profile.php?        id=100061966137095" target='blank'><FaFacebookF size='1em' color='white'/></a>
                  <a className='main__social social--in' href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target='blank'><FaLinkedinIn size='1em' color='white'/></a>
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
