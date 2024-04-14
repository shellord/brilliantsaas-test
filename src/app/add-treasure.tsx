import { ScrollView, Image, StyleSheet, View } from "react-native";
import React from "react";
import Header from "@/components/Header";
import InputField from "@/components/ui/InputField";
import SpeakerIcon from "@/../assets/speaker.svg";
import UploadIcon from "@/../assets/upload.svg";
import MicIcon from "@/../assets/mic.svg";
import NoteIcon from "@/../assets/note.svg";
import BarIcon from "@/../assets/bar.svg";
import Icon from "@/components/Icon";
import Divider from "@/components/ui/Divider";
import TreasureList from "@/components/TreasureList";
import { router, useRouter } from "expo-router";

const Page = () => {
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <Header title="Treasure" type="secondary" onBack={() => router.back()} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View style={styles.twoColumns}>
          <View style={{ width: "60%" }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <View style={{ flex: 1 }}>
                <InputField label="Name" placeholder="Gold" />
              </View>
              <View>
                <InputField label="Unique" />
              </View>
            </View>
            <View style={{ marginTop: 5 }} />
            <InputField label="Value" placeholder="125" />
            <View style={{ marginTop: 5 }} />
            <InputField label="Reference" />
          </View>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Image
              source={require("@/../assets/big.png")}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <InputField
            label="Description"
            multiline
            className={{ height: 80 }}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon icon={SpeakerIcon} isHighlighted />
          <Icon icon={UploadIcon} isHighlighted />
          <Icon icon={MicIcon} isHighlighted />
          <Icon type="text" text="AI" isHighlighted />
          <Icon icon={NoteIcon} />
          <Icon icon={BarIcon} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <InputField
            label="Description"
            multiline
            className={{ height: 150, backgroundColor: "#F6F6F6" }}
          />
        </View>
        <View style={{ marginTop: 15 }} />
        <Divider />
        <TreasureList showAddButton={false} showInfo />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1E21",
  },
  image: {
    width: 140,
    height: 180,
  },
  twoColumns: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default Page;
