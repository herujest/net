import Box from '@mui/material/Box';

import About from '@/pages/About';
import Page2 from '@/pages/Page2';
import Welcome from '@/pages/Welcome';

import { getPageHeight } from './utils';

function Pages() {
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      {/* <Routes>{renderRoutes(routes)}</Routes> */}
      {/* {routes.map(i => i.Component)} */}
      <Welcome />
      <About />
      <Page2 />
    </Box>
  );
}

export default Pages;
