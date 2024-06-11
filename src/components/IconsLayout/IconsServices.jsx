import { Box, Grid, Typography } from "@mui/material";
import doctorIcon from "../../Assets/Doctor.png";
import pharmacyIcon from "../../Assets/Drugstore.png";
import hospitalIcon from "../../Assets/Hospital.png";
import capsuleIcon from "../../Assets/Capsule.png";
import ambulanceIcon from "../../Assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

const IconsServices = () => {
  const ServicesProvide = useMemo(
    () => [
      { img: doctorIcon, title: "Doctors" },
      { img: pharmacyIcon, title: "Labs" },
      { img: hospitalIcon, title: "Hospitals", active: true, BorderColor: "blue" },
      { img: capsuleIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
    ],
    []
  );
  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {ServicesProvide.map((service) => (
          <Grid item key={ServicesProvide.title} xs={4} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default IconsServices;
