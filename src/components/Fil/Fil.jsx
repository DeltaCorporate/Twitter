import React, { useContext } from "react";
import Message from "../Message/Message";
import MessageData from "../../contexts/Messages";
import { FlatList, SafeAreaView, ScrollView, Text, View,Dimensions } from "react-native";
export default function Fil() {
  const w = Dimensions.get('window').width;
  let messages = useContext(MessageData);

  return (
    <View
      style={{
        marginHorizontal: 10,
        flexGrow:1
      }}
    >
     <ScrollView showsVerticalScrollIndicator={false}>
            {messages.map(message=>{
                return(
                    <Message  key={message.id} name={message.nom} content={message.message} />
                )
            })}
     </ScrollView>
    </View>
  );
}
