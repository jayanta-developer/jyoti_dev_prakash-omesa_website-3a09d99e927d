import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css"

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from "../../Components/Footer";

//images
import CLogo from "../../Assets/Images/ClogoWhite.png";
import navBg from "../../Assets/Images/DonationBg.png";
import contactBtnBg from "../../Assets/Images/contactBtn.png";
import omesaDBg from "../../Assets/Images/aboutOmesaDBg.png";
import A_omeasFm from "../../Assets/Images/donationMineImg.png";
import rebinImg from "../../Assets/Images/rabinImg.png";



export default function Donation({ activeNav, setActiveNav }) {
  setActiveNav(null);
  const [currentPrice, setCurrentPrice] = useState("500");
  const [pricePop, setPricePop] = useState(false)
  const [pricePopVal, setPricePopVal] = useState()

  const priceValue = [
    "500",
    "1000",
    "2000",
    "3000",
    "4000",
    "5000",
    "6000",
    "7000",
    "8000",
    "9000",
    "10000"
  ];


  const handlePriceBtnClick = () => {
    setCurrentPrice(pricePopVal)
    setPricePop(false)
    window.scrollTo({ top: 600, behavior: "smooth" })
  }

  const handlePopClose = (e) => {
    if (e.target.id === "pricePop") {
      setPricePop(false)
      window.scrollTo({ top: 600, behavior: "smooth" })
    }
  }

  return (
    <>
      <Box className="contacePage donationPage">

        <Box id="pricePop" className="pricePopBox" sx={{ display: pricePop ? "flex" : "none" }} onClick={handlePopClose}>
          <Box className="priceInputMainbox">
            <input type="number" placeholder='Enter amount' value={pricePopVal} onChange={(e) => setPricePopVal(e.target.value)} />
            <Box className="priceInputBtn" onClick={handlePriceBtnClick}>
              <Typography>Enter</Typography>
            </Box>
          </Box>
        </Box>




        <Box className="aboutNavSection">
          <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
          <Typography className='aboutNavLabel'>Donation</Typography>
          <img src={navBg} className='navBgImg' />
        </Box>


        <Box className="donationMainSection">

          {/* Omesa About section */}
          <Box className="aboutOmesaSection">
            <img src={omesaDBg} className='omesaBg' />
            <Box className="aoImgBox" >
              <img src={A_omeasFm} className='aoImg1' />

            </Box>
            <Box className="aoTextBox" >
              <Typography className='aoHeader'>Support <br /><span>OMESA</span></Typography>
              <Box className="HrLine" sx={{ background: '#190D9A' }}></Box>
              <Typography className='amSubText'>Support OMESA's mission in advancing mining practices in Odisha.</Typography>
              <Typography className='amNText'>Your help fuels our efforts in technology, education, and community outreach. Join us in making a difference today.</Typography>

              <Box className="donationPriceBox">
                <Box className="priceBox">
                  <Box className="pB1">
                    <Typography>₹</Typography>
                  </Box>
                  <Box className="pB2">
                    <Typography>₹{currentPrice}</Typography>
                  </Box>
                </Box>
                <Box className="PriceS_Box">
                  {
                    priceValue?.map((el, i) => (
                      <Box className="priceItemBox" key={i} onClick={() => setCurrentPrice(el)}>
                        <Typography>₹{el}</Typography>
                      </Box>
                    ))
                  }
                  <Box className="priceItemBox" onClick={() => {
                    setPricePop(true)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}>
                    <Typography>More</Typography>
                  </Box>

                </Box>
                <Box className="contactBtnBox" >
                  <img src={contactBtnBg} />
                  <Typography>Donate</Typography>
                </Box>
              </Box>


            </Box>

          </Box>
        </Box>


        <Footer activeNav={activeNav} setActiveNav={setActiveNav} />
      </Box>
    </>
  )
}
