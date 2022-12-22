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

export const HeaderContainer = styled.View`
  padding: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
`;

export const ActionContainer = styled.Pressable`
  align-items: center;
  justify-content: center;
  mode: flat;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: ${RFValue(0.4)}px;
  border-color: rgba(206, 206, 206, 1);
  border-radius: ${RFValue(25)}px;
  margin: ${RFValue(20)}px;
  padding-left: ${RFValue(30)}px;
  padding-right: ${RFValue(30)}px;
`;

export const BodyContainer = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  background-color: #fff;
`;

export const ContactList = styled.FlatList`
  flex: 1;
`;

export const InputSearch = styled.TextInput`
  width: 100%;
  padding: ${RFValue(10)}px;
  mode: flat;
`;

export const SearchIcon = styled.Image`
  /* padding: ${RFValue(10)}px; */
  width: ${RFValue(15)}px;
  height: ${RFValue(15)}px;
  padding-right: ${RFValue(10)}px;
  resize-mode: contain;
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

export const EmptyList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyListText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  color: rgba(76, 81, 247, 1);
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
