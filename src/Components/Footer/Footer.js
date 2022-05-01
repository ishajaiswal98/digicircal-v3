import React from 'react'
import './Footer.css'
import { Container,Row ,Col } from "react-bootstrap";
import {FaCheck, FaPhoneAlt, FaEnvelopeOpenText} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="margin-div">
  <section >
  <footer className="completeFooter  text-center">
    <Container>
      <Row>
      <Col md={4}>

          {/* <img src='images/DIGI_3D.jpg' alt='' style={{height:'100px' , width:'150px' , marginTop:'0'}}></img> */}
          <h4 className="OurOffices">About Us
          </h4>
          <p className="AboutSoftgenics">
          Digi Circal is a leading Digital agency on Digital marketing, Logo design, 2D/3D Animation,
Video editing, Content writing, Website design, and related services firm in India. Digi Circal
providing high-quality, cost-effective, and timely services to its clients in India and overseas.
Digital marketing is an integral aspect of almost all business types. The continuous and quick
growth of the current period has made everything so convenient. 
          </p>
          
          </Col>
          <Col md={4}>
        
          <h4 className="OurOffices">Our Services
          </h4>
          <ul>
            <li><FaCheck style={{color:'black'}}/> Design</li>
            <li><FaCheck style={{color:'black'}}/> Shoot Video</li>
            <li><FaCheck style={{color:'black'}}/> Animation Video</li>
            <li><FaCheck style={{color:'black'}}/> Promo Video</li>
            <li><FaCheck style={{color:'black'}}/> Lead Generation</li>
            <li><FaCheck style={{color:'black'}}/> Graphic Design</li>
          </ul>

         
        
        </Col>

        <Col md={4}>
          <h4 className=" mb-0 OurOffices text-center">CONTACT US</h4>
     
            <ul className="list-unstyled">
            
            
            <li>
           <p><a href="tel:8368491107" className="cont"><FaPhoneAlt style={{color:'black'}}/></a>8368491107,7827496895</p>
            </li>
            <li>
          <p><a href="mailto:info@digircal.com" className="cont"><FaEnvelopeOpenText style={{color:'black'}}/></a>info@digircal.com</p>
            </li>
            <li>           <p> Block C  New Ashok Nagar New Delhi (110096)</p> </li>

          
                   </ul>

              
          </Col> 
         
       
            <div className="text-center p-3 copyright">
      © 2022 designed by:
      <a className="text-black ml-2" href="https://mdbootstrap.com/">Digicircal.com</a>
    </div>
    </Row>
    </Container>
  </footer>
</section>
  </div>

  )
}

export default Footer