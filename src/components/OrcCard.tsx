import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Font from "./ui/Font";
import ShieldIcon from "@/../assets/shield.svg";
import BloodIcon from "@/../assets/blood.svg";
import DiskIcon from "@/../assets/disk.svg";
import CrossIcon from "@/../assets/cross.svg";
import Icon from "./Icon";
import { SvgProps } from "react-native-svg";
import Divider from "./ui/Divider";

type Props = {
  name: string;
  category: string;
  type: string;
  level: number;
  health: number;
};

type StatProps = {
  icon: React.FC<SvgProps>;
  value: number;
};

const Stat: React.FC<StatProps> = ({ icon: Icon, value }) => {
  return (
    <View style={styles.statContainer}>
      <Icon width={50} height={50} />
      <View style={styles.statTextContainer}>
        <Font className={styles.statText} fontWeight="700">
          {value}
        </Font>
      </View>
    </View>
  );
};

const OrcCard: React.FC<Props> = ({ name, category, type, level, health }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.detailsConainer}>
          <Image
            source={require(`../../assets/orc.png`)}
            style={styles.image}
          />
          <View style={styles.textDetails}>
            <Font style={{ color: "#fff", fontSize: 14 }} fontWeight="400">
              {name}
            </Font>
            <Font style={{ color: "#999", fontSize: 13 }} fontWeight="400">
              {category}
            </Font>
            <Font style={{ color: "#999", fontSize: 13 }} fontWeight="400">
              {type}
            </Font>
          </View>
        </View>

        <View style={styles.stats}>
          <Stat icon={ShieldIcon} value={level} />
          <Stat icon={BloodIcon} value={health} />
        </View>
        <View>
          <View style={styles.iconContainer}>
            <Icon icon={DiskIcon} />
            <Icon icon={CrossIcon} />
          </View>
        </View>
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  detailsConainer: {
    flexDirection: "row",
    borderRadius: 10,
    gap: 5,
  },
  image: {
    width: 60,
    height: 60,
  },
  textDetails: {
    gap: 3,
  },
  stats: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 30,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  statContainer: {
    position: "relative",
    marginTop: 5,
  },
  statTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    width: 50,
    top: 10,
  },
  statText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default OrcCard;
