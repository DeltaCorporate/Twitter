import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image,Dimensions } from "react-native";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { fa500px } from "@fortawesome/free-brands-svg-icons";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faShareAlt } from "@fortawesome/free-solid-svg-icons";

const w = Dimensions.get("window").width
export default function Message({ name,content }) {
    function dayRandom(){
        let arr =  ["1d","1m","5m","6d","1w","30s","5j","1h"];
        const randomElement = arr[Math.floor(Math.random() * arr.length)];
        return randomElement;
    }
    const [favcolor,setfavcolor] = useState("black")
  return (
    <View style={style.message}>
      <View
        style={{
          marginRight: 15,
        }}
      >
        <Image
          source={{
            uri: "https://eu.ui-avatars.com/api/?length=2&name=" + name,
          }}
          style={style.avatar}
        ></Image>
      </View>
      <View>
        <View style={{
            display:"flex",
            flexDirection:"row",

        }}>
          <Text
            style={{
              fontWeight: "bold",
              marginRight: 5,
            }}
          >
            {name} 
          </Text> 
          <Text>{dayRandom()}</Text>
        </View>
        <View >
          <Text>{content}</Text>
        </View>
        <View style={{
            marginTop:20,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around"
        }}>
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faRetweet} />
            <FontAwesomeIcon icon={faHeart} color={favcolor} onPress={()=>{
                favcolor === "black" ? setfavcolor("red") : setfavcolor('black');
            }}/>
            <FontAwesomeIcon icon={faShareAlt} />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  message: {
    paddingVertical: 10,
    marginVertical:5,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    maxWidth: w-80,
    minHeight: 100,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
