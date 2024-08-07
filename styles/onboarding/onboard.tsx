import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export const styles = StyleSheet.create({
    firstContainer: {
        alignItems: "center",
        marginTop: 50, 
    },
    logo: {
        width: wp("23%"),
        height: hp("10%"),
    },
    titleWrapper: {
        flexDirection:"row",
    },
    titleTextShape1: {
        position: "absolute",
        left: -28,
        top: -20,
    },
    titleText: {
        fontSize: hp("4%"),
        textAlign: "center",
    },
    titleText2: {
        fontSize: hp("4%"),
        textAlign: "center",
        color: "#2467EC",
    },
    titleTextShape2: {
        position: "absolute",
        right: -40,
        top: -20,
    },
    titleTextShape3: {
        position: "absolute",
        left: 60,
    },
    dscpWrapper: {
        marginTop: 30,
    },
    dscpText: {
        textAlign: "center",
        color: "#575757",
        fontSize: hp("2%"),
    },
    buttonWrapper: {
        backgroundColor: "#2467EC",
        width: wp("50%"),
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 40,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    textBtn: {
        color: "RED",
        textAlign: "center",
        fontSize: 20,
    }

})