import React from "react";
import Header from "@/components/Header";
import { View, Image, StyleSheet, ScrollView, FlatList } from "react-native";
import Font from "@/components/ui/Font";
import InputField from "@/components/ui/InputField";
import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import PlusIcon from "@/../assets/plus.svg";
import OrcCard from "@/components/OrcCard";
import Divider from "@/components/ui/Divider";
import TreasureList from "@/components/TreasureList";
import PartyCard from "@/components/PartyCard";

const ORCS = [
  {
    id: 1,
    name: "Orc #1",
    category: "Orc",
    type: "Fighter",
    level: 14,
    health: 165,
  },
  {
    id: 2,
    name: "Orc #2",
    category: "Orc",
    type: "Fighter",
    level: 14,
    health: 165,
  },
];

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/../assets/header.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={{ position: "absolute", top: 0 }}>
          <Header title="Encounter" />
        </View>
        <View style={styles.subTextContainer}>
          <Font style={styles.subTextFont} fontWeight="700">
            Mountains
          </Font>
        </View>
      </View>
      <ScrollView
        style={styles.sectionContainer}
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View style={styles.sectionOneContainer}>
          <View style={{ marginHorizontal: 10 }}>
            <InputField label="Name" defaultValue="Orc Army" editable={false} />
            <View style={{ marginTop: 10 }} />
            <View style={styles.buttonsContainer}>
              <Icon
                type="text"
                text="AI"
                width={40}
                height={40}
                isHighlighted
              />
              <Button>
                <View style={styles.buttonWithIcon}>
                  <PlusIcon width={15} height={15} />
                  <Font fontWeight="700" style={{ color: "#EAE8E8" }}>
                    Add Character
                  </Font>
                </View>
              </Button>
              <Button>
                <View style={styles.fightButton}>
                  <Font fontWeight="700" style={{ color: "#EAE8E8" }}>
                    FIGHT!
                  </Font>
                </View>
              </Button>

              <View style={styles.crRating}>
                <Font>CR Rating</Font>
                <Font
                  className={{ color: "#FF2323E8", fontSize: 25 }}
                  fontWeight="700"
                >
                  42
                </Font>
              </View>
            </View>
          </View>
          <Divider />
          <FlatList
            data={ORCS}
            renderItem={({ item }) => (
              <OrcCard
                name={item.name}
                category={item.category}
                type={item.type}
                level={item.level}
                health={item.health}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.sectionTwoContainer}>
          <Divider />
          <View style={styles.treasureContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Font className={{ color: "#999999" }}>Treasure</Font>
              <Font className={{ color: "#FCE286" }}>Value: 10,000</Font>
            </View>
          </View>
        </View>
        <TreasureList showAddButton />
        <View style={{ marginBottom: 10 }} />
        <Divider />
        <View style={{ marginHorizontal: 20 }}>
          <Font className={{ color: "#999999" }}>Party</Font>
          <View style={{ marginBottom: 5 }} />
          <PartyCard />
        </View>
        <View style={{ marginBottom: 50 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1A1E21",
  },
  imageContainer: {
    height: "15%",
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  subTextContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  subTextFont: {
    color: "white",
    fontSize: 14,
    padding: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  sectionContainer: {
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  buttonWithIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 7,
  },
  fightButton: {
    backgroundColor: "#AE0000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  sectionOneContainer: {
    flex: 2,
  },
  sectionTwoContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  crRating: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  treasureContainer: {
    marginHorizontal: 20,
  },
});

export default Page;
