import React from "react";
import CustomCard from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Box } from "@chakra-ui/react";
import ImgWelcome from "../../assert/Welcome.png";

export default function Home() {
  const tutorialesUrl = "https://youtu.be/RLyNuzsGb0M";
  return (
    <div className="Home">
      <div className="header-container">
        <Header />
      </div>

      <div className="body-container">
        <Box className="image-container">
          <CustomCard>
            <img src={ImgWelcome.src} alt="welcome" />
          </CustomCard>
        </Box>

        <div className="videoWrapper">
          <iframe
            title="Tutoriales"
            allowFullScreen
            frameBorder="0"
            className="iframe-container"
            allow="autoPlay"
            src={tutorialesUrl}
          />
        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
