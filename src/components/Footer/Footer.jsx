import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    Stack,
    Typography,
} from "@mui/material";

import logo from "../../Assets/logo.png";
import fb from "../../Assets/fb.png";
import pinterest from "../../Assets/pinterest.png";
import twitter from "../../Assets/twitter.png";
import yt from "../../Assets/yt.png";

const Footer = () => {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box src={logo} height={36} alt="Medify" component="img" mb={2} />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={yt} height={36} />
                <Box component="img" src={pinterest} height={36} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <footerLink>About Us</footerLink>
              <footerLink>Our Pricing</footerLink>
              <footerLink>Our Gallery</footerLink>
              <footerLink>Appointment</footerLink>
              <footerLink>Privacy Policy</footerLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <footerLink>Orthology</footerLink>
              <footerLink>Neurology</footerLink>
              <footerLink>Dental Care</footerLink>
              <footerLink>Opthalmology</footerLink>
              <footerLink>Cardiology</footerLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <footerLink>About Us</footerLink>
              <footerLink>Our Pricing</footerLink>
              <footerLink>Our Gallery</footerLink>
              <footerLink>Appointment</footerLink>
              <footerLink>Privacy Policy</footerLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
