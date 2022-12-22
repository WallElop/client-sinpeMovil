import React, { useState } from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../../components/button/Button";
import IUser from "../../model/User";
import UserService from "../../services/User.service";

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

export default function MovementDetail({ route }: { route: any }) {
  // Get the movement from the route params
  const movement = route.params.movement;

  // Get the navigation object
  const navigation: any = useNavigation();

  const [otherUser, setOtherUser] = useState({} as IUser);

  // Get the other user to show the name
  UserService.getUser(movement.receiverNumber).then((response) => {
    if (response.data) {
      setOtherUser(response.data);
    } else {
      setOtherUser({} as IUser);
    }
  });

  // Get the user name to show
  let username;
  if (otherUser.name) {
    username = otherUser.name;
  } else {
    username = movement.name || "Desconocido"; // If the other user is not found, show the name from the movement
  }

  // Get the initials to show
  const initials = username
    .split(" ", 2)
    .map((n: string) => n[0])
    .join("");

  // Format the date
  let momentObj = moment(movement.createdAt, "YYYY-MM-DDTHH:mm:ss.SSSZ");
  const day = momentObj.format("DD");
  const month = momentObj.format("MMMM");
  const year = momentObj.format("YYYY");
  const time = momentObj.format("hh:mm a");
  const dateFormat = `${day} de ${month} ${year}, ${time}`;

  // Function to go back
  const goBack = () => {
    navigation.goBack();
  };

  // Format the currency
  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
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
        <HeaderText>SINPE móvil - {username}</HeaderText>
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
