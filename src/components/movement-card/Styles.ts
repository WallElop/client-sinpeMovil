import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.Pressable`
  background-color: #fff;
  margin-top: ${RFValue(20)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 400;
    color: rgba(62, 62, 62, 1);
`;

export const Amount = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 700;
`;

export const Date = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: 400;
    color: rgba(120, 120, 120, 1);
`;