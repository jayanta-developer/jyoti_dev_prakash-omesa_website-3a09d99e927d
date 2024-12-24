import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css"

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from "../../Components/Footer";

//images
import CLogo from "../../Assets/Images/ClogoWhite.png";
import navBg from "../../Assets/Images/contactBg.png";
import contactBtnBg from "../../Assets/Images/contactBtn.png";

export default function Contact({ activeNav, setActiveNav }) {
  setActiveNav(6);


  return (
    <>
      <Box className="contacePage">
        <Box className="aboutNavSection">
          <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
          <Typography className='aboutNavLabel'>Contact Us</Typography>
          <img src={navBg} className='navBgImg' />
        </Box>


        <Box className="contackInputBox">
          <Typography className="contackSummery">Odisha Mining Engineers would like to hear from you! Please contact us to learn more about our services and how we can turn your vision into reality.</Typography>

          <Box className="inputInnerBox">

            <Box className="InputRowBox">
              <Box className="inputBoxWLabel">
                <Typography>Your Name<span>*</span></Typography>
                <input type="text" placeholder="Enter your Name" />
              </Box>

              <Box className="inputBoxWLabel">
                <Typography>Company Name</Typography>
                <input type="text" placeholder="Enter your company name" />
              </Box>
            </Box>


            <Box className="InputRowBox">
              <Box className="inputBoxWLabel">
                <Typography>Phone Number<span>*</span></Typography>
                <input type="text" placeholder="Enter your phone number" />
              </Box>

              <Box className="inputBoxWLabel">
                <Typography>Email<span>*</span></Typography>
                <input type="text" placeholder="Enter your email here" />
              </Box>
            </Box>

            <Box className="inputBoxWLabel">
              <Typography>Message</Typography>
              <textarea type="text" placeholder="Enter your Message here " />
            </Box>



          </Box>

          <Box className="pub2BtnBox">
            <Box className="contactBtnBox" data-aos="fade-right">
              <img src={contactBtnBg} />
              <Typography>Submit</Typography>
            </Box>
          </Box>
        </Box>





        <Footer activeNav={activeNav} setActiveNav={setActiveNav} />
      </Box>
    </>
  )
}
