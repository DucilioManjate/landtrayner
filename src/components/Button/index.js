import React from "react";
import { Button } from '@chakra-ui/react';

export default function CustomButton({ text, color, onClick, size, ...props }) {
  const buttonStyle = {
    colorScheme: color,
    onClick: onClick,
    text: text,
    size:size
  };
  return (
    <div className="Button-container">
    <Button 
    {...buttonStyle}
    {...props}
    colorScheme={'#00FF7F'}
    text={'click'} onclick={onClick} />
      
    </div>
  );
}
