import React from "react";
import moment from "moment";
import { Text } from "react-native";
import {
  ActionContainer,
  Container,
  NavBar,
  NavBarText,
  IconBar,
  HeaderContainer,
  IconName,
  HeaderText,
  AmountText,
  BodyContainer,
  Subtitle,
  DetailText,
  FooterContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/button/Button";

export default function MovementDetail({ route }: { route: any }) {
  const navigation: any = useNavigation();

  const { senderNumber, receiberNumber, createdAt } = route.params;

  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  let momentObj = moment(createdAt, "YYYY-MM-DDTHH:mm:ss.SSSZ");
  const day = momentObj.format("DD");
  const month = momentObj.format("MMMM");
  const year = momentObj.format("YYYY");
  const time = momentObj.format("hh:mm a");
  const dateFormat = `${day} de ${month} ${year}, ${time}`;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <NavBar>
        <ActionContainer onPress={goBack}>
          <IconBar source={require("../../../assets/Vector.png")} />
        </ActionContainer>
        <NavBarText>Detalle de movimiento</NavBarText>
      </NavBar>

      <HeaderContainer>
        <IconName>CN</IconName>
        <HeaderText>SINPE móvil - Carlos Naranjo</HeaderText>
        <AmountText>RD$ 1,000.00</AmountText>
      </HeaderContainer>
      <BodyContainer>
        <Subtitle>Fecha</Subtitle>
        <DetailText>{dateFormat}</DetailText>

        <Subtitle>Descripción</Subtitle>
        <DetailText>Fiesta de Hallowinnk</DetailText>

        <Subtitle>Tipo de movimiento</Subtitle>
        <DetailText>SINPE móvil</DetailText>
      </BodyContainer>

      <FooterContainer>
        <ButtonComponent title="Volver" onPress={goBack} />
      </FooterContainer>
    </Container>
  );
}
