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

export const RefreshingContainer = styled.ScrollView`
x  background-color: #fff;
`;

export const ContentBody = styled.View`
  padding-start: ${RFValue(15)}px;
  margin-top: ${RFValue(10)}px;
`;

export const ContentActions = styled.View`
  background-color: #fff;
  align-items: center;
  /* padding-left: ${RFValue(30)}px; */
`;

export const MovementsContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding: ${RFValue(20)}px;
`;

export const MovementList = styled.FlatList`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: 700;
  color: rgba(76, 81, 247, 1);
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;
  color: rgba(62, 62, 62, 1);
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: #000;
`;

export const Balance = styled.Text`
  font-size: ${RFValue(32)}px;
  font-weight: bold;
  color: rgba(62, 62, 62, 1);
`;

export const ButtonText = styled.Text`
  padding: ${RFValue(10)}px;
  font-size: ${RFValue(12)}px;
  color: rgba(76, 81, 247, 1);
  font-weight: 700;
  text-align: center;
`;

export const LogoImage = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(40)}px;
  resize-mode: contain;
`;

export const TransferImage = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  resize-mode: contain;
`;

export const SinpeButton = styled.Pressable`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;
  shadow-color: #000;
  elevation: 5;
  padding: ${RFValue(10)}px;
  mode: flat;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
