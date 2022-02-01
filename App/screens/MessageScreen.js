import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
export default function MessageScreen() {
  const initialMessages = [
    {
      id: 1,
      title: "t1",
      description: "d1",
      image: require("../assets/Talal.jpeg"),
    },
    {
      id: 2,
      title: "t2",
      description: "d2",
      image: require("../assets/Talal.jpeg"),
    },
  ];

  const handleDelte = (message) => {
    const newMessage = messages.filter((m) => m.id !== message.id);
    setMessages(newMessage);
    //TODO:  Also Delete From Server
  };
  const [refreshing, setreFreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          // onPress={() => {
          //   console.log("Click on");
          // }}
          renderRightActions={() => (
            <ListItemDeleteAction
              onPress={() => {
                handleDelte(item);
              }}
            />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeperator}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages([
          {
            id: 3,
            title: "t3",
            description: "d3",
            image: require("../assets/Talal.jpeg"),
          },
        ]);
      }}
    />
  );
}
