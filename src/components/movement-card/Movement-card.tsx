import React from "react";
import moment from "moment";
import { Amount, Container, Title, Date, Header } from "./Styles";
import IUser from "../../model/User";

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

  // Function to format currency
  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  // Format date
  let momentObj = moment(createdAt, "YYYY-MM-DDTHH:mm:ss.SSSZ");

  if (
    momentObj.day() == moment().day() &&
    momentObj.month() == moment().month() &&
    momentObj.year() == moment().year()
  ) {
    createdAt = "Hoy " + momentObj.format("hh:mm a"); // If the date is today, show "Hoy" instead of the date and time
  } else {
    createdAt = momentObj.format("DD/MM/YYYY hh:mm a"); // If the date is not today, show the date and time
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
