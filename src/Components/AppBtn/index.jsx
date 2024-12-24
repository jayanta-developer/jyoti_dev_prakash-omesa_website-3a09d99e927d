import { Box, Typography } from '@mui/material';
import "./style.css";


export const AppPrimaryBtn = ({ btnText, width, textColor, bgColor, onClick }) => {
  return (
    <Box className="appBtn" sx={{ background: bgColor, width, color: textColor }} onClick={onClick}>
      <Typography>{btnText}</Typography>
    </Box>
  )
}