import React from "react";
import moment from "moment";
import { Amount, Container, Title, Date, Header } from "./Styles";
import UserService from "../../services/User.service";
import IUser from "../../model/User";
import MovementDetail from "../../screens/MovementDetail/MovementDetail";

interface ICardProps {
  numberToFind: string;
  amount: number; 
  createdAt: string;
  name: string;
  onPress: () => void;
}

export default function CardComponent({
  numberToFind,
  amount,
  createdAt,
  name,
  onPress = () => {},
}: ICardProps) {
  // console.log("name: ", name);
  
  const [otherUser, setOtherUser] = React.useState({} as IUser);

  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  // UserService.getUser(numberToFind).then((response) => {
  //   if (response.data) {
  //     setOtherUser(response.data);
  //   }
  // });
  let momentObj = moment(createdAt, "YYYY-MM-DDTHH:mm:ss.SSSZ");

  if (
    momentObj.day() == moment().day() &&
    momentObj.month() == moment().month() &&
    momentObj.year() == moment().year()
  ) {
    createdAt = "Hoy " + momentObj.format("hh:mm a");
  } else {
    createdAt = momentObj.format("DD/MM/YYYY hh:mm a");
  }

  return (
    <Container onPress={onPress}>
      <Header>
        <Title>SINPE móvil - {name}</Title>
        <Amount style={{ color: "rgba(244, 67, 54, 1)" }}>
          - {currencyFormat(Math.abs(amount))}
        </Amount>
      </Header>
      <Date>{createdAt}</Date>
    </Container>
  );
}
