import React, { useState } from "react";
import { Text, Alert, Keyboard } from "react-native";
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
    if(number.length == 0){
      Alert.alert("Error", "El número de teléfono no puede estar vacío");
      return;
    } else if(number.length < 8){
      Alert.alert("Error", "El número de teléfono no es válido");
      return;
    }
    UserService.getUser(number).then((response) => {
      if(response.data){
        console.log(response.data);
        setNumber("");
        Keyboard.dismiss();
      } else {
        Alert.alert("Error", "El usuario no existe");
      }
    }).catch((error) => {
      Alert.alert("Error", "No se pudo conectar con el servidor");
    });
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
          maxLength={8}
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
