import React from 'react';
import "./style.css"

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from "../../Components/Footer";
import { loremCard, numCard } from "../../Util"
//images
import CLogo from "../../Assets/Images/ClogoWhite.png";
import navBg from "../../Assets/Images/achivementNavBg.png";
import donationImg from "../../Assets/Images/donationImg.png";
import contactBtnBg from "../../Assets/Images/contactBtn.png";
import donationMineImg from "../../Assets/Images/donationMineImg.png";
import videoThum from "../../Assets/Images/videoThum.png";
import booringImg from "../../Assets/Images/booringImg.png"

export default function Achievement({ activeNav, setActiveNav }) {
  setActiveNav(2)


  return (
    <>
      <Box className="aboutContainer achivementPage">
        <Box className="aboutNavSection">
          <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
          <Typography className='aboutNavLabel' data-aos="fade-up">Achievement</Typography>
          <img src={navBg} className='navBgImg' />
        </Box>


        {/* Omesa achivement section */}
        {/* <Box className="achivementMainSection">
          <Box className="aoTextBox">
            <Typography className='aoHeader'>OMESA <br /> <span>Achievement</span></Typography>
            <Box className="HrLine" sx={{ background: '#190D9A' }}></Box>
            <Typography className='amSubText'>Sed vulputate fermentum placerat. Etiam iaculis lectus turpis, et finibus tortor vulputate vitae.</Typography>
            <Typography className='amNText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc odio, malesuada a lacus et, molestie sagittis neque. Etiam dictum purus eu dui vehicula auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque rutrum nec dolor vel egestas. Ut ac tincidunt elit, ac congue dolor. Suspendisse blandit imperdiet sodales. Nullam interdum facilisis sem, quis fringilla nulla lobortis in. Ut iaculis ante at aliquam ornare. Duis suscipit velit vulputate enim dapibus ultrices. Phasellus sit amet tempus arcu, in lacinia libero. Praesent vulputate nulla nec molestie tempor. Pellentesque ut arcu ac nisl malesuada dictum. Donec pellentesque est arcu, vitae consectetur turpis eleifend at.</Typography>
          </Box>
          <Box className="loremCardBox">
            {loremCard({ text1: "650", text2: "Lorem ipsum dolor", bgColor: "#F0D777", textColor: "#BB0D19" })}
            {loremCard({ text1: "550", text2: "Lorem ipsum dolor", bgColor: "#fff", textColor: "#190D9A" })}
            {loremCard({ text1: "130", text2: "Lorem ipsum dolor", bgColor: "#fff", textColor: "#BB0D19" })}
            {loremCard({ text1: "35", text2: "Lorem ipsum dolor", bgColor: "#fff", textColor: "#190D9A" })}
          </Box>
        </Box> */}


        {/* booring section */}
        {/* <Box className="booringSection aboutOmesaSection" data-aos="fade-up">
          <Box className="booringB booringImgBox" data-aos="fade-right">
            <img src={booringImg} />
          </Box>
          <Box className="booringB" data-aos="fade-left">
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit ipsum nec urna porta maximus id molestie nunc. Mauris quis neque tristique dui venenatis hendrerit. Suspendisse cursus orci ac dapibus vestibulum. Pellentesque tempus placerat interdum. Donec a convallis diam, sollicitudin tempus elit. Integer gravida orci libero, eu efficitur neque feugiat in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sed hendrerit diam. Donec nulla tellus, ultricies blandit bibendum eget, dictum nec libero. Cras vestibulum, velit pellentesque auctor sagittis, dolor sapien cursus odio, vel placerat augue quam sed massa. Donec maximus, ante a tincidunt vehicula, risus augue egestas lorem, vitae sagittis velit justo id dolor. Cras congue pulvinar dapibus. </Typography>
          </Box>
        </Box> */}

        {/* num section */}

        {/* <Box className="numSection">

          <Box className="numRow">
            {numCard({ numColor: "#bb0d19", num: "1", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
            {numCard({ numColor: "#190D9A", num: "2", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
            {numCard({ numColor: "#F0D777", num: "3", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
          </Box>
          <Box className="numRow">
            {numCard({ numColor: "#bb0d19", num: "4", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
            {numCard({ numColor: "#190D9A", num: "5", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
            {numCard({ numColor: "#F0D777", num: "6", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
          </Box>
          <Box className="numRow">
            {numCard({ numColor: "#bb0d19", num: "7", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
            {numCard({ numColor: "#190D9A", num: "8", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
            {numCard({ numColor: "#F0D777", num: "9", title: "Sed vulputate fermentum placerat.", summery: "Donec facilisis arcu magna, in finibus leo vehicula id. Phasellus eros sapien, pharetra sed mauris ut, condimentum rhoncus mi. " })}
          </Box>

        </Box> */}

        {/* G paragraph Section */}
        {/* <Box className="GParaSection">
          <Typography data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc odio, malesuada a lacus et, molestie sagittis neque. Etiam dictum purus eu dui vehicula auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque rutrum nec dolor vel egestas. Ut ac tincidunt elit, ac congue dolor. Suspendisse blandit imperdiet sodales. Nullam interdum facilisis sem, quis fringilla nulla lobortis in. Ut iaculis ante at aliquam ornare. Duis suscipit velit vulputate enim dapibus ultrices. Phasellus sit amet tempus arcu, in lacinia libero. Praesent vulputate nulla nec molestie tempor. Pellentesque ut arcu ac nisl malesuada dictum. Donec pellentesque est arcu, vitae consectetur turpis eleifend at.</Typography>
          <Box></Box>
          <Typography data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit ipsum nec urna porta maximus id molestie nunc. Mauris quis neque tristique dui venenatis hendrerit. Suspendisse cursus orci ac dapibus vestibulum. Pellentesque tempus placerat interdum. Donec a convallis diam, sollicitudin tempus elit. Integer gravida orci libero, eu efficitur neque feugiat in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sed hendrerit diam. Donec nulla tellus, ultricies blandit bibendum eget, dictum nec libero. Cras vestibulum, velit pellentesque auctor sagittis, dolor sapien cursus odio, vel placerat augue quam sed massa. Donec maximus, ante a tincidunt vehicula, risus augue egestas lorem, vitae sagittis velit justo id dolor. Cras congue pulvinar dapibus. Curabitur ac sapien non sem tristique ornare. Cras turpis felis, sodales a scelerisque ut, finibus eget libero. Integer commodo congue dui, quis iaculis nisi cursus vel.</Typography>
        </Box> */}


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
