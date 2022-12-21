import React from "react";
import { ContactInfoContainer, ContactNameText, ContactNumberText, Container, IconNameContainer, IconNameText, RowIcon } from "./Styles";

interface ICardProps {
  name: string;
  number: string;
  onPress: () => void;
}

export default function ContactCardComponent({
  name,
  number,
  onPress = () => {},
}: ICardProps) {
  const initials = name
    .split(" ", 2)
    .map((n: string) => n[0])
    .join("");

  return (
    <Container onPress={onPress}>
      <IconNameContainer>
        <IconNameText>{initials}</IconNameText>
      </IconNameContainer>
      <ContactInfoContainer>
        <ContactNameText>{name}</ContactNameText>
        <ContactNumberText>{number}</ContactNumberText>
      </ContactInfoContainer>
      <RowIcon source={require("../../../assets/row.png")} />
    </Container>
  );
}
