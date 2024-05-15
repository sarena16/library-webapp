import { Box, Button } from '@mui/material';

import { Link, Outlet } from 'react-router-dom';
import { MenuAppBar } from '../menu-app-bar/MenuAppBar';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" component={Link} to="/settings">
          Settings
        </Button>
        <Button variant="contained" component={Link} to="/books">
          Books
        </Button>
      </Box>
    </Box>
  );
}
