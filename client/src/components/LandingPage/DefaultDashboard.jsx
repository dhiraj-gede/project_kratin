import { Box, height } from "@mui/system";
import React from "react";

import BannerIMG from "../../assets/organic-food-background-vegetables-basket_135427-233.webp";

const DefaultDashboard = () => {
  return (
    <Box>
      <Box className="banner-image">
        <img
          src={BannerIMG}
          alt="bannerIMG"
          style={{ objectFit: "fill", width: "100vw", maxHeight: "91vh" }}
        />
      </Box>
      <Box
        className="section section-2"
        style={{
          width: "100vw",
          minHeight: "10vh",
          maxHeight: "91vh",
          background: "#F7A4A4",
        }}
      >
      </Box>
      <Box
        className="section section-2"
        style={{
          width: "100vw",
          minHeight: "10vh",
          maxHeight: "91vh",
          background: "#FEBE8C",
        }}
      ></Box>
      <Box
        className="section section-2"
        style={{
          width: "100vw",
          minHeight: "10vh",
          maxHeight: "91vh",
          background: "#FFFBC1",
        }}
      ></Box>
      <Box
        className="section section-2"
        style={{
          width: "100vw",
          minHeight: "10vh",
          maxHeight: "91vh",
          background: "#B6E2A1",
        }}
      ></Box>
    </Box>
  );
};

export default DefaultDashboard;
