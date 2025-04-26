import { Fragment } from 'react';
import { BrowserRouter } from 'react-router';

import { CssBaseline } from '@mui/material';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';

import Pages from './routes/Pages';
import Contacts from './sections/ContactMe';
import Header from './sections/Header';

// import Sidebar from './sections/Sidebar';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Contacts />
      <BrowserRouter>
        <Header />
        {/* <Sidebar /> */}
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

const AppWithErrorHandler = withErrorHandler(App, AppErrorBoundaryFallback);
export default AppWithErrorHandler;
