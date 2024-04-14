import { View, StyleSheet } from "react-native";
import React from "react";
import Font from "@/components/ui/Font";
import DiskIcon from "@/../assets/disk.svg";
import CrossIcon from "@/../assets/cross.svg";
import Icon from "./Icon";

type Props = {
  title: string;
  type?: "primary" | "secondary";
  onBack?: () => void;
};

const Header: React.FC<Props> = ({ title, type = "primary", onBack }) => {
  return (
    <View
      style={[
        styles.titleContainer,
        {
          backgroundColor: type === "primary" ? "#1A1E21B2" : "#C29B00",
        },
      ]}
    >
      <Font className={styles.titleText} fontWeight="700">
        {title}
      </Font>
      <View style={styles.iconContainer}>
        <Icon icon={DiskIcon} />
        <Icon icon={CrossIcon} onPress={onBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    backgroundColor: "#1A1E21B2",
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontSize: 14,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Header;
