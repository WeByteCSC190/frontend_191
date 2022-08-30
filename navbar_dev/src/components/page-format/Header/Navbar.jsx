import * as React from 'react';
import BlueLogo from '../../images/mlo_blue.png';
import AccountIcon from '../../images/nav_blue_icon.png';
import './navbar.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

/*  Navbar() 
**  Purpose: Sets up the navbar for all main pages and puts objects inside 
**  Left Side: Logo (MLO Support)
**  Center: NavMenu - Dashboard, Leads, Borrowers, Lenders, Resources
**  Right: Dropdown Button - Account, Sign Out (<DropdownMenu />)
*/

export default function Navbar() {
    return (
        
        <nav className="navbar">
        <Link to="/dashboard" className="site-logo">
        <img
              src={BlueLogo} //MLO Support Logo
              width="150"
              height="70"
              className="d-inline-block align-top"
              alt="MLO Support"
            />
        </Link>
       
        <ul className="nav-menu">
            <SwitchPage to="/dashboard">Dashboard</SwitchPage>
            <SwitchPage to="/leads">Leads</SwitchPage>
            <SwitchPage to="/borrowers">Borrowers</SwitchPage>
            <SwitchPage to="/lenders">Lenders</SwitchPage>
            <SwitchPage to="/resources">Resources</SwitchPage>
        </ul>
            <DropdownMenu />
        </nav>
    )
}

// Put code important functions and classes for the Navbar below */ 

// Checks for current page on Navbar and underlines/bold it
// Works only for links from NavMenu
function SwitchPage( {to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( {path: resolvedPath.pathname, end:true} ) 
    
    return (
      // Checks the current page uses css to underline/bold the link on Navbar Menu
        <li className={ isActive ? "active" : ""}> 
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


// Dropdown button on right side of navbar 
// Source: BasicMenu() from Material UI (@mui)
 function DropdownMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
             <img
              src={AccountIcon} // Adds Blue Person Icon on Navbar
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Dropdown Button"
            />

        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose} > 
          <Link to="/account" className="btn-dropdown">Account</Link> 
          </MenuItem>

          <MenuItem onClick={handleClose} >
          <Link to="/logout" className="btn-dropdown">Sign Out</Link> 
          </MenuItem>
          </Menu>
      </div>
    );
  }

