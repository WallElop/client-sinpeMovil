import React, { useState } from "react";
import { Text, Alert, Keyboard, View, ActivityIndicator } from "react-native";
import ButtonComponent from "../../components/button/Button";
import UserService from "../../services/User.service";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/index";

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
  type routesProps = NativeStackScreenProps<RootStackParamList, "MenuRoutes">;

  const [number, setNumber] = useState("");
  const [loadingPage, setLoadingPage] = useState(false); // For loading

  const navigation: any = useNavigation<routesProps>();

  const logIn = () => {
    if (number.length == 0) {
      Alert.alert("Error", "El número de teléfono no puede estar vacío");
      return;
    } else if (number.length < 8) {
      Alert.alert("Error", "El número de teléfono no es válido");
      return;
    }
    setLoadingPage(true);
    UserService.getUser(number)
      .then((response) => {
        if (response.data) {
          setNumber("");
          Keyboard.dismiss();
          navigation.navigate("MenuRoutes", {
            screen: "Dashboard",
            params: { user: response.data },
          });
        } else {
          Alert.alert("Error", "El usuario no existe");
        }
        setLoadingPage(false);
      })
      .catch((error) => {
        Alert.alert("Error", "No se pudo conectar con el servidor");
        console.log(error);
      });
  };

  return !loadingPage ? (
    <Container>
      <ContentHeader>
        <LogoImage source={require("../../../assets/logo_wink_azul.png")} />
        <Title>¡Bienvenido al sistema SINPE Movil!</Title>
      </ContentHeader>

      <ContentBody>
        <Description>
          <Text>Número de teléfono</Text>
        </Description>

        <InputNumber
          keyboardType="phone-pad"
          maxLength={8}
          value={number}
          onChangeText={(newNumber) => setNumber(newNumber)}
        />
      </ContentBody>

      <ContentFooter>
        <ButtonComponent title="Continuar" onPress={logIn} />
      </ContentFooter>
    </Container>
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <ActivityIndicator animating size="large" />
      <Title>Ingresando...</Title>
    </View>
  );
}
