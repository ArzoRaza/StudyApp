import React from "react";
import { View, Text } from "react-native";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider"; // Corrected import
import { onboardingSwiperData } from "@/constants/constans";
import { router } from "expo-router";
import { commonStyles } from "@/styles/common/commonStyle";
import { styles } from "@/styles/onboarding/onboard";
// import { onboardingSwiperDataType } from "@/types"; // Ensure you have this type

export default function welcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => {
    return (
      <LinearGradient
        colors={["#E5ECF9", "#F6F7F9", "#E8EEF9"]}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View>
          {/* Your content here */}
        </View>
      </LinearGradient>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={commonStyles.buttonContainer}>
        <Text style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}>
          Next
        </Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={commonStyles.buttonContainer}>
        <Text style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}>
          Done
        </Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/login");
      }}
      onSkip={() => {
        router.push("/login");
      }}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      showSkipButton={false}
      dotStyle={commonStyles.dotStyle}
      bottomButton={true}
      activeDotStyle={commonStyles.activeDotStyle}
    />
  );
}
