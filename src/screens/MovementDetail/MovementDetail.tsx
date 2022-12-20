import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";

export default function MovementDetail({ route }: { route: any }) {
  const { senderNumber, receiberNumber, createdAt } = route.params;
  return (
    <Container>
      <Text>{senderNumber}</Text>
      <Text>{receiberNumber}</Text>
      <Text>{createdAt}</Text>
    </Container>
  );
}
