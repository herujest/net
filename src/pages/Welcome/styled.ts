import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Image = styled('img')({
  width: '10%',
  height: '10%',
  margin: 4,
});

const WelcomeSection = styled('section')({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to bottom right, #ebf8ff, #f3e8ff)', // bg-gradient-to-br from-blue-50 to-purple-50
});

const GridPattern = styled('div')({
  position: 'absolute',
  inset: 0,
  background: 'url("/grid-pattern.jpg")',
  backgroundRepeat: 'repeat',
  opacity: 0.05,
});

const Title = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const SubTitle = styled(Typography)({
  color: '#4B5563',
  textAlign: 'center',
  marginBottom: '5rem',
  opacity: 0,
  animation: 'fadeInUp 0.5s ease forwards',
  animationDelay: '0.2s',
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Default mobile: column
  width: '50%',
  gap: '1rem',
  justifyContent: 'center',
  opacity: 0,
  animation: 'fadeInUp 0.5s ease forwards',
  animationDelay: '0.4s',

  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  // Ketika screen md ke atas (desktop/tablet landscape)
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const ScrollButton = styled(Button)({
  position: 'absolute',
  bottom: '2rem',
  transform: 'translateX(-50%)',
  color: '#6B7280',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'color 0.3s',
  willChange: 'transform',
  animation: 'bounce 2s infinite',
  '&:hover': {
    color: '#3b82f6',
  },
});

export { Image, WelcomeSection, GridPattern, Title, SubTitle, ButtonContainer, ScrollButton };
