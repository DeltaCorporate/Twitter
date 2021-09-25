import {faBell, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import {Dimensions, View} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



export default function Footer(){
    return(
        <View style={{
            backgroundColor:"white",
            position:"absolute",
            bottom:0,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            paddingHorizontal:30,
            minWidth: Dimensions.get("window").width,
            minHeight: 100,
        }}>
            <FontAwesomeIcon icon={faHome} size={24} style={{
                marginRight:20
            }}/>
            <FontAwesomeIcon icon={faSearch} size={24} style={{
                marginRight:20
            }}/>
            <FontAwesomeIcon icon={faBell} size={24} style={{
                marginRight:20
            }}/>
            <FontAwesomeIcon icon={faEnvelope} size={24} style={{
                marginRight:20
            }}/>
        </View>
    )
}