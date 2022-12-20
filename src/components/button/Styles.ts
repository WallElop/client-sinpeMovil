import styled from "styled-components/native";
import { Pressable } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.Pressable`
  width: ${RFValue(300)}px;
  height: ${RFValue(40)}px;
  border-width: ${RFValue(0.4)}px;
  border-color: #000;
  border-radius: ${RFValue(25)}px;
  margin-top: ${RFValue(10)}px;
  padding: ${RFValue(10)}px;
  mode: flat;
  align-items: center;
  justify-content: center;
  background-color: #4e52f3;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
  font-weight: semibold;
`;
