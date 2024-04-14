import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Font from "./ui/Font";

const USERS = [
  {
    id: 1,
    image: require("@/../assets/avatar1.png"),
  },
  {
    id: 2,
    image: require("@/../assets/avatar2.png"),
  },
  {
    id: 3,
    image: require("@/../assets/avatar3.png"),
  },
  {
    id: 4,
    image: require("@/../assets/avatar4.png"),
  },
];

const AvatarList = () => (
  <View style={{ flexDirection: "row" }}>
    {USERS.map((user) => (
      <Image source={user.image} style={styles.avatarImage} key={user.id} />
    ))}
  </View>
);

const PartyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Font className={{ fontSize: 12 }}>CR Rating</Font>
        <Font fontWeight="700" className={{ fontSize: 32 }}>
          30
        </Font>
      </View>
      <View style={{ alignItems: "center" }}>
        <Font className={{ fontSize: 14 }}>Flying Dragons</Font>
        <View style={{ marginTop: 5 }} />
        <AvatarList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F612",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textSection: {},
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: -5,
  },
});
export default PartyCard;
