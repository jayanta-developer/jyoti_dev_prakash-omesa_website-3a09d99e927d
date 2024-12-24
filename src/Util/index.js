import { Box, Typography } from "@mui/material";
import { Arrow } from "../Assets/Data";

export const PublicationCard = ({ bgImg, title, summery, i }) => {
  return (
    <Box className="publicationCard" key={i} data-aos="fade-up">
      <Box className="pubCimgBox">
        <img src={bgImg} />
      </Box>
      <Typography className="pubCName">{title}</Typography>
      <Typography className="pubCSummery">{summery}</Typography>
      <Box className="pubCGoBtn">{Arrow()}</Box>
    </Box>
  );
};

export const loremCard = ({ text1, text2, bgColor, textColor }) => {
  return (
    <Box data-aos="fade-up" className="loremCard" sx={{ background: bgColor }}>
      <Typography sx={{ color: textColor }}>{text1} +</Typography>
      <span>{text2}</span>
    </Box>
  );
};

export const UserCard = ({ img, name, title }) => {
  return (
    <Box className="userCard" data-aos="fade-up">
      <img src={img} />
      <Typography className="userName">{name}</Typography>
      <Typography className="title">{title}</Typography>
    </Box>
  );
};

export const numCard = ({ numColor, num, title, summery }) => {
  return (
    <Box className="numCard" data-aos="fade-up">
      <Box className="CountBox" sx={{ background: numColor }}>
        <Typography>{num}</Typography>
      </Box>
      <Box className="numTextBox">
        <Typography>{title}</Typography>
        <span>{summery}</span>
      </Box>
    </Box>
  );
};
