import { TextInput, StyleSheet, TextInputProps } from "react-native";
import React from "react";
import Font from "./Font";

type Props = {
  label: string;
  className?: TextInputProps["style"];
} & TextInputProps;

const InputField: React.FC<Props> = ({
  label,
  className,
  ...textInputProps
}) => {
  return (
    <>
      <Font style={styles.text} fontWeight="400">
        {label}
      </Font>
      <TextInput
        style={[styles.input, className]}
        placeholderTextColor={"#fff"}
        {...textInputProps}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#999999",
  },
  input: {
    backgroundColor: "#1A1E21",
    color: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "#464646",
    borderRadius: 10,
    marginTop: 5,
  },
});

export default InputField;
