import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { Slot, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import StatusBarGap from "@/components/ui/StatusBarGap";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("@/../assets/fonts/inter/Inter-Black.ttf"),
    "Inter-Bold": require("@/../assets/fonts/inter/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("@/../assets/fonts/inter/Inter-ExtraBold.ttf"),
    "Inter-Light": require("@/../assets/fonts/inter/Inter-Light.ttf"),
    "Inter-ExtraLight": require("@/../assets/fonts/inter/Inter-ExtraLight.ttf"),
    "Inter-Medium": require("@/../assets/fonts/inter/Inter-Medium.ttf"),
    "Inter-Regular": require("@/../assets/fonts/inter/Inter-Regular.ttf"),
    "Inter-SemiBold": require("@/../assets/fonts/inter/Inter-SemiBold.ttf"),
    "Inter-Thin": require("@/../assets/fonts/inter/Inter-Thin.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBarGap />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1E21",
    flex: 1,
  },
});
