import React, { useState } from "react";
import {
  ActionContainer,
  BodyContainer,
  ContactContainer,
  ContactInfoContainer,
  ContactNameText,
  ContactNumberText,
  Container,
  HeaderContainer,
  Title,
  IconBar,
  IconNameContainer,
  IconNameText,
  NavBar,
  NavBarText,
  InputSearch,
  FooterContainer,
} from "./styles";
import { ActivityIndicator, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/button/Button";
import MovementService from "../../services/Movement.service";
import UserService from "../../services/User.service";
import IUser from "../../model/User";
import { RootStackParamList } from "../../routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function Transference({ route }: { route: any }) {
  type routesProps = NativeStackScreenProps<RootStackParamList, "MenuRoutes">;
  const navigation: any = useNavigation<routesProps>();

  const { user, receiverNumber, name } = route.params;
  console.log(user);

  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const [amount, setAmount] = React.useState(0);
  const [stringAmount, setStringAmount] = React.useState(currencyFormat(0));
  const [detail, setDetail] = React.useState("");
  const [loadingPage, setLoadingPage] = useState(false); // For loading

  // Get the user

  const goBack = () => {
    navigation.goBack();
  };

  const goHome = (currentUser: any) => {
    navigation.navigate("MenuRoutes", {
      screen: "Dashboard",
      params: { user: currentUser },
    });
  };

  const sendMoney = () => {
    if (user.balance && user.balance >= amount) {
      setLoadingPage(true); // Show loading
      // Create the movement
      MovementService.createMovement({
        amount: amount,
        detail: detail,
        receiverNumber: receiverNumber,
        senderNumber: user.number,
        name: name,
      }).then((response) => {
        if (response.data) {
          // Update the balance of the user
          const userUpdate: IUser = {
            number: user.number,
            balance: amount,
          };
          UserService.editUser(user.number, userUpdate).then((res) => {
            if (res.data) {
              setLoadingPage(false);
              goHome(res.data.user);
            }
          });
        }
      });
    } else {
      alert("No tienes saldo suficiente para realizar esta transacción");
    }
  };

  const initials = name
    .split(" ", 2)
    .map((n: string) => n[0])
    .join("");

  return !loadingPage ? (
    <Container>
      <NavBar>
        <ActionContainer onPress={goBack}>
          <IconBar source={require("../../../assets/Vector.png")} />
        </ActionContainer>
        <NavBarText>Enviar dinero</NavBarText>
      </NavBar>

      <HeaderContainer>
        <Title>Transferir a</Title>
        <ContactContainer>
          <IconNameContainer>
            <IconNameText>{initials}</IconNameText>
          </IconNameContainer>

          <ContactInfoContainer>
            <ContactNameText>{name}</ContactNameText>
            <ContactNumberText>{receiverNumber}</ContactNumberText>
          </ContactInfoContainer>
        </ContactContainer>
      </HeaderContainer>

      <BodyContainer>
        <Title>Monto</Title>
        <InputSearch
          placeholder="Ingresa el monto a transferir"
          keyboardType="phone-pad"
          value={stringAmount}
          onChangeText={(text) => {
            const number = Number(text.replace(/[^0-9]/g, "")) / 100;
            setAmount(number);
            setStringAmount(currencyFormat(number));
          }}
        />
        <Title>Detalle</Title>
        <InputSearch
          placeholder="Ingresa el detale de la transferencia"
          value={detail}
          onChangeText={(text) => setDetail(text)}
        />
      </BodyContainer>

      <FooterContainer>
        <ButtonComponent title="Confirmar" onPress={sendMoney} />
      </FooterContainer>
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
      <Title>Enviando dinero...</Title>
    </View>
  );
}
