import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../components/HeroSection/HeroSection";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import FAQs from "../components/Section/FAQs/FAQs";
import OurFamilies from "../components/Section/OurFamilies/OurFamilies";
import Blogs from "../components/Section/Blogs/Blogs";
import PatientCaring from "../components/Section/PatientCaring/patientCaring";
import Specialists from "../components/Section/Specialists/Specialists";
import Specialization from "../components/Section/Specialization/Specialization";
import Offers from "../components/Section/Offers/Offers";
import NavBar from "../components/Navbar/Navbar"
import IconsServices from "../components/IconsLayout/IconsServices";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
      >
        <NavBar />
        <Container maxWidth="xl">
          <HeroSlider />
          <Stack
            p={{ xs: 2.5, md: 8 }}
            mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
            position="relative"
            zIndex={99}
            bgcolor="#fff"
            borderRadius="15px"
            spacing={10}
            boxShadow="0 0 12px rgba(0,0,0,0.1)"
          >
            <SearchHospital />
            <IconsServices />
          </Stack>
        </Container>
      </Box>

      <Offers />

      <Specialization />

      <Specialists />

      <PatientCaring />

      <Blogs />

      <OurFamilies />

      <FAQs />
    </Box>
  );
}
