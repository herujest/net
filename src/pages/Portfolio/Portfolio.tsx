import { useState } from 'react';

import { Language, PhoneIphone } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import { mobileAppsProj, webAppsProj } from '.';
import { GradientTitle, Section } from './styled';

function Portfolio() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('event', event);

    setTabIndex(newValue);
  };

  const renderCard = (
    item: { name: string; image: string; description: string; platforms?: string; stack?: string },
    type: 'mobile' | 'web',
  ) => (
    <Grid2>
      <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
        <CardMedia component="img" height="180" image={item.image} alt={item.name} />
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="caption" display="block" mt={1}>
            {type === 'mobile' ? `Platforms: ${item.platforms}` : `Stack: ${item.stack}`}
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  );

  return (
    <Section id="portfolio">
      <Container maxWidth="lg">
        <GradientTitle variant="h3">Our Portfolio</GradientTitle>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="portfolio tabs"
          sx={{ mb: 4 }}
        >
          <Tab icon={<PhoneIphone />} label="Mobile Apps" />
          <Tab icon={<Language />} label="Web Apps" />
        </Tabs>

        <Grid2 container spacing={4}>
          {(tabIndex === 0 ? mobileAppsProj : webAppsProj).map((item) =>
            renderCard(item, tabIndex === 0 ? 'mobile' : 'web'),
          )}
        </Grid2>

        <Box mt={6} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Looking for a custom solution like these?
          </Typography>

          <Button
            href="#portfolio"
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
            Contact Us
          </Button>
        </Box>
      </Container>
    </Section>
  );
}

export default Portfolio;
