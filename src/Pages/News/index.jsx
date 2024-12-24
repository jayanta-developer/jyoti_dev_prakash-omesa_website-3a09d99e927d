import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
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

//data
import { newsData } from "../../Assets/Data"

const itemsPerPage = 16;
export default function News({ activeNav, setActiveNav, newsIndex, setNewsIndex }) {
  const navigate = useNavigate()
  setActiveNav(5)
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const currentData = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNewsClick = (i) => {
    setNewsIndex(i)
    localStorage.setItem("newsIndex", i)
    navigate('/news-details')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <>
      <Box className="aboutContainer galleryPage newsPage">
        <Box className="aboutNavSection">
          <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
          <Typography className='aboutNavLabel'>Latest News</Typography>
          <img src={navBg} className='navBgImg' />
        </Box>

        {/* gallery section */}
        <Box className="galleryBox">
          <Typography className="gallerySummery">Stay updated with the latest breakthroughs in the mining industry. From cutting-edge technologies to global trends, we bring you the news shaping the future of mining.</Typography>

          <Box className="newsCardBox">
            {currentData.map((el, i) => (
              <Box key={i} className='newsCard' data-aos="fade-up" onClick={() => handleNewsClick(i)}>
                <img src={el.img} />
                <Box className="newSummeryBox">
                  <Typography>{el.label}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box className="pagination">
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
