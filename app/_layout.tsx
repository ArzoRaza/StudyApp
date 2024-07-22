import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";

import { View } from "react-native";
import OnBoarding from "./(routes)/onboarding";
import { Stack } from "expo-router";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [isLoggeIn, setisLoggedIn] = useState(false);

  return <>{isLoggeIn ? <View></View> : (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(routes)/onboarding" />
      <Stack.Screen name="(routes)/welcome-intro" />
    </Stack>
  )}</>;
}
