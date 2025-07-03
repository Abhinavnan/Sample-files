import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Typography, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from '../../../Autentication/Logout';

function TodoHeader() {
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: '100vw',}}>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex'}}>
          <IconButton component={Link} to='/home' sx={{'&:hover': {color: 'inherit'}, color: 'inherit'}}>
            <HomeIcon sx={{fontSize: '2rem'}} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1}}
          >
            To-do List
          </Typography>
          <IconButton onClick={()=>Logout(dispatch)} sx={{color: 'inherit',}}>
            <LogoutIcon sx={{fontSize: '2rem'}} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TodoHeader;