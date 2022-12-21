import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.Pressable`
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  margin: ${RFValue(10)}px;
`;

export const IconNameContainer = styled.View`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  align-items: center;
  justify-content: center;
  background-color: #c6c7ff;
  border-radius: ${RFValue(250)}px;
`;

export const IconNameText = styled.Text`
  font-size: ${RFValue(11)}px;
  font-weight: 400;
  margin: ${RFValue(10)}px;
  color: rgba(49, 48, 198, 1);
  align-text: center;
`;

export const ContactInfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${RFValue(20)}px;
`;

export const ContactNameText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
`;

export const ContactNumberText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: rgba(120, 120, 120, 1);
`;

export const RowIcon = styled.Image`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
  margin: ${RFValue(10)}px;
  margin-right: ${RFValue(20)}px;
  resize-mode: contain;
`;
