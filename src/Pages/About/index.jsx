import React from 'react';
import "./style.css"

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from "../../Components/Footer";
import { UserCard } from "../../Util"

//images
import CLogo from "../../Assets/Images/ClogoWhite.png";
import navBg from "../../Assets/Images/aboutNavBg.png";
import omesaDBg from "../../Assets/Images/aboutOmesaDBg.png";
import A_omeasFm from "../../Assets/Images/A_omeasFm.png";
import rebinImg from "../../Assets/Images/rabinImg.png";
import APImg1 from "../../Assets/Images/APImg1.png";
import APImg2 from "../../Assets/Images/APImg2.png";
import donationImg from "../../Assets/Images/donationImg.png";
import contactBtnBg from "../../Assets/Images/contactBtn.png";
import donationMineImg from "../../Assets/Images/donationMineImg.png";
import videoThum from "../../Assets/Images/videoThum.png";
import OmesaTeamImg from "../../Assets/Images/omesaTeamSection.png";
import UserProfile from "../../Assets/Images/UserProfile.png";
import use1 from "../../Assets/Images/use1.png";
import use2 from "../../Assets/Images/use2.png";
import use3 from "../../Assets/Images/use3.png";
import use4 from "../../Assets/Images/use4.png";
import use5 from "../../Assets/Images/use5.png";
import use6 from "../../Assets/Images/use6.png";


export default function About({ activeNav, setActiveNav }) {
  setActiveNav(1);

  return (
    <>
      <Box className="aboutContainer">
        <Box className="aboutNavSection">
          <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
          <Typography className='aboutNavLabel' data-aos="fade-up">About Us</Typography>
          <img src={navBg} className='navBgImg' />
        </Box>

        {/* Omesa About section */}
        <Box className="aboutOmesaSection">
          <img src={omesaDBg} className='omesaBg' />
          <Box className="aoImgBox" >
            <img src={A_omeasFm} />
            <Box className="aoImgLable">
              <Typography>Since</Typography>
              <Box>
                <img src={rebinImg} />
                <Typography>2016</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="aoTextBox" >
            <Typography className='aoHeader'>About <br /><span>OMESA</span></Typography>
            <Box className="HrLine" sx={{ background: '#190D9A' }}></Box>
            <Typography className='amSubText'>Directing Odisha's Mining Sector Towards Sustainable Development and Innovation.</Typography>
            <Typography className='amNText'>OMESA, the Odisha Mining Engineers' Service Association, is a professional organization consisting engineers under the Directorate of Mines & Geology, Odisha. It majorly focuses on promoting sustainable mining practices and advancing mineral administration, crucial for the economic growth and environmental conservation of Odisha.</Typography>
          </Box>
        </Box>


        {/* about Paragraph Section */}
        <Box className="aboutParagraphSection">
          <Typography data-aos="fade-up">OMESA plays a more active role in adopting the most up-to-date technologies and approaches for carrying out mining operations. With this initiative, OMESA aims at driving higher efficiencies to reduce the mining ecological footprints in Odisha, that is the initiative, which OMESA attempts to ensure so that this state can balance its economic growth with environmental sustainability from controlling mineral richness of this land.</Typography>
          <Typography data-aos="fade-up">OMESA also promotes awareness in local communities on environmental preservation against mining activities, and it offers courses, seminars & publications to professionals interested in the area as well as other concerned public.</Typography>

          <Box className="APImgBox">
            <img src={APImg1} data-aos="fade-right" />
            <img src={APImg2} data-aos="fade-left" />
          </Box>

          <Typography data-aos="fade-up">In this economic development OMESA is a crucial partner of the new Odisha that underscores responsible mining and supports sustainable development. After all, our desire is to see mining as a blessing in the region and make it clear that we are not leaving children from other generations without these resources.</Typography>
          {/* <Typography data-aos="fade-up">Our portfolio has grown to include some of the most creative new construction and renovation projects beautifying the area. We are proud of our client testimonials and references which demonstrate that we are the right partner. We look forward to adding you to our portfolio of success stories.</Typography> */}
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



        {/* omesa team section */}
        <Box className="teamSection">
          <img src={OmesaTeamImg} data-aos="fade-right" />

          <Box className="omeasTeamTextBox">
            <Typography className='aoHeader' data-aos="fade-down"><span>OMESA Team</span></Typography>
            <Box className="HrLine" sx={{ background: '#190D9A' }} data-aos="fade-down"></Box>
            <Typography data-aos="fade-down">The dedicated team of mining engineers under the Directorate of Mines & Geology, Odisha are professionally committed through OMESA in their pursuit to uphold excellence in mineral administration. Apart from the strategic direction in mineral resources management within Odisha this team has been taking lead role operational challenges to improve sustainable mining efforts. Their knowledge covers a multitude of functions like compliance and resource management, growth as well as community development.</Typography>
            <Box my={4}></Box>
            <Typography data-aos="fade-down">OMESA is enabled by inherent agility, whilst fostering excellence and best practices to legacy elimination; where our team constantly collaborates with industry peers & academia capturing trends from across globe. The OMESA team with a view to bring in ethical practices and become an integral part of Odisha Socio-economic system ensures that all mining activities align with rules, laws & standardized processes. Together these activities demonstrate OMESA's function as a key facilitator in respect of responsible and sustainable mineral resource management within the region.</Typography>
          </Box>
        </Box>

        {/* Team gellery */}

        <Box className="teamGellery">
          {UserCard({ img: UserProfile, name: "Lorem ipsum dolor", title: "President" })}
          {UserCard({ img: UserProfile, name: "Lorem ipsum dolor", title: "General Secretary" })}
          {UserCard({ img: UserProfile, name: "Lorem ipsum dolor", title: "Jt. Secretary & Treasurer" })}
          {UserCard({ img: UserProfile, name: "Lorem ipsum dolor", title: "Executive Member" })}
          {UserCard({ img: UserProfile, name: "Lorem ipsum dolor", title: "Executive Member" })}
          {UserCard({ img: UserProfile, name: "Lorem ipsum dolor", title: "Executive Member" })}

        </Box>

        <Box className="pub2BtnBox">
          <Box className="contactBtnBox" data-aos="fade-right">
            <img src={contactBtnBg} />
            <Typography>Contact Us</Typography>
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
