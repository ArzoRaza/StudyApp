import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import { heightPercentageToDP } from "react-native-responsive-screen";

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        backgroundColor: "#2467EC",
        width: responsiveWidth(88),
        height: responsiveHeight(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    }, 
    dotStyle: {
        backgroundColor: "#2467EC",
        width: responsiveHeight(2.5),
        height: responsiveHeight(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDotStyle: {
        backgroundColor: "#2467Ec",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 5,
        marginHorizontal: 5,
    },
});
