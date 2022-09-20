import React from "react";
import { Center, Avatar, Wrap, WrapItem, Heading } from "@chakra-ui/react";
// import avatarUrl from "../../assert/avatar.png";

export default function Header({ title, description, image, link, ...props }) {
  const headerStyle = {
    title: title,
    description: description,
    image: image,
    link: link,
  };
  const urlLink = "https://www.puntook.com.py/";

  return (
    <div className="header-container">
      <Heading mb={4}>
        <Wrap>
          <WrapItem>
            <Avatar name={image} src={"/"} />
          </WrapItem>
        </Wrap>

        <Center
          bg="#00FF7F"
          h="100px"
          color="white"
          {...headerStyle}
          {...props}
        >
          <text text={title}>Sobre nosotras</text>
          <a href={urlLink}>
            <text text={link}>Política de usuario</text>
          </a>

          <a href={urlLink}>
            <text text={link}>Contactos</text>
          </a>

          <a href={urlLink}>
            <text text={link}>Sobre nosotras</text>
          </a>
        </Center>
      </Heading>
    </div>
  );
}
