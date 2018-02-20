import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    topLeftContainer: {
        position: "absolute",
        left: 15,
        top: 15,
        backgroundColor: "transparent"
    },
    topRightContainer: {
        position: "absolute",
        right: 15,
        top: 15,
        backgroundColor: "transparent"
    },
    bottomLeftContainer: {
        position: "absolute",
        left: 15,
        bottom: 15,
        backgroundColor: "transparent"
    },
    bottomRightContainer: {
        position: "absolute",
        right: 15,
        bottom: 15,
        backgroundColor: "transparent"
    },
    roundShape: {
        height: 16,
        width: 16,
        backgroundColor: "red",
        borderRadius: 8
    }
});

export default styles;
