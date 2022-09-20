import { Box } from "@chakra-ui/react";
import React from "react";

// import { ImgWelcome } from "../../assets/images/welcome.png";

export default function CustomCard({
  title,
  description,
  image,
  link,
  ...props
}) {
  const cardStyle = {
    title: title,
    description: description,
    image: image,
    link: link,
  };

  return (
    <div className="card-container">
      <Box
        padding="4"
        bg="blue.400"
        color="black"
        maxW="md"
        {...cardStyle}
        {...props}
      >
        <text>{title}</text>
        <text>{description}</text>
       
      </Box>
    </div>
  );
}
