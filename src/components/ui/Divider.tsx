import { View, StyleSheet } from "react-native";
import React from "react";

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10,
    borderBottomColor: "#5A5959",
  },
});
