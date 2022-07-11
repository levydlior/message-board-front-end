import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import NavBar from "./NavBar";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import MenuItem from '@mui/material/MenuItem';


export default function BasicMenu({loggedIn, onLogout}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => {
    setAnchorEl(null);
  };
function handleClosingMenu(){

}
  return (
    <div id='burger-button-div'>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {!anchorEl? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
         <MenuItem onClick={handleClose}><NavBar idName="burger-nav" ulIdName="burger-ul" onClosingMenu={handleClosingMenu} loggedIn={loggedIn} onLogout={onLogout} /></MenuItem>
      </Menu>
    </div>
  );
}
