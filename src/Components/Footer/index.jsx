import React from 'react'
import "./style.css"

//components
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

//images
import worldMap from "../../Assets/Images/worldMap.png";
import workerImg from "../../Assets/Images/miningWorkerImg.png";
import Clogo from "../../Assets/Images/CLogo.png"
import HNavItemImg from "../../Assets/Images/navHighLightImg.png"
import LocationIcon from "../../Assets/Images/locationIcon.png";
import mailIcon from "../../Assets/Images/mailIcon.png";
import callIcon from "../../Assets/Images/callIcon.png";
import facebookIcon from "../../Assets/Images/facebookIcon.png";
import twittIcon from "../../Assets/Images/TwitteIcon.png"


export default function Footer({ activeNav, setActiveNav }) {
  const navigate = useNavigate()



  return (
    <>
      <Box className="footer">
        <Box className="mapBox">
          <img src={worldMap} className='worldMap' />
          <Box className="mapCenterBox">
            <img src={Clogo} className='FClogo' />
            <img src={workerImg} className='fMineImg' />
          </Box>


          <Box className="navInnerBox">
            <Box className={activeNav === 0 ? "navItem navItemActive" : "navItem"} onClick={() => {
              setActiveNav(0)
              navigate("/")
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Typography>HOME</Typography>
              <img src={HNavItemImg} style={{ display: activeNav === 0 ? "block" : "none" }} />
            </Box>
            <Box className={activeNav === 1 ? "navItem navItemActive" : "navItem"} onClick={() => {
              setActiveNav(1)
              navigate("/about")
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Typography>ABOUT</Typography>
              <img src={HNavItemImg} style={{ display: activeNav === 1 ? "block" : "none" }} />

            </Box>
            {/* <Box className={activeNav === 2 ? "navItem navItemActive" : "navItem"} onClick={() => {
              setActiveNav(2)
              navigate("/achievement")
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Typography>ACHIEVEMENT</Typography>
              <img src={HNavItemImg} style={{ display: activeNav === 2 ? "block" : "none" }} />
            </Box> */}


            <Box className={activeNav === 3 ? "navItem navItemActive" : "navItem"} onClick={() => {
              setActiveNav(3)
              navigate("/publication")
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Typography>PUBLICATION</Typography>
              <img src={HNavItemImg} style={{ display: activeNav === 3 ? "block" : "none" }} />
            </Box>

            <Box className={activeNav === 4 ? "navItem navItemActive" : "navItem"} onClick={() => {
              setActiveNav(4)
              navigate("/gallery")
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Typography>GALLERY</Typography>
              <img src={HNavItemImg} style={{ display: activeNav === 4 ? "block" : "none" }} />
            </Box>

            <Box className={activeNav === 5 ? "navItem navItemActive" : "navItem"} onClick={() => {
              setActiveNav(5)
              navigate("/news")
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Typography>NEWS</Typography>
              <img src={HNavItemImg} style={{ display: activeNav === 5 ? "block" : "none" }} />

            </Box>
            <Box className={activeNav === 6 ? "navItem navItemActive" : "navItem"} onClick={() => {
              setActiveNav(6)
              navigate("/contact")
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}>
              <Typography>CONTACT</Typography>
              <img src={HNavItemImg} style={{ display: activeNav === 6 ? "block" : "none" }} />

            </Box>
          </Box>
        </Box>

        <Box className="fContactBox">
          <Box className="contactItemBox">
            <img src={LocationIcon} />
            <Typography>Heads of Departments Rd, Keshari Nagar, Bhubaneswar, Odisha 751001</Typography>
          </Box>
          <Box className="contactItemBox">
            <img src={mailIcon} />
            <Typography>support@OMESA.com</Typography>
          </Box>
          <Box className="contactItemBox">
            <img src={callIcon} />
            <Typography>0674 - 2543885</Typography>
          </Box>
          <Box className="FMLogoBox">
            <img src={facebookIcon} className='pointer' />
            <img src={twittIcon} className='pointer' />
          </Box>
        </Box>
        <Box className="fLastBox">
          <Typography >© 2024 <span>Odisha Mining Engineers Service Association.</span> All Rights Reserved.</Typography>
        </Box>
      </Box>
    </>
  )
}
