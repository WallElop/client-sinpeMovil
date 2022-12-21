import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Contacts from "expo-contacts";

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
} from "./styles";
import ContactCardComponent from "../../components/contact-card/Contact-card";

export default function ContactsList({ route }: { route: any }) {
  const navigation: any = useNavigation();

  const number = route.params.number;
  const [isLoading, setIsLoading] = useState(false);
  const [contactsData, setContactsData] = useState([] as any);
  const [inMemoryContacts, setInMemoryContacts] = useState([] as any);

  const goBack = () => {
    navigation.goBack();
  };

  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("No se puede acceder a tus contactos");
    } else {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.FirstName],
        sort: Contacts.SortTypes.FirstName,
      });
      if (data.length > 0) {
        setContactsData(data);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("No se puede acceder a tus contactos");
      } else {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
          sort: Contacts.SortTypes.FirstName,
        });
        
        // Filter contacts without phone number
        setContactsData(data.filter((item: any) => item.phoneNumbers !== undefined));
        setInMemoryContacts(data.filter((item: any) => item.phoneNumbers !== undefined));
        setIsLoading(false);
      }
    })();
    setIsLoading(true);
    return () => {};
  }, []);

  const renderFooter = () => {
    return isLoading ? (
      <View style={{ margin: 20, alignItems: "center" }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

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

  const handleContactPress = (item: any) => {
    navigation.navigate("Transference", {
      number: item.phoneNumbers
        ? item.phoneNumbers[0].number
        : "No tiene número",
    });
  };

  const renderItem = ({ item }: any) => {
    return (
      <ContactCardComponent
        name={item.name}
        number={
          item.phoneNumbers ? item.phoneNumbers[0].number : "No tiene número"
        }
        onPress={() => {}}
      />
    );
  };

  const renderEmpty = () => {
    return (
      <EmptyList>
        <EmptyListText>No hay contactos</EmptyListText>
      </EmptyList>
    );
  };

  return (
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
  );
}
	