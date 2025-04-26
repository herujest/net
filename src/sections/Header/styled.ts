import { Box, Link, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Image = styled('img')({
  width: '10%',
  height: '10%',
  margin: 4,
});

const ContactButton = styled(Button)(({ theme }) => ({
  height: 'fit-content',
  alignSelf: 'center',
  marginRight: theme.spacing(1),
  borderColor: theme.palette.text.disabled,
  '&:hover': {
    borderColor: theme.palette.text.disabled,
  },
  color: theme.palette.text.disabled,
}));

const BrandText = styled(Typography)(() => ({
  fontSize: '1.4rem', // text-xl
  fontWeight: 'bold', // font-bold
  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', // from-blue-500 to-purple-600
  WebkitBackgroundClip: 'text', // bg-clip-text
  WebkitTextFillColor: 'transparent', // text-transparent
  textTransform: 'none',
}));

const HeaderWrapper = styled('header')<{ isscrolled: string }>(({ theme, isscrolled }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  transition: 'all 0.3s ease',
  backgroundColor: isscrolled === 'true' ? '#fff' : 'transparent',
  boxShadow: isscrolled === 'true' ? theme.shadows[1] : 'none',
  paddingTop: isscrolled === 'true' ? theme.spacing(0.1) : theme.spacing(2),
  paddingBottom: isscrolled === 'true' ? theme.spacing(0.1) : theme.spacing(2),
}));

const NavLink = styled(Link)({
  fontWeight: 700, // font-bold
  fontSize: '1.2rem', // text-base
  color: '#4B5563', // text-gray-700
  textDecoration: 'none',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#3b82f6', // hover:text-blue-500
  },
});

const MobileMenu = styled(Box)({
  marginTop: '1rem',
  padding: '1rem',
  backgroundColor: '#fff',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  animation: 'fadeIn 0.3s ease',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

export { BrandText, ContactButton, HeaderWrapper, Image, MobileMenu, NavLink };
