import React from "react";
import { Container } from "./styles";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Transference({ route }: { route: any }) {

  const navigation: any = useNavigation();
  const { number, receiverNumber } = route.params;

  // console.log(number, receiverNumber);
  
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Text>{number}</Text>
      <Text>{receiverNumber}</Text>
    </Container>
  );
}
