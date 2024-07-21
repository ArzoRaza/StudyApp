import { Text, View, Image } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboard";

export default function OnBoardingScreen() {
  let [fontsloaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsloaded && !fontError) {
    return null;
  }
  
  return (
    <LinearGradient
      colors={["#E5ECF9", "#4f85db"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image
            source={require("@/assets/logo.png")}
            style={styles.logo}
          />
          <Image source={require("@/assets/onboarding/shape_9.png")}/>
        </View>
      </View>

    </LinearGradient>
  );
}
