import React, { useState } from 'react';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import BookList from '../book-list/BookList';
import { MenuAppBar } from '../menu-app-bar/MenuAppBar';

function HomePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <MenuAppBar />
      <IconButton onClick={toggleDrawer(true)} sx={{ position: 'absolute', top: 16, left: 16 }}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/book-list">
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Book List" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4">Welcome to the Library.</Typography>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/book-list" element={<BookList />} />
        </Routes>
        <Outlet />
      </Box>
    </Box>
  );
}

export default HomePage;

