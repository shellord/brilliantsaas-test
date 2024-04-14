import { View, Image, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import Button from "./ui/Button";
import PlusGreyIcon from "@/../assets/plus-grey.svg";
import { useRouter } from "expo-router";
import Font from "./ui/Font";

type Props = {
  showAddButton?: boolean;
  showInfo?: boolean;
};

const TREASURES = [
  {
    id: 1,
    image: require("@/../assets/treasure1.png"),
    name: "Gold",
    cost: 150,
  },
  {
    id: 2,
    image: require("@/../assets/treasure2.png"),
    name: "Gold",
    cost: 150,
  },
  {
    id: 3,
    image: require("@/../assets/treasure3.png"),
    name: "Gold",
    cost: 150,
  },
];

const TreasureItem = ({
  image,
  name,
  cost,
  showInfo = false,
}: {
  image: ImageSourcePropType;
  name: string;
  cost: number;
  showInfo?: boolean;
}) => (
  <View style={styles.treasureContainer}>
    <Image source={image} style={styles.treasureImage} />
    {showInfo && (
      <>
        <Font style={{ color: "#F1F1F1", fontSize: 12 }}>{name}</Font>
        <Font style={{ color: "#999999", fontSize: 10 }}>{cost}</Font>
      </>
    )}
  </View>
);

const TreasureList: React.FC<Props> = ({
  showAddButton = true,
  showInfo = false,
}) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {TREASURES.map((treasure) => (
        <TreasureItem
          key={treasure.id}
          image={treasure.image}
          name={treasure.name}
          cost={treasure.cost}
          showInfo={showInfo}
        />
      ))}
      {showAddButton && (
        <Button onPress={() => router.push("add-treasure")}>
          <View
            style={{
              width: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PlusGreyIcon width={20} height={20} />
          </View>
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "row",
    gap: 10,
  },
  treasureContainer: {
    alignItems: "center",
    gap: 2,
  },
  treasureImage: {
    width: 60,
    height: 60,
  },
});

export default TreasureList;
