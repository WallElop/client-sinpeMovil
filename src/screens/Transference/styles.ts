import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  padding: ${RFValue(15)}px;
  justify-content: center;
`;

export const BodyContainer = styled.View`
  padding: ${RFValue(15)}px;
  justify-content: center;
`;

export const FooterContainer = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
  align-items: center;
  justify-content: flex-end;
`;

export const ContactContainer = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ContactInfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${RFValue(20)}px;
`;

export const IconNameContainer = styled.View`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
  background-color: #c6c7ff;
  border-radius: ${RFValue(250)}px;
`;

export const IconNameText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 400;
  margin: ${RFValue(10)}px;
  color: rgba(49, 48, 198, 1);
  align-text: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(10)}px;
  font-weight: 700;
  color: rgba(76, 81, 247, 1);
  align-text: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const ContactNameText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 400;
  color: rgba(62, 62, 62, 1);
  align-text: center;
`;

export const ContactNumberText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: rgba(76, 81, 247, 1);
`;

export const ActionContainer = styled.Pressable`
  align-items: center;
  justify-content: center;
  mode: flat;
`;

export const NavBar = styled.View`
  flex-direction: row;
  padding: ${RFValue(20)}px;
`;

export const NavBarText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  color: rgba(76, 81, 247, 1);
  align-text: center;
  padding-left: ${RFValue(80)}px;
`;

export const IconBar = styled.Image`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  resize-mode: contain;
`;

export const InputSearch = styled.TextInput`
  width: 100%;
  padding: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
  border-width: ${RFValue(0.4)}px;
  border-color: rgba(206, 206, 206, 1);
  border-radius: ${RFValue(25)}px;
  mode: flat;
`;
