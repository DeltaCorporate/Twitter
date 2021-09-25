import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const [favColor, setFavColor] = useState("black");
  const primaryColor = "#00acee"

  return (
    <View style={style.header}>
      <Image
        source={require("../../../assets/avatars/profil.jpg")}
        style={style.avatar}
      ></Image>
      <FontAwesomeIcon icon={faTwitter} color={primaryColor} size={24} />
      <FontAwesomeIcon icon={faStar} size={24} color={favColor} onPress={() => {
          favColor =="black" ? setFavColor(primaryColor) : setFavColor("black");
        }} />
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
