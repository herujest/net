// components/Footer.tsx
import { Box, Container, Grid, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              bySupriyadies
            </Typography>
            <Typography variant="body2">
              Solusi digital untuk aplikasi mobile dan web. Fokus pada efisiensi dan pengalaman
              pengguna.
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Navigasi
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Beranda
            </Link>
            <Link href="/about" color="inherit" underline="hover" display="block">
              Tentang Kami
            </Link>
            <Link href="/portfolio" color="inherit" underline="hover" display="block">
              Portfolio
            </Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">
              Kontak
            </Link>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Kontak
            </Typography>
            <Typography variant="body2">Email: hello@bysupriyadies.com</Typography>
            <Typography variant="body2">Instagram: @bysupriyadies</Typography>
            <Typography variant="body2">LinkedIn: bySupriyadies Studio</Typography>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="gray">
            &copy; {new Date().getFullYear()} bySupriyadies. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
