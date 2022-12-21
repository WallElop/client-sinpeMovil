import React, { useState } from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import {
  ActionContainer,
  Container,
  NavBar,
  NavBarText,
  IconBar,
  HeaderContainer,
  IconNameText,
  HeaderText,
  AmountText,
  BodyContainer,
  Subtitle,
  DetailText,
  FooterContainer,
  IconNameContainer,
} from "./styles";
import ButtonComponent from "../../components/button/Button";
import IUser from "../../model/User";
import UserService from "../../services/User.service";

export default function MovementDetail({ route }: { route: any }) {
  const navigation: any = useNavigation();

  const movement = route.params.movement;

  const [otherUser, setOtherUser] = useState({} as IUser);

  // Get the other user to show the name
  UserService.getUser(movement.receiverNumber).then((response) => {
    if (response.data) {
      setOtherUser(response.data);
    }
  });

  let username;
  if (otherUser) {
    username = otherUser.name || "";
  } else {
    username = "Desconocido";
  }

  const initials = username
    .split(" ", 2)
    .map((n: string) => n[0])
    .join("");

  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  let momentObj = moment(movement.createdAt, "YYYY-MM-DDTHH:mm:ss.SSSZ");
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
        <IconNameContainer>
          <IconNameText>{initials}</IconNameText>
        </IconNameContainer>
        <HeaderText>SINPE móvil - {otherUser.name}</HeaderText>
        <AmountText>{currencyFormat(movement.amount || 0)}</AmountText>
      </HeaderContainer>
      <BodyContainer>
        <Subtitle>Fecha</Subtitle>
        <DetailText>{dateFormat}</DetailText>

        <Subtitle>Descripción</Subtitle>
        <DetailText>{movement.detail}</DetailText>

        <Subtitle>Tipo de movimiento</Subtitle>
        <DetailText>SINPE móvil</DetailText>
      </BodyContainer>

      <FooterContainer>
        <ButtonComponent title="Volver" onPress={goBack} />
      </FooterContainer>
    </Container>
  );
}
