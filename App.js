import React from "react";
import { StyleSheet, View } from "react-native";
import Footer from "./src/components/Footer/Footer";
import Header from "./src/components/Header/Header";
import Message from "./src/components/Message/Message";
import Fil from "./src/components/Fil/Fil";

export default function App() {
  return (
    <View style={style.container}>
      <Header/>
      <Fil/>
        <Footer />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 25,
  }
});
