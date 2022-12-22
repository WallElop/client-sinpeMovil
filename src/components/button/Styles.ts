import styled from "styled-components/native";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.Pressable`
  width: ${RFValue(300)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(25)}px;
  margin-top: ${RFValue(10)}px;
  padding: ${RFValue(10)}px;
  mode: flat;
  align-items: center;
  justify-content: center;
  background-color: rgba(76, 81, 247, 1);
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
`;
