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
        height: responsiveHeight(4),
        borderRadius: 5,
        marginHorizontal: 5,
        marginBottom: 15,
    }, 
    dotStyle: {
        backgroundColor: "#2467EC",
        width: responsiveHeight(2),
        height: responsiveHeight(2),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDotStyle: {
        backgroundColor: "#000",
        width: responsiveWidth(2.5),
        height: responsiveWidth(2.5),
        borderRadius: 10,
        marginHorizontal: 5,
    },
    title: {
        fontSize: heightPercentageToDP("3.5%"),
        textAlign: "center",
    },
    description: {
        fontSize: heightPercentageToDP("2.5%"),
        color: "#575757",
        textAlign: "center",
    },
    sortDescription: {
        fontSize: heightPercentageToDP("1.5%"),
        color: 'lightgray',
        textAlign: "center",
    }
});


