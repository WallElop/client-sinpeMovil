import React from "react";
import { Text } from "react-native";
import { Amount, Container, Title, Date, Header } from "./Styles";

interface ICardProps {
  receiverNumber: string;
  amount: number;
  createdAt: string;
  onPress: () => void;
}

export default function CardComponent({
  receiverNumber,
  amount,
  createdAt,
  onPress = () => {},
}: ICardProps) {
  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <Container onPress={onPress}>
      <Header>
        <Title>SINPE móvil - {receiverNumber}</Title>
        {amount < 0 ? (
          <Amount style={{ color: "rgba(244, 67, 54, 1)" }}>
            - {currencyFormat(amount)}
          </Amount>
        ) : (
          <Amount style={{ color: "rgba(76, 81, 247, 1)" }}>
            + {currencyFormat(amount)}
          </Amount>
        )}
      </Header>
      <Date>{createdAt}</Date>
    </Container>
  );
}
