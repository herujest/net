import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { Box, Button, Container, Typography } from '@mui/material';

import { subTitle, title } from '@/config';

import { ButtonContainer, GridPattern, HeroSection, ScrollButton, SubTitle, Title } from './styled';

const Welcome: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <GridPattern />

      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Title variant="h1">{title}</Title>

          <SubTitle variant="h5">{subTitle}</SubTitle>

          <ButtonContainer>
            <Button
              href="#tools"
              variant="contained"
              sx={{
                background: 'linear-gradient(to right,rgb(86, 146, 241), #8b5cf6)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(to right, #2563eb, #7e22ce)',
                },
                padding: '1rem 2rem',
                borderRadius: '0.8rem',
                boxShadow: 3,
              }}
            >
              Explore Tools
            </Button>
            <Button
              href="#contact"
              variant="outlined"
              sx={{
                borderRadius: '0.8rem',
                '&:hover': {
                  backgroundColor: '#f3f4f6', // hover:bg-gray-100
                },
                padding: '1rem 2rem',
                boxShadow: 3,
              }}
            >
              Get in Touch
            </Button>
          </ButtonContainer>
        </Box>
      </Container>

      <ScrollButton onClick={scrollToAbout} aria-label="Scroll down">
        <Typography variant="caption" sx={{ marginBottom: '0.5rem' }}>
          Scroll
        </Typography>
        <ArrowDownward />
      </ScrollButton>
    </HeroSection>
  );
};

export default Welcome;

// import { FullSizeCentered } from '@/components/styled';
// import useOrientation from '@/hooks/useOrientation';

// import muiLogo from './logos/mui.svg';
// import pwaLogo from './logos/pwa.svg';
// import reactLogo from './logos/react_ed.svg';
// import recoilLogo from './logos/recoil.svg';
// import rrLogo from './logos/rr.svg';
// import tsLogo from './logos/ts.svg';
// import viteLogo from './logos/vite.svg';
// import { Image } from './styled';

// function Welcome() {
//   const isPortrait = useOrientation();

//   const width = isPortrait ? '40%' : '30%';
//   const height = isPortrait ? '30%' : '40%';

//   return (
//     <>
//       <meta name="title" content="Welcome" />
//       <FullSizeCentered flexDirection={isPortrait ? 'column' : 'row'}>
//         <Image alt="react-router" src={rrLogo} />
//         <Image alt="vite" src={viteLogo} />
//         <Image alt="typescript" src={tsLogo} />
//         <Image alt="react" src={reactLogo} sx={{ width, height }} />
//         <Image alt="mui" src={muiLogo} />
//         <Image alt="recoil" src={recoilLogo} />
//         <Image alt="pwa" src={pwaLogo} />
//       </FullSizeCentered>
//     </>
//   );
// }

// export default Welcome;
