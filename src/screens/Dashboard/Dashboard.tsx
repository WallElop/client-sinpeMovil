import React from "react";
import { Text } from "react-native";
import UserService from "../../services/User.service";

import {
  Container,
  ContentBody,
  ContentHeader,
  MovementsContainer,
  LogoImage,
  Title,
  Description,
  Balance,
} from "./styles";

export default function Dashboard({ route }: { route: any }) {
  const user = route.params.user;

  const currencyFormat = (num: number) => {
    return '₡' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

  return (
    <Container>
      <ContentHeader>
        <LogoImage source={require("../../../assets/logo_wink_azul.png")} />
      </ContentHeader>

      <ContentBody>
        <Title>Cuenta Colones</Title>
        <Description style = {{ marginTop: 20 }}>Saldo disponible</Description>
        <Balance>{currencyFormat(user.balance)}</Balance>
        <Description style = {{ marginTop: 30 }}>¿Qué quieres hacer?</Description>
      </ContentBody>

      <MovementsContainer></MovementsContainer>
    </Container>
  );
}
