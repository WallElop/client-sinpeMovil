import React from "react";
import { Text } from "react-native";
import { Button, ButtonText } from "./Styles";

interface IButtonProps {  
    title: string;
    onPress : () => void;
}  

export default function ButtonComponent({ title, onPress = () => {} }: IButtonProps) {
  return (
    <Button onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
}
