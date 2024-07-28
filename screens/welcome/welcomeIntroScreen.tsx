import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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
        style={{ flex: 1, paddingHorizontal: 16 }}
      >
        <View style={{ marginTop: 80 }}>
          <Image
            source={item.image}
            style={{ alignSelf: "center", marginBottom: 30 }}
          />
          <Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
            {item.title}
          </Text>
          <View style={{marginTop: 15}}>
            <Text 
              style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}
            >
              {item.description}
            </Text>
            <View style={{marginTop: 15}}>
            <Text 
              style={[commonStyles.description, { fontFamily: "Nunito_400Regular" }]}
            >
              {item.sortDescription}
            </Text>
            </View>

          </View>

        </View>
      </LinearGradient>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={[commonStyles.buttonContainer]}>
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

  const showSkipButton = () => {
    return (
      <View style={commonStyles.buttonContainer}>
        <Text></Text>
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

const style = StyleSheet.create({
  slideImage: {
    alignSelf: "center",
    marginBottom: 30,
  },
});
