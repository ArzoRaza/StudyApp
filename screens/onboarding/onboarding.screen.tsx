import { Text, View } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";

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
      colors={["#E5ECF9", "#F^F&F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={}>
        
      </View>

    </LinearGradient>
  );
}
