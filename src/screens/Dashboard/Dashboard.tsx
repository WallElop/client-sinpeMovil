import React, { useState, useEffect } from "react";
import MovementService from "../../services/Movement.service";
import MovementCard from "../../components/movement-card/Movement-card";
import IMovement from "../../model/Movement";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/index";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import {
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Alert,
  RefreshControl,
} from "react-native";

import {
  Container,
  ContentBody,
  ContentHeader,
  MovementsContainer,
  MovementList,
  LogoImage,
  Title,
  Description,
  Balance,
  SinpeButton,
  TransferImage,
  ContentActions,
  ButtonText,
  Subtitle,
  RefreshingContainer,
} from "./styles";

export default function Dashboard({ route }: { route: any }) {
  const user = route.params.user; // Get the user from the route params

  const [data, setData] = useState([] as any[]);
  const [isLoading, setIsLoading] = useState(false); // For loading

  const [lastCreatedAt, setLastCreatedAt] = useState(""); // For pagination
  const [lastNumber, setLastNumber] = useState(user.number); // For pagination
  const [areMoreMovements, setAreMoreMovements] = useState(true); // For pagination
  const [currentPage, setCurrentPage] = useState(1); // For pagination

  const [refreshing, setRefreshing] = useState(false); // For refresh

  // Get the navigation object
  type routesProps = NativeStackScreenProps<RootStackParamList, "MenuRoutes">;
  const navigation: any = useNavigation<routesProps>();

  // To know if the screen is focused (to refresh the data)
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // If the screen is focused, get the movements
      setIsLoading(true);
      getMovements();
    } else {
      // If the screen is not focused, reset the data
      setData([]);
      setLastCreatedAt("");
      setLastNumber(user.number);
      setAreMoreMovements(true);
      setCurrentPage(1);
    }
    return () => {};
  }, [currentPage, isFocused]);

  // Function to refresh the whole screen
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setData([]);
    setLastCreatedAt("");
    setLastNumber("");
    setAreMoreMovements(true);
    setCurrentPage(1);
    getMovements().then(() => setRefreshing(false));
  }, []);

  // Function to get the movements
  const getMovements = () => {
    return MovementService.getMovements(lastNumber, lastCreatedAt)
      .then((response) => {
        // Verify if there are more movements
        if (response.data.LastEvaluatedKey) {
          // Set the last data to get the next page
          setLastCreatedAt(response.data.LastEvaluatedKey.createdAt);
          setLastNumber(response.data.LastEvaluatedKey.senderNumber);
        } else {
          setAreMoreMovements(false);
        }

        let dataResponse = response.data;
        let movements = dataResponse.Items;

        setData(data.concat(movements));

        setIsLoading(false);
      })
      .catch((error) => {
        Alert.alert("Error", "No se pudo conectar con el servidor");
      });
  };

  // Function to go to the movement detail screen
  const getMovementDetail = (movement: IMovement) => {
    navigation.navigate("MovementDetail", {
      movement,
    });
  };

  // Function to go to the contacts list screen
  const goToContactsList = () => {
    navigation.navigate("ContactsList", { number: user.number });
  };

  // Function to format the currency
  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  // Function to render the movements
  const renderItem = ({ item }: any) => {
    // If the movement is from the user, the number to find is the receiver number
    let numberToFind =
      item.senderNumber == user.number
        ? item.receiverNumber
        : item.senderNumber;

    return (
      <MovementCard
        numberToFind={numberToFind}
        amount={item.amount}
        createdAt={item.createdAt}
        name={item.name}
        onPress={() => getMovementDetail(item)}
      />
    );
  };

  // Function to render the footer (loading)
  const renderFooter = () => {
    return isLoading ? (
      <View style={{ margin: 20, alignItems: "center" }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

  // Function to load more movements
  const handleLoadMore = () => {
    if (areMoreMovements) { // If there are more movements, get the next page
      setCurrentPage(currentPage + 1);
      setLastCreatedAt(data[data.length - 1].createdAt);
      setIsLoading(true);
    } else { // If there are no more movements, stop loading
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <ContentHeader>
        <LogoImage source={require("../../../assets/logo_wink_azul.png")} />
      </ContentHeader>

      <View>
        <RefreshingContainer
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <ContentBody>
            <Title>Cuenta Colones</Title>
            <Description style={{ marginTop: 20 }}>
              Saldo disponible
            </Description>
            <Balance>{currencyFormat(user.balance)}</Balance>
          </ContentBody>

          <ContentActions>
            <Description
              style={{
                marginVertical: 30,
                paddingLeft: 20,
                alignSelf: "flex-start",
              }}
            >
              ¿Qué quieres hacer?
            </Description>
            <SinpeButton onPress={goToContactsList}>
              <TransferImage source={require("../../../assets/Union.png")} />
            </SinpeButton>
            <ButtonText>SINPE{"\n"}móvil</ButtonText>
          </ContentActions>
        </RefreshingContainer>
      </View>

      <MovementsContainer>
        <Subtitle>Movimientos</Subtitle>
        <MovementList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0}
        />
      </MovementsContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  SinpeButton: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
