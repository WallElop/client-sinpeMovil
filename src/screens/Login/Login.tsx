import React, { useState } from "react";
import { Text } from "react-native";
import ButtonComponent from "../../components/button/Button";
import UserService from "../../services/User.service";

import {
  Container,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
  LogoImage,
  InputNumber,
} from "./styles";

export default function Login() {
  const [number, setNumber] = useState("");

  const logIn = () => {
    // TODO: Validate number with api
  };

  return (
    <Container>
      <ContentHeader>
        <LogoImage source={require("../../../assets/logo_wink_azul.png")} />
        <Title>
          <Text>¡Bienvenido al sistema SINPE Movil!</Text>
        </Title>
      </ContentHeader>

      <ContentBody>
        <Description>
          <Text>Número de teléfono</Text>
        </Description>

        <InputNumber
          keyboardType="phone-pad"
          maxLength={18}
          value={number}
          onChangeText={newNumber => setNumber(newNumber)}
        />
      </ContentBody>

      <ContentFooter>
        <ButtonComponent title="Continuar" onPress={logIn} />
      </ContentFooter>
    </Container>
  );
}
