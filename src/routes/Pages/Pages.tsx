import Box from '@mui/material/Box';

import About from '@/pages/About';
import Portfolio from '@/pages/Portfolio';
import Welcome from '@/pages/Welcome';
import Footer from '@/sections/Footer';

import { getPageHeight } from './utils';

function Pages() {
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      {/* <Routes>{renderRoutes(routes)}</Routes> */}
      <Welcome />
      <About />
      <Portfolio />
      <Footer />
    </Box>
  );
}

export default Pages;
