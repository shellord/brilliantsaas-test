import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type Props = {
  onPress?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#6D6D6D",
    borderRadius: 7,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
