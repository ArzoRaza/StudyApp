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
        height: responsiveHeight(5.5),
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
       
    }, 
    dotStyle: {
        backgroundColor: "#C6C7CC",
        width: responsiveWidth(2),
        height: responsiveWidth(2),
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDotStyle: {
        backgroundColor: "#2467EC",
        width: responsiveWidth(2),
        height: responsiveWidth(2),
        borderRadius: 5,
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
    
});


