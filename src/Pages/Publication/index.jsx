import React from 'react';
import "./style.css"

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from "../../Components/Footer";
import { PublicationCard } from "../../Util"
//images
import CLogo from "../../Assets/Images/ClogoWhite.png";
import navBg from "../../Assets/Images/achivementNavBg.png";
import donationImg from "../../Assets/Images/donationImg.png";
import contactBtnBg from "../../Assets/Images/contactBtn.png";
import donationMineImg from "../../Assets/Images/donationMineImg.png";
import publicationBg from "../../Assets/Images/publicationBg.png";


//data
import { PublicationData } from "../../Assets/Data"


export default function Publication({ activeNav, setActiveNav }) {
  setActiveNav(3)


  return (
    <>
      <Box className="aboutContainer Publication">
        <Box className="aboutNavSection">
          <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
          <Typography className='aboutNavLabel'>Publication</Typography>
          <img src={navBg} className='navBgImg' />
        </Box>

        {/* Publication */}

        <Box className="publicationSection">
          <Box className="pubBox1">
            <img className='pub1BgImg' src={publicationBg} />
            <Typography className='pubSubHeader'>Visit OMESA's Publications for in-depth knowledge on sophisticated mining techniques and latest technologies influencing Odisha Mining Sector. Our Publications embodies sustainable practices and technology innovations which are key to achieve efficient resource utilisation with minimal adverse environmental impact.</Typography>
            <Box className='publicationCardBox'>
              {
                PublicationData?.slice(0, 8).map((el, i) => (
                  PublicationCard({ bgImg: el?.img, title: el?.title, summery: el.summery, i })
                ))
              }
            </Box>
          </Box>
        </Box>



        {/* Donation sention */}

        <Box className="donationSection">
          <Box className="donTextBox">
            <img className='donationLabel' src={donationImg} data-aos="fade-right" />
            <Typography className='welHeader' data-aos="fade-down">Support</Typography>
            <Typography className='welHeader2' data-aos="fade-down">OMESA</Typography>
            <Box className="HrLine" sx={{ background: '#190D9A' }} data-aos="fade-down"></Box>
            <Typography className='amNText' data-aos="fade-down">
            Support OMESA's mission in advancing mining practices in Odisha. 
            Your help fuels our efforts in technology, education, and community outreach. 
            Join us in making a difference today.
            </Typography>
            <Box className="contactBtnBox" data-aos="fade-right">
              <img src={contactBtnBg} />
              <Typography>Donation Today!</Typography>
            </Box>
          </Box>
          <Box className="donImgBox" data-aos="fade-left">
            <img src={donationMineImg} />
          </Box>
        </Box>

        {/* Publication */}

        <Box className='publicationCardBox pub2Box'>
          {
            PublicationData?.slice(-8).map((el, i) => (
              PublicationCard({ bgImg: el?.img, title: el?.title, summery: el.summery, i })
            ))
          }
        </Box>

        <Footer activeNav={activeNav} setActiveNav={setActiveNav} />
      </Box>
    </>
  )
}
