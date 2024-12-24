import React, { useEffect, useState } from 'react';
import "./style.css"

//components
import { Box, Typography, Button } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from "../../Components/Footer";

//images
import CLogo from "../../Assets/Images/ClogoWhite.png";
import navBg from "../../Assets/Images/aboutNavBg.png";
import donationImg from "../../Assets/Images/donationImg.png";
import contactBtnBg from "../../Assets/Images/contactBtn.png";
import donationMineImg from "../../Assets/Images/donationMineImg.png";
import videoThum from "../../Assets/Images/videoThum.png";

//Gallery images
import G1 from "../../Assets/Images/gallery/G1.png";
import G2 from "../../Assets/Images/gallery/G2.png";
import G3 from "../../Assets/Images/gallery/G3.png";
import G4 from "../../Assets/Images/gallery/G4.png";
import G5 from "../../Assets/Images/gallery/G5.png";
import G6 from "../../Assets/Images/gallery/G6.png";
import G7 from "../../Assets/Images/gallery/G7.png";
import G8 from "../../Assets/Images/gallery/G8.png";
import G9 from "../../Assets/Images/gallery/G9.png";
import G10 from "../../Assets/Images/gallery/G10.png";
import G11 from "../../Assets/Images/gallery/G11.png";
import G12 from "../../Assets/Images/gallery/G12.png";
import G13 from "../../Assets/Images/gallery/G13.png";
import G14 from "../../Assets/Images/gallery/G14.png";
import G15 from "../../Assets/Images/gallery/G15.png";
import G16 from "../../Assets/Images/gallery/G16.png";
import G17 from "../../Assets/Images/gallery/G17.png";
import G18 from "../../Assets/Images/gallery/G18.png";
import G19 from "../../Assets/Images/gallery/G19.png";
import G20 from "../../Assets/Images/gallery/G20.png";
import G21 from "../../Assets/Images/gallery/G21.png";
import G22 from "../../Assets/Images/gallery/G22.png";
import G23 from "../../Assets/Images/gallery/G23.png";
import G24 from "../../Assets/Images/gallery/G24.png";
import G25 from "../../Assets/Images/gallery/G9.png";
import G26 from "../../Assets/Images/gallery/G10.png";
import G27 from "../../Assets/Images/gallery/G11.png";
import G28 from "../../Assets/Images/gallery/G12.png";
import G29 from "../../Assets/Images/gallery/G13.png";
import G30 from "../../Assets/Images/gallery/G14.png";
import G31 from "../../Assets/Images/gallery/G15.png";
import G32 from "../../Assets/Images/gallery/G16.png";
import G33 from "../../Assets/Images/gallery/G17.png";
import G34 from "../../Assets/Images/gallery/G18.png";
import G35 from "../../Assets/Images/gallery/G19.png";
import G36 from "../../Assets/Images/gallery/G20.png";
import G37 from "../../Assets/Images/gallery/G21.png";
import G38 from "../../Assets/Images/gallery/G22.png";
import G39 from "../../Assets/Images/gallery/G23.png";
import G40 from "../../Assets/Images/gallery/G24.png";

import G25N from "../../Assets/Images/gallery/G25.jpg";
import G26N from "../../Assets/Images/gallery/G26.jpg";
import G27N from "../../Assets/Images/gallery/G27.jpg";
import G28N from "../../Assets/Images/gallery/G28.jpg";
import G29N from "../../Assets/Images/gallery/G29.jpg";
import G30N from "../../Assets/Images/gallery/G30.jpg";
import G31N from "../../Assets/Images/gallery/G31.jpg";
import G32N from "../../Assets/Images/gallery/G32.jpg";
import G33N from "../../Assets/Images/gallery/G33.jpg";
import G34N from "../../Assets/Images/gallery/G34.jpg";
import G35N from "../../Assets/Images/gallery/G35.jpg";
import G36N from "../../Assets/Images/gallery/G36.jpg";
import G37N from "../../Assets/Images/gallery/G37.jpg";
import G38N from "../../Assets/Images/gallery/G38.jpg";

const itemsPerPage = 16;
export default function Gallery({ activeNav, setActiveNav }) {
  setActiveNav(4)
  const [currentPage, setCurrentPage] = useState(1);

  const ImageData = [
    G25N, G26N, G27N, G28N, G29N, G30N, G31N, G32N, G33N, G34N, G35N, G36N, G37N, G38N
  ]

  const totalPages = Math.ceil(ImageData.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const currentData = ImageData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <>
      <Box className="aboutContainer galleryPage">
        <Box className="aboutNavSection">
          <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
          <Typography className='aboutNavLabel' data-aos="fade-up">Gallery</Typography>
          <img src={navBg} className='navBgImg' />
        </Box>

        {/* gallery section */}
        <Box className="galleryBox">
          <Typography className="gallerySummery">Explore OMESA's Gallery: Highlighting Events and Initiatives for Innovation and Excellence in Mining.</Typography>

          <Box className="photoGelleryRow">
            {currentData.map((el, i) => (
              <img data-aos="fade-up" key={i} src={el} />
            ))}
          </Box>

          <Box className="pagination" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                variant="outlined"
                key={i}
                onClick={() => handleClick(i + 1)}
                disabled={currentPage === i + 1}>
                {i + 1}
              </Button>
            ))}
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


        <Box className="yellowBox" data-aos="fade-up">
          <img src={videoThum} />
        </Box>

        <Footer activeNav={activeNav} setActiveNav={setActiveNav} />
      </Box>
    </>
  )
}
