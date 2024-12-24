import React from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css";

//components
import { Box, Typography, Button } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

//data
import { newsData } from "../../Assets/Data"

//images
import CLogo from "../../Assets/Images/CLogo.png";
import APImg1 from "../../Assets/Images/APImg1.png";
import APImg2 from "../../Assets/Images/APImg2.png";
import backArrow from "../../Assets/Images/backArrow.png"

export default function NewsDetails({ activeNav, setActiveNav, newsIndex, setNewsIndex }) {
  const navigate = useNavigate()
  setActiveNav(5)
  setNewsIndex(!newsIndex ? localStorage.getItem("newsIndex") : newsIndex)

  const handleBack = () => {
    navigate("/news")
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsClick = (i) => {
    setNewsIndex(i)
    localStorage.setItem("newsIndex", i)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Box className="newsDetailsPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} CLogo={CLogo} />
        <Box className="newsDMainSection">

          <Box className="newsImgBox">
            <img src={backArrow} className='backArrow' onClick={handleBack} />
            <img src={newsData[newsIndex]?.img} />
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
            <Typography data-aos="fade-up">Our portfolio has grown to include some of the most creative new construction and renovation projects beautifying the area. We are proud of our client testimonials and references which demonstrate that we are the right partner. We look forward to adding you to our portfolio of success stories.</Typography>
          </Box>


          <Box className="newsBox">
            <Typography className='pubHeader' data-aos="fade-down">Latest News</Typography>
            <Box className="HrLine" sx={{ background: '#BB0D19' }} data-aos="fade-down"></Box>

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
          </Box>
        </Box>
        <Footer activeNav={activeNav} setActiveNav={setActiveNav} />
      </Box>
    </>
  )
}
