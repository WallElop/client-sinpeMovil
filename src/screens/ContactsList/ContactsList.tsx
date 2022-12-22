import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Contacts from "expo-contacts";
import ContactCardComponent from "../../components/contact-card/Contact-card";
import UserService from "../../services/User.service";

import {
  ActionContainer,
  BodyContainer,
  Container,
  IconBar,
  InputSearch,
  NavBar,
  NavBarText,
  SearchContainer,
  SearchIcon,
  ContactList,
  EmptyList,
  EmptyListText,
  Title,
} from "./styles";

export default function ContactsList({ route }: { route: any }) {
  const number = route.params.number; // Get the number from the route params

  const navigation: any = useNavigation(); // Get the navigation object

  const [isLoading, setIsLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [contactsData, setContactsData] = useState([] as any);
  const [inMemoryContacts, setInMemoryContacts] = useState([] as any);

  // Function to go back
  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync(); // Ask for permission to access contacts
      if (status !== "granted") {
        Alert.alert("No se puede acceder a tus contactos");
      } else {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
          sort: Contacts.SortTypes.FirstName,
        });

        // Filter contacts without phone number
        setContactsData(
          data.filter((item: any) => item.phoneNumbers !== undefined)
        );
        setInMemoryContacts(
          data.filter((item: any) => item.phoneNumbers !== undefined)
        );
        setIsLoading(false);
      }
    })();
    setIsLoading(true);
    return () => {};
  }, []);

  // Function to render the loading indicator
  const renderFooter = () => {
    return isLoading ? (
      <View style={{ margin: 20, alignItems: "center" }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

  // Function to find the contacts that match the search
  const searchFilterFunction = (text: any) => {
    const newData = inMemoryContacts.filter((item: any) => {
      const itemNameData = item.name.toString().toUpperCase();
      const itemNumberData = item.phoneNumbers
        ? item.phoneNumbers[0].number.toString().toUpperCase()
        : "No tiene número";
      const textData = text.toString().toUpperCase();
      return (
        itemNameData.indexOf(textData) > -1 ||
        itemNumberData.indexOf(textData) > -1
      );
    });
    setContactsData(newData);
  };

  // Function to handle the contact press
  const handleContactPress = (item: any) => {
    setLoadingPage(true); // Set the loading indicator to true

    // Get the user data from the server
    UserService.getUser(number).then((response) => {
      if (response.data) { // If the user exists, navigate to the transference screen
        navigation.navigate("Transference", {
          user: response.data,
          receiverNumber: item.phoneNumbers[0].number,
          name: item.name,
        });
      } else { // If the user doesn't exist, show an error message
        Alert.alert("Error inesperado");
        goBack();
      }
      setLoadingPage(false);
    });
  };

  // Function to render the contact card
  const renderItem = ({ item }: any) => {
    return (
      <ContactCardComponent
        name={item.name}
        number={
          item.phoneNumbers ? item.phoneNumbers[0].number : "No tiene número"
        }
        onPress={() => handleContactPress(item)}
      />
    );
  };

  // Function to render the empty list message
  const renderEmpty = () => {
    return (
      <EmptyList>
        <EmptyListText>No hay contactos</EmptyListText>
      </EmptyList>
    );
  };

  return !loadingPage ? (
    <Container>
      <NavBar>
        <ActionContainer onPress={goBack}>
          <IconBar source={require("../../../assets/Vector.png")} />
        </ActionContainer>
        <NavBarText>Seleccioná un contacto</NavBarText>
      </NavBar>

      <SearchContainer>
        <SearchIcon source={require("../../../assets/search.png")} />
        <InputSearch
          placeholder="Buscá por nombre o número"
          onChangeText={(value) => searchFilterFunction(value)}
        />
      </SearchContainer>

      <BodyContainer>
        <ContactList
          data={contactsData}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
          ListEmptyComponent={renderEmpty}
          ListFooterComponent={renderFooter}
        />
      </BodyContainer>
    </Container>
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <ActivityIndicator animating size="large" />
      <Title>Cargando...</Title>
    </View>
  );
}
