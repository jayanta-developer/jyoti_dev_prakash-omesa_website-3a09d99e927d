import React from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";

//images
import CLogo from "../../Assets/Images/CLogo.png";
import worldMap from "../../Assets/Images/worldMap.png";
import workerImg from "../../Assets/Images/miningWorkerImg.png";
import miningDumperImg from "../../Assets/Images/miningDumperImg.png"
import contactBtnBg from "../../Assets/Images/contactBtn.png";
import omesaDBg from "../../Assets/Images/aboutOmesaDBg.png";
import A_omeasFm from "../../Assets/Images/A_omeasFm.png";
import rebinImg from "../../Assets/Images/rabinImg.png";
import publicationBg from "../../Assets/Images/publicationBg.png";
import donationImg from "../../Assets/Images/donationImg.png";
import donationMineImg from "../../Assets/Images/donationMineImg.png";
import videoThum from "../../Assets/Images/videoThum.png";
import GrA1 from "../../Assets/Images/gallery/G25.jpg"
import GrA2 from "../../Assets/Images/gallery/G26.jpg"
import GrA3 from "../../Assets/Images/gallery/G27.jpg"
import GrA4 from "../../Assets/Images/gallery/G28.jpg"

import GrB1 from "../../Assets/Images/gallery/G29.jpg"
import GrB2 from "../../Assets/Images/gallery/G30.jpg"
import GrB3 from "../../Assets/Images/gallery/G31.jpg"
import GrB4 from "../../Assets/Images/gallery/G32.jpg"

import GrC1 from "../../Assets/Images/gallery/G33.jpg"
import GrC2 from "../../Assets/Images/gallery/G34.jpg"
import GrC3 from "../../Assets/Images/gallery/G35.jpg"
import GrC4 from "../../Assets/Images/gallery/G36.jpg"


//data
import { PublicationData, newsData } from "../../Assets/Data"

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from "../../Components/Footer"
import { PublicationCard, loremCard } from "../../Util"

