import { Text, StyleSheet, TextProps } from "react-native";
import React from "react";

type Props = TextProps & {
  children: React.ReactNode;
  className?: TextProps["style"];
  fontWeight?: keyof typeof FONTS;
};

const FONTS = {
  "100": "Inter-Thin",
  "200": "Inter-ExtraLight",
  "300": "Inter-Light",
  "400": "Inter-Regular",
  "500": "Inter-Medium",
  "600": "Inter-SemiBold",
  "700": "Inter-Bold",
  "800": "Inter-ExtraBold",
  "900": "Inter-Black",
};

const Font: React.FC<Props> = ({
  className,
  children,
  fontWeight,
  ...fontProps
}) => {
  return (
    <Text
      style={[
        styles.font,
        {
          fontFamily: FONTS[fontWeight ?? "400"],
        },
        className,
      ]}
      {...fontProps}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Font;
