import { useEffect, useState } from 'react';

import X from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, IconButton } from '@mui/material';

import { title } from '@/config';

import BSIco from '../../img/bs-ico.png';
import { BrandText, HeaderWrapper, Image, MobileMenu, NavLink } from './styled';

const handleScroll = (e, id) => {
  e.preventDefault();
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper isscrolled={isScrolled.toString()}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            {/* <Code size={50} style={{ color: '#3b82f6', marginRight: '0.5rem' }} /> */}
            <Image src={BSIco} />
            <BrandText>{title}</BrandText>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            <NavLink href="#home" onClick={(e) => handleScroll(e, '#home')}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={(e) => handleScroll(e, '#about')}>
              About
            </NavLink>
            <NavLink href="#tools" onClick={(e) => handleScroll(e, '#tools')}>
              Tools
            </NavLink>
            <NavLink href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
              Contact
            </NavLink>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { md: 'none' }, color: '#4B5563' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon />}
          </IconButton>
        </Box>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <MobileMenu sx={{ display: { md: 'none' } }}>
            <Box display="flex" flexDirection="column" gap={2}>
              {['home', 'about', 'tools', 'contact'].map((section) => (
                <NavLink key={section} href={`#${section}`} onClick={() => setIsMenuOpen(false)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              ))}
            </Box>
          </MobileMenu>
        )}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

// import GitHubIcon from '@mui/icons-material/GitHub';
// import ThemeIcon from '@mui/icons-material/InvertColors';
// import MenuIcon from '@mui/icons-material/Menu';
// import {
//   AppBar,
//   Button,
//   Divider,
//   IconButton,
//   Stack,
//   Toolbar,
//   Tooltip,
//   Typography,
// } from '@mui/material';
// import { useNotifications } from '@toolpad/core/useNotifications';
// import { repository, title } from '@/config';
// import { useContactsDialog } from '@/sections/ContactMe/hooks';
// import { useSidebar } from '@/sections/Sidebar/hooks';
// import { useThemeMode } from '@/theme';
// import { ContactButton, BrandText } from './styled';
// import { getRandomJoke } from './utils';
// function Header() {
//   const { themeMode, toggle: toggleThemeMode } = useThemeMode();
//   const { open: openSidebar } = useSidebar();
//   const { open: openDialog } = useContactsDialog();
//   const notifications = useNotifications();
//   function showNotification() {
//     notifications.show(getRandomJoke(), {
//       autoHideDuration: 5000,
//     });
//   }
//   return (
//     <AppBar
//       position="static"
//       color="transparent"
//       elevation={2}
//       data-pw={`theme-${themeMode}`}
//       enableColorOnDark
//     >
//       <Toolbar>
//         <Stack direction="row" justifyContent="space-between" alignItems="center" flex={1}>
//           <Stack direction="row" gap={1} alignItems="center">
//             <IconButton
//               size="large"
//               edge="start"
//               color="info"
//               aria-label="menu"
//               onClick={openSidebar}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Button onClick={showNotification} color="info">
//               {/* <Typography textTransform={'none'} variant="h5" fontWeight={700}>
//                 {title}
//               </Typography> */}
//               <BrandText>{title}</BrandText>
//             </Button>
//             {/* <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//               tsupriyadies
//             </span> */}
//           </Stack>
//           <Stack direction="row" alignItems="center">
//             <Tooltip title="Get in touch" arrow>
//               <ContactButton
//                 size="small"
//                 variant="outlined"
//                 aria-label="open contacts dialog"
//                 onClick={openDialog}
//               >
//                 Contact Me
//               </ContactButton>
//             </Tooltip>
//             <Divider orientation="vertical" flexItem />
//             <Tooltip title="It's open source" arrow>
//               <IconButton color="info" size="large" component="a" href={repository} target="_blank">
//                 <GitHubIcon />
//               </IconButton>
//             </Tooltip>
//             <Divider orientation="vertical" flexItem />
//             <Tooltip title="Switch theme" arrow>
//               <IconButton
//                 color="info"
//                 edge="end"
//                 size="large"
//                 onClick={toggleThemeMode}
//                 data-pw="theme-toggle"
//               >
//                 <ThemeIcon />
//               </IconButton>
//             </Tooltip>
//           </Stack>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// }
// export default Header;
