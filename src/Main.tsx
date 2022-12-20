import React from "react";
import { StatusBar as ExpoSatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login/Login";
import Routes from "./routes/index";

export default function Main() {
  return (
    <ThemeProvider theme={{}}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <ExpoSatusBar
            style="dark"
            backgroundColor="transparent"
            translucent
          />
          <View style = {{
            flex: 1,
          }}>
            <Routes />
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
