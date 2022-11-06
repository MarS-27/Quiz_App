import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import Button from '@mui/material/Button';
import ThemeButton from '../buttons/ThemeChangeButton';

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ marginBottom: '20px' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <NotListedLocationIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} fontSize="large" />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontSize: '30px',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JavaScript Quiz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link className='nav__item' to={`/`}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">QUIZ</Typography>
                </MenuItem>
              </Link>
              <Link className='nav__item' to={`/createQuestion`}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">CREATE QUESTION</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <NotListedLocationIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} fontSize="large" />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JS Quiz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link className='nav__item' to={`/`}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                QUIZ
              </Button>
            </Link>
            <Link className='nav__item' to={`/createQuestion`}>
              <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  CREATE QUESTION
              </Button>
            </Link>
          </Box> 
          <ThemeButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;