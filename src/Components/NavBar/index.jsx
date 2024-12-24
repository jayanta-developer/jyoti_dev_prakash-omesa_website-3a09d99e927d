import React, { useState, useEffect } from 'react';
import "./style.css"
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

//images
import HNavItemImg from "../../Assets/Images/navHighLightImg.png";
import MenuIcon from "../../Assets/Images/MenuIcon.png"
import backIocn from "../../Assets/Images/backIcon.png"


//component
import { AppPrimaryBtn } from "../AppBtn";



export default function NavBar({ activeNav, setActiveNav, CLogo }) {
  const navigate = useNavigate()
  const [sideMenu, setSideMenu] = useState(false)




  useEffect(() => {
    if (sideMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [sideMenu])

  return (
    <>
      <Box className="NavBar">

        <img src={CLogo} className='CLogo' onClick={() => navigate("/")} />

        <Box className="MobileMenu">
          <img src={MenuIcon} className='menuIcon' onClick={() => setSideMenu(true)} />
          <Box className="SideMenu" sx={{ width: sideMenu ? "100%" : "0%" }}>
            <img src={backIocn} className='backIcon' onClick={() => setSideMenu(false)} style={{ rotate: sideMenu ? "360deg" : "180deg" }} />

            <Box className="mobileMenuBox">

              <Box className={activeNav === 0 ? "navItem navItemActive" : "navItem"} onClick={() => {
                setActiveNav(0)
                navigate("/")
              }}>
                <Typography>HOME</Typography>
                <img src={HNavItemImg} style={{ display: activeNav === 0 ? "block" : "none" }} />
              </Box>

              <Box className={activeNav === 1 ? "navItem navItemActive" : "navItem"} onClick={() => {
                setActiveNav(1)
                navigate("/about")
              }}>
                <Typography>ABOUT</Typography>
                <img src={HNavItemImg} style={{ display: activeNav === 1 ? "block" : "none" }} />
              </Box>

              {/* <Box className={activeNav === 2 ? "navItem navItemActive" : "navItem"} onClick={() => {
                setActiveNav(2)
                navigate("/achievement")
              }}>
                <Typography>ACHIEVEMENT</Typography>
                <img src={HNavItemImg} style={{ display: activeNav === 2 ? "block" : "none" }} />
              </Box> */}


              <Box className={activeNav === 3 ? "navItem navItemActive" : "navItem"} onClick={() => {
                setActiveNav(3)
                navigate("/publication")
              }}>
                <Typography>PUBLICATION</Typography>
                <img src={HNavItemImg} style={{ display: activeNav === 3 ? "block" : "none" }} />
              </Box>

              <Box className={activeNav === 4 ? "navItem navItemActive" : "navItem"} onClick={() => {
                setActiveNav(4)
                navigate("/gallery")
              }}>
                <Typography>GALLERY</Typography>
                <img src={HNavItemImg} style={{ display: activeNav === 4 ? "block" : "none" }} />
              </Box>

              <Box className={activeNav === 5 ? "navItem navItemActive" : "navItem"} onClick={() => {
                setActiveNav(5)
                navigate("/news")
              }}>
                <Typography>NEWS</Typography>
                <img src={HNavItemImg} style={{ display: activeNav === 5 ? "block" : "none" }} />

              </Box>
              <Box className={activeNav === 6 ? "navItem navItemActive" : "navItem"} onClick={() => {
                setActiveNav(6)
                navigate("/contact")
              }}>
                <Typography>CONTACT</Typography>
                <img src={HNavItemImg} style={{ display: activeNav === 6 ? "block" : "none" }} />

              </Box>


            </Box>




          </Box>
        </Box>

        <Box className="navInnerBox">

          <Box className={activeNav === 0 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(0)
            navigate("/")
          }}>
            <Typography>HOME</Typography>
            <img src={HNavItemImg} style={{ display: activeNav === 0 ? "block" : "none" }} />
          </Box>

          <Box className={activeNav === 1 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(1)
            navigate("/about")
          }}>
            <Typography>ABOUT</Typography>
            <img src={HNavItemImg} style={{ display: activeNav === 1 ? "block" : "none" }} />
          </Box>

          {/* <Box className={activeNav === 2 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(2)
            navigate("/achievement")
          }}>
            <Typography>ACHIEVEMENT</Typography>
            <img src={HNavItemImg} style={{ display: activeNav === 2 ? "block" : "none" }} />
          </Box> */}


          <Box className={activeNav === 3 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(3)
            navigate("/publication")
          }}>
            <Typography>PUBLICATION</Typography>
            <img src={HNavItemImg} style={{ display: activeNav === 3 ? "block" : "none" }} />
          </Box>

          <Box className={activeNav === 4 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(4)
            navigate("/gallery")
          }}>
            <Typography>GALLERY</Typography>
            <img src={HNavItemImg} style={{ display: activeNav === 4 ? "block" : "none" }} />
          </Box>

          <Box className={activeNav === 5 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(5)
            navigate("/news")
          }}>
            <Typography>NEWS</Typography>
            <img src={HNavItemImg} style={{ display: activeNav === 5 ? "block" : "none" }} />

          </Box>
          <Box className={activeNav === 6 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(6)
            navigate("/contact")
          }}>
            <Typography>CONTACT</Typography>
            <img src={HNavItemImg} style={{ display: activeNav === 6 ? "block" : "none" }} />

          </Box>
        </Box>


        <Box className="navInnerBox">
          <AppPrimaryBtn btnText="DONATION" bgColor="#E0BF41" textColor="#fff" onClick={() => navigate("/donation")} />
          <AppPrimaryBtn btnText="LOG IN" bgColor="#BB0D19" textColor="#fff" />
        </Box>



      </Box>
    </>
  )
}
