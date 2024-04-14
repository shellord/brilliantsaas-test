import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SvgProps } from "react-native-svg";
import Font from "./ui/Font";

type IconProps = {
  type?: "icon";
  icon: React.FC<SvgProps>;
  onPress?: () => void;
};

type TextProps = {
  type?: "text";
  text: string;
};

type Props = (IconProps | TextProps) & {
  type?: "icon" | "text";
  onPress?: () => void;
  isHighlighted?: boolean;
  width?: number;
  height?: number;
};

const Icon: React.FC<Props> = ({
  type = "icon",
  onPress,
  isHighlighted,
  width,
  height,
  ...props
}) => {
  const containerStyle = [
    styles.container,
    isHighlighted ? styles.highlighted : {},
    width ? { width } : {},
    height ? { height } : {},
  ];

  if (type === "icon") {
    const { icon: Icon } = props as IconProps;
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>
        <Icon height={16} width={16} />
      </TouchableOpacity>
    );
  } else if (type === "text") {
    const { text } = props as TextProps;
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>
        <Font style={styles.text} fontWeight="400">
          {text}
        </Font>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1E21",
    padding: 5,
    borderWidth: 1,
    borderColor: "#989898",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#00BFFB",
    fontSize: 18,
  },
  highlighted: {
    borderColor: "#00BFFB",
  },
});

export default Icon;
