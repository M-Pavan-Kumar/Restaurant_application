import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Typography, Button } from '@mui/material'; 
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../Images/logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useCart } from "../Pages/CartContext"
const REACT_APP_BACKEND_URL="https://restaurant-application-4.onrender.com"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false); 
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('login_data'));
    if (storedUser && storedUser.status === 'success') {
      setUser(storedUser.data);
    }
  }, []);

  const login_data = JSON.parse(localStorage.getItem('login_data'));

  const menuOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      link: '/'
    },
    {
      text: 'About',
      icon: <InfoIcon />,
      link: '/about'
    },
    {
      text: 'Menu',
      icon: <MenuBookIcon />,
      link: '/fooddetails'
    },
    {
      text: 'Contact',
      icon: <PhoneRoundedIcon />,
      link: '/contactdetails'
    },
    {
      // text: 'Cart',
      icon: <ShoppingCartRoundedIcon />,
      link: '/shoppingcart'
    }
  ];

  const handleLogout = async () => {
    try {
      localStorage.removeItem('login_data');
      setUser(null);
      
      const response = await fetch(`${REACT_APP_BACKEND_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigate('/');  // This already navigates to the home page on successful logout
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleProfileClick = () => {
    setProfileOpen(true); 
  }

  const handleProfileClose = () => {
    setProfileOpen(false); 
  }

  return (
    <nav>
      <div className='nav-logo-container'>
        <div className='d-flex'>
          <Link to="/"><img className='navbar-logo me-2' src={logo} alt='Logo' /></Link>
          <h2 className='nav-title me-2 mt-1'>Hi Foodie</h2>
          <RestaurantIcon style={{ height: '50px', width: '25px' }} />
        </div>
      </div>
      <div className='navbar-links-container'>
        {menuOptions.map((item) => (
          <Link key={item.text} to={item.link}>{item.text}</Link>
        ))}
        
        <Link to="/shoppingcart">
          <BsCart2 className='navbar-cart-icon' />
          {cartItemsCount > 0 && login_data && (
            <span className='cart-count'>{cartItemsCount}</span>
          )}
        </Link>
        
        {user ? (
          <>
            <button className='user-name' onClick={handleProfileClick}>Hi {user.username}!</button>
            <button onClick={handleLogout} className='logout-button'>
              <LogoutIcon />
            </button>
          </>
        ) : (
          <Link to="/signin">
            <button className='secondary-button'>Signin/Login</button>
          </Link>
        )}
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpen(true)} />
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} anchor='right'>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            {user ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleProfileClick}>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemIcon><LogoutIcon /></ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </>
            ) : (
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/signin">
                  <ListItemIcon><PersonIcon /></ListItemIcon>
                  <ListItemText primary="Login/Register" />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
      <Modal
        open={profileOpen}
        onClose={handleProfileClose}
        aria-labelledby="profile-modal-title"
        aria-describedby="profile-modal-description"
      >
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: { xs: '90%', sm: 400 }, 
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: 4 
        }}>
          <Typography id="profile-modal-title" variant="h6" component="h2">
            Profile Details
          </Typography>
          <Typography id="profile-modal-description" sx={{ mt: 2 }}>
            Username: {user?.username}
            <br />
            Email: {user?.email}
          </Typography>
          <Button className='primary' onClick={handleProfileClose} variant="contained" sx={{ mt: 2, bgcolor: 'skyblue', color: 'white', '&:hover': { bgcolor: 'deepskyblue' } }}>
            Close
          </Button>
        </Box>
      </Modal>
    </nav>
  );
};

export default Navbar;
