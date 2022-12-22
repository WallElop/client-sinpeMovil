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
  const user = route.params.user;

  const [data, setData] = useState([] as any[]);
  const [isLoading, setIsLoading] = useState(false); // For loading
  const [lastCreatedAt, setLastCreatedAt] = useState(""); // For pagination
  const [lastNumber, setLastNumber] = useState(user.number); // For pagination
  const [areMoreMovements, setAreMoreMovements] = useState(true); // For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  type routesProps = NativeStackScreenProps<RootStackParamList, "MenuRoutes">;
  const navigation: any = useNavigation<routesProps>();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setIsLoading(true);
      getMovements();
    } else {
      setData([]);
      setLastCreatedAt("");
      setLastNumber(user.number);
      setAreMoreMovements(true);
      setCurrentPage(1);
    }
    return () => {};
  }, [currentPage, isFocused]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setData([]);
    setLastCreatedAt("");
    setLastNumber("");
    setAreMoreMovements(true);
    setCurrentPage(1);
    getMovements().then(() => setRefreshing(false));
  }, []);

  const getMovements = () => {
    return MovementService.getMovements(lastNumber, lastCreatedAt)
      .then((response) => {
        console.log(lastNumber, lastCreatedAt);

        if (response.data.LastEvaluatedKey) {
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

  const getMovementDetail = (movement: IMovement) => {
    navigation.navigate("MovementDetail", {
      movement,
    });
  };

  const goToContactsList = () => {
    navigation.navigate("ContactsList", { number: user.number });
  };

  const currencyFormat = (num: number) => {
    return "₡" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

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

  const renderFooter = () => {
    return isLoading ? (
      <View style={{ margin: 20, alignItems: "center" }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    if (areMoreMovements) {
      setCurrentPage(currentPage + 1);
      setLastCreatedAt(data[data.length - 1].createdAt);
      setIsLoading(true);
    } else {
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
