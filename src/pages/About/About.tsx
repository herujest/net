import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, ButtonGroup, Card, Container, Link, Typography } from '@mui/material';

import BSIco from '../../../public/bs-ico.png';
import { GradientTitle, IconWrapper, Image, LeftSide, RightSide, Section } from './styled';

function Page1() {
  return (
    <Section id="about">
      <Container maxWidth="lg">
        <GradientTitle variant="h3">About</GradientTitle>

        <Card>
          <LeftSide>
            <IconWrapper>
              {/* <CodeIcon sx={{ fontSize: 96, color: 'white' }} /> */}
              <Image src={BSIco} />
            </IconWrapper>
          </LeftSide>

          <RightSide>
            <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
              bySupriyadies
            </Typography>
            <Typography color="text.secondary" paragraph>
              Hi there! we are a passionate software developer team with expertise in building
              useful tools that solve real-world problems. With over 8 years of experience both in
              web development and mobile app , We enjoy creating intuitive and efficient
              applications that help people work smarter.
            </Typography>
            <Typography color="text.secondary" paragraph>
              Our focus is on creating tools that are not only functional but also beautiful and
              easy to use. We believe that good design and solid engineering principles go hand in
              hand.
            </Typography>

            <ButtonGroup>
              <Button
                style={{ margin: '1rem' }}
                component={Link}
                href="#"
                variant="contained"
                startIcon={<GitHubIcon />}
                sx={{
                  bgcolor: 'grey.100',
                  color: 'text.primary',
                  '&:hover': { bgcolor: 'grey.200' },
                }}
              >
                GitHub
              </Button>
              <Button
                style={{ margin: '1rem' }}
                component={Link}
                href="#"
                variant="contained"
                startIcon={<LinkedInIcon />}
                sx={{
                  bgcolor: 'grey.100',
                  color: 'text.primary',
                  '&:hover': { bgcolor: 'grey.200' },
                }}
              >
                LinkedIn
              </Button>
              <Button
                style={{ margin: '1rem' }}
                component={Link}
                href="#"
                variant="contained"
                startIcon={<MailOutlineIcon />}
                sx={{
                  bgcolor: 'grey.100',
                  color: 'text.primary',
                  '&:hover': { bgcolor: 'grey.200' },
                }}
              >
                Contact
              </Button>
            </ButtonGroup>
          </RightSide>
        </Card>
      </Container>
    </Section>
  );
}

export default Page1;
