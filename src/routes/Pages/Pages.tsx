import Box from '@mui/material/Box';

import About from '@/pages/About';
import Tools from '@/pages/Tools';
import Welcome from '@/pages/Welcome';

import { getPageHeight } from './utils';

function Pages() {
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      {/* <Routes>{renderRoutes(routes)}</Routes> */}
      <Welcome />
      <About />
      <Tools />
    </Box>
  );
}

export default Pages;
