import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const NavBar = styled.View`
  flex-direction: row;
  padding: ${RFValue(20)}px;
`;

export const ActionContainer = styled.Pressable`
  align-items: center;
  justify-content: center;
  mode: flat;
`;

export const HeaderContainer = styled.View`
  padding: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;

export const BodyContainer = styled.View`
  padding: ${RFValue(10)}px;
`;

export const FooterContainer = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
  align-items: center;
  justify-content: flex-end;
`;


export const Subtitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(8)}px;
  color: rgba(120, 120, 120, 1);
`;

export const DetailText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(15)}px;
  color: rgba(62, 62, 62, 1);
`;

export const IconName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 400;
  padding: ${RFValue(12)}px;
  margin: ${RFValue(10)}px;
  background-color: #c6c7ff;
  color: rgba(49, 48, 198, 1);
  align-text: center;
  border-radius: ${RFValue(250)}px;
`;

export const HeaderText = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(10)}px;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
  align-text: center;
`;

export const AmountText = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: 700;
  color: rgba(62, 62, 62, 1);
  align-text: center;
`;

export const NavBarText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  color: rgba(76, 81, 247, 1);
  align-text: center;
  padding-left: ${RFValue(50)}px;
`;

export const IconBar = styled.Image`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  resize-mode: contain;
`;
