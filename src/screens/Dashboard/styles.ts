import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
export const ContentHeader = styled.View`
  padding: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;

export const ContentBody = styled.View`
  padding-start: ${RFValue(15)}px;
  margin-top: ${RFValue(10)}px;
`;

export const MovementsContainer = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: #4e52f3;
`;

export const Subtitle = styled.Text``;

export const Description = styled.Text`
    font-size: ${RFValue(10)}px;
    font-weight: light;
    color: #000;
`;

export const Balance = styled.Text`
    font-size: ${RFValue(30)}px;
    font-weight: bold;
    color: #000;
`;

export const LogoImage = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(40)}px;
  resize-mode: contain;
`;
