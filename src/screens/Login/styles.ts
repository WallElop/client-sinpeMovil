import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContentHeader = styled.View`
  padding: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;

export const ContentBody = styled.View`
  padding-start: ${RFValue(15)}px;
  padding-top: ${RFValue(40)}px;
  padding-bottom: ${RFValue(40)}px;
  margin-top: ${RFValue(30)}px;
`;

export const ContentFooter = styled.View`
    padding: ${RFValue(40)}px;
    margin-top: ${RFValue(30)}px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-weight: bold;
    color: #4e52f3;
`;

export const Description = styled.Text`
  font-size: ${RFValue(15)}px;
`;

export const InputNumber = styled.TextInput`
  width: ${RFValue(300)}px;
  height: ${RFValue(40)}px;
  border-width: ${RFValue(0.4)}px;
  border-color: #000;
  border-radius: ${RFValue(25)}px;
  margin-top: ${RFValue(10)}px;
  padding: ${RFValue(10)}px;
  mode: flat;
`;

export const LogoImage = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(140)}px;
  resize-mode: contain;
`;
