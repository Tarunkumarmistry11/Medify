import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../HeroSection/HeroSection";
import NavBar from "../Navbar/Navbar";
import IconsServices from "../IconsLayout/IconsServices";

const Home = () => {
    return (
        <Box>
            <Box
                sx={{
                    background: "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
                }}
                mb={4}
            />
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
                    <IconsServices />
                </Stack>
            </Container>
        </Box>
    )
}
export default Home;
