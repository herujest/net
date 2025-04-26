import { Box, Stack, Typography, styled } from '@mui/material';

const Image = styled('img')({
  width: '100%',
  height: '100%',
  margin: 4,
});

const Section = styled('section')(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.grey[50],
  animation: 'fadeInUp 0.5s ease forwards',
  animationDelay: '0.5s',
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
}));

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[4],
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const LeftSide = styled(Box)(({ theme }) => ({
  flex: '1 1 33%',
  background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
}));

const RightSide = styled(Box)(({ theme }) => ({
  flex: '1 1 67%',
  padding: theme.spacing(6),
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  marginBottom: theme.spacing(8),
}));

const IconWrapper = styled(Box)(() => ({
  width: 192,
  height: 192,
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ButtonGroup = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(4),
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

export { Section, Card, LeftSide, RightSide, GradientTitle, IconWrapper, ButtonGroup, Image };