export default function Home({ activeNav, setActiveNav, setNewsIndex }) {
  setActiveNav(0);
  const navigate = useNavigate();


  const handleNewsClick = (i) => {
    setNewsIndex(i)
    localStorage.setItem("newsIndex", i)
    navigate('/news-details')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <>
      <Box className="homeContainer">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
        <Box className="homeScetion">
          <img src={worldMap} className='worldMap' />

          <Box className="workerImgBox">
            <img src={workerImg} className="HworkerImg" />
            <img src={miningDumperImg} className="miningDumperImg" />
          </Box>

          <Box className="homeWcTextBox">
            <Typography className='welHeader'>Welcome To The</Typography>
            <Typography className='welHeader2'>Odisha Mining <br /> Engineers</Typography>
            <Typography className='welSubText'>Service Association</Typography>
            <Typography className='welNText'>ଖଣିର ବିଶେଷତା, ଉତ୍କଳର ସେବାବିଧାନ
              <br />Mining excellence, Odisha's service approach.
            </Typography>

            <Box className="homeBtnBox">
              <Box className="contactBtnBox">
                <img src={contactBtnBg} />
                <Typography>CONTACT US</Typography>
              </Box>
            </Box>

          </Box>

          {/* <Box className="loremBox">
            <Typography className='achiveText'>OUR ACHIEVEMENT</Typography>
            <Box className="loremCardBox">
              {loremCard({ text1: "650", text2: "Lorem ipsum dolor", bgColor: "#F0D777", textColor: "#BB0D19" })}
              {loremCard({ text1: "550", text2: "Lorem ipsum dolor", bgColor: "#fff", textColor: "#190D9A" })}
              {loremCard({ text1: "130", text2: "Lorem ipsum dolor", bgColor: "#fff", textColor: "#BB0D19" })}
              {loremCard({ text1: "35", text2: "Lorem ipsum dolor", bgColor: "#fff", textColor: "#190D9A" })}

              <Box className="viewAllBtn" data-aos="fade-left">
                <Typography>VIEW ALL</Typography>
              </Box>

            </Box>
          </Box> */}
        </Box>

        {/* Omesa About section */}
        <Box className="aboutOmesaSection">
          <img src={omesaDBg} className='omesaBg' />
          <Box className="aoImgBox" data-aos="fade-right">
            <img src={A_omeasFm} />
            <Box className="aoImgLable">
              <Typography>Since</Typography>
              <Box>
                <img src={rebinImg} />
                <Typography>2016</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="aoTextBox" data-aos="fade-left">
            <Typography className='aoHeader'>About <br /><span>OMESA</span></Typography>
            <Box className="HrLine" sx={{ background: '#190D9A' }}></Box>
            <Typography className='amSubText'>Directing Odisha's Mining Sector Towards Sustainable Development and Innovation.</Typography>
            <Typography className='amNText'>OMESA, the Odisha Mining Engineers' Service Association, is a professional organization consisting engineers under the Directorate of Mines & Geology, Odisha. It majorly focuses on promoting sustainable mining practices and advancing mineral administration, crucial for the economic growth and environmental conservation of Odisha.</Typography>

            <Box className="contactBtnBox">
              <img src={contactBtnBg} />
              <Typography>ABOUT US</Typography>
            </Box>
          </Box>
        </Box>

        {/* Publication */}

        <Box className="publicationSection">
          <Box className="pubBox1">
            <img className='pub1BgImg' src={publicationBg} />
            <Typography className='pubHeader' data-aos="fade-down">Publication</Typography>
            <Box className="HrLine" sx={{ background: '#BB0D19' }}></Box>
            <Typography className='pubSubHeader' data-aos="fade-down">Explore OMESA's Publications: Dive into Mining Practices and Innovations for Odisha's Mineral Sector.</Typography>

            <Box className='publicationCardBox'>
              {
                PublicationData?.slice(0, 4).map((el, i) => (
                  PublicationCard({ bgImg: el?.img, title: el?.title, summery: el.summery, i })
                ))
              }
            </Box>
          </Box>
          <Box className="pubBox2">
            <Box className="pub2BtnBox" data-aos="fade-up">
              <Box className="contactBtnBox">
                <img src={contactBtnBg} />
                <Typography>LEARN MORE</Typography>
              </Box>
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

        {/* gellary Section */}
        <Box className="gellarySection">
          <Box className="yellowBox" data-aos="fade-top">
            <img src={videoThum} />
          </Box>
          <Box className="gelleryInnerBox">
            <Typography className='pubHeader' data-aos="fade-down">Photo Gallery</Typography>
            <Box className="HrLine" sx={{ background: '#BB0D19' }} data-aos="fade-down"></Box>
            <Typography className='pubSubHeader' data-aos="fade-down">Explore OMESA's Gallery: Highlighting Events and Initiatives for Innovation and Excellence in Mining.</Typography>

            <Box className="photoGelleryMainbox">
              <Box className="photoGelleryRow">
                <img src={GrA1} className='GrA1' />
                <img src={GrA2} className='GrA2' />
                <img src={GrA3} className='GrA3' />
                <img src={GrA4} className='GrA4' />
              </Box>
              <Box className="photoGelleryRow">
                <img src={GrB1} className='GrB1' />
                <img src={GrB2} className='GrB2' />
                <img src={GrB3} className='GrB3' />
                <img src={GrB4} className='GrB4' />
              </Box>
              <Box className="photoGelleryRow">
                <img src={GrC1} className='GrC1' />
                <img src={GrC2} className='GrC2' />
                <img src={GrC3} className='GrC3' />
                <img src={GrC4} className='GrC4' />
              </Box>
            </Box>

            <Box className="pub2BtnBox">
              <Box className="contactBtnBox" onClick={() => {
                navigate("/gallery")
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }} data-aos="fade-right">
                <img src={contactBtnBg} />
                <Typography>View all photo</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/*  latest news box */}

        <Box className="newsBox">
          <Typography className='pubHeader' data-aos="fade-down">Latest News</Typography>
          <Box className="HrLine" sx={{ background: '#BB0D19' }} data-aos="fade-down"></Box>
          <Typography className='pubSubHeader' data-aos="fade-down">Stay updated with the latest breakthroughs in the mining industry. 
            From cutting-edge technologies to global trends, 
            we bring you the news shaping the future of mining. </Typography>

          <Box className="newsCardBox">
            {newsData.slice(0, 3).map((el, i) => (
              <Box key={i} className='newsCard' data-aos="fade-up" onClick={() => handleNewsClick(i)}>
                <img src={el.img} />
                <Box className="newSummeryBox">
                  <Typography>{el.label}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box className="pub2BtnBox">
            <Box className="contactBtnBox" data-aos="fade-right">
              <img src={contactBtnBg} />
              <Typography>Latest News</Typography>
            </Box>
          </Box>
        </Box>
        <Footer activeNav={activeNav} setActiveNav={setActiveNav} />
      </Box>
    </>
  )
} 
