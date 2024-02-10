import React from 'react'
import Krishnan from '../../Images/Krishnan.jpg';
import Amal from '../../Images/amal.jpeg'
import Sourav from '../../Images/sourav.jpeg'
import Adinath from '../../Images/adinath.jpg'
import Linkedin from "../../Icons/Linkedin.svg"
import Github from "../../Icons/github.svg"
import Instagram from "../../Icons/Instagram.svg"
//import {useNavigate,Navigate } from 'react-router-dom';
// <FontAwesomeIcon icon="fa-brands fa-linkedin" />
const Contacts = () => {
  /*KRISHNAN*/
  const KrishnanLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/krishnan-e-7a1112202/';
  };
  const KrishnanGithub = ( ) =>{
    window.location.href = 'https://github.com/krishnanx';
  }
  const KrishnanInstagram = ( ) =>{
    window.location.href = 'https://www.instagram.com/xkrishnanx/';
  }
  /*KRISHNAN OVER */
  /*     AMAL    */
  const AmalLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/amal-varghese-670225291/';
  };
  const AmalGithub = ( ) =>{
    window.location.href = 'https://github.com/codewizard-2004';
  }
  const AmalInstagram = ( ) =>{
    window.location.href = 'https://www.instagram.com/amalv2004/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D';
  }


  /*     Sourav   */
  const SouLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/sourav-dath/';
  };
  const SouGithub = ( ) =>{
    window.location.href = 'https://github.com/souravdath';
  }
  const SouInstagram = ( ) =>{
    window.location.href = 'https://www.instagram.com/sourav_dath._/';
  }

  /*     Adinath   */
  const AdiLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/adinath-manoj-nambiar-3b1b75292/';
  };
  const AdiGithub = ( ) =>{
    window.location.href = 'https://github.com/souravdath';
  }
  const AdiInstagram = ( ) =>{
    window.location.href = 'https://www.instagram.com/adinath_manoj/';
  }

  /*         */
  return (
    <div className='contacts'>
      <hr />
      <div>
        <h1>CONTACT US</h1>
      </div>
      <div className='part-1'>
        <div className='contact-1'>
          <div className='krishnan'>
            <div >
              <img className='krishnan-pic' src={Krishnan}></img>
            </div>
            <div>
              <h1>
                Krishnan E
              </h1>
            </div>
          </div>
          <div className='icons' id="krishnan_icons">
            <button  onClick={KrishnanLinkedIn}><img src={Linkedin} className='linkedin'></img></button>
            <button  onClick={KrishnanGithub}><img src={Github} className='linkedin'></img></button>
            <button  onClick={KrishnanInstagram}><img src={Instagram} className='linkedin'></img></button>
          
          
          </div>


        
        </div>
     
        <div className='contact-2'>
        <div className='krishnan'>
            <div >
              <img className='krishnan-pic' src={Amal}></img>
            </div>
            <div>
              <h1>
              Amal Varghese
              </h1>
            </div>
          </div>
          <div className='icons' id="krishnan_icons">
            <button  onClick={AmalLinkedIn}><img src={Linkedin} className='linkedin'></img></button>
            <button  onClick={AmalGithub}><img src={Github} className='linkedin'></img></button>
            <button  onClick={AmalInstagram}><img src={Instagram} className='linkedin'></img></button>
          
          
          </div>

          

        </div>
      </div>
      <div className='part-2'>
        <div className='contact-1'>
            <div className='krishnan'>
              <div >
                <img className='krishnan-pic' src={Adinath}></img>
              </div>
              <div>
                <h1>
                  Adinath Manoj
                </h1>
              </div>
            </div>
            <div className='icons' id="krishnan_icons">
              <button  onClick={AdiLinkedIn}><img src={Linkedin} className='linkedin'></img></button>
              <button  onClick={AdiGithub}><img src={Github} className='linkedin'></img></button>
              <button  onClick={AdiInstagram}><img src={Instagram} className='linkedin'></img></button>
            
            
            </div>


          
          </div>
      
        <div className='contact-2'>
          <div className='krishnan'>
              <div >
                <img className='krishnan-pic' src={Sourav}></img>
              </div>
              <div>
                <h1>
                Sourav Dath P.S
                </h1>
              </div>
          </div>
            <div className='icons' id="krishnan_icons">
              <button  onClick={SouLinkedIn}><img src={Linkedin} className='linkedin'></img></button>
              <button  onClick={SouGithub}><img src={Github} className='linkedin'></img></button>
              <button  onClick={SouInstagram}><img src={Instagram} className='linkedin'></img></button>
            
            
            </div>
        </div>
      </div>
            

    

        
        
    </div>
  )
}

export default Contacts