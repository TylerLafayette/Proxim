import { StyleSheet } from "react-native"
import { PRIMARY_BG } from "../../../styles/common"

export default StyleSheet.create({
    wrapper: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
        left: 0,
        right: 0,
    },
    background: {
        left: 0,
        right: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 150,
        paddingVertical: 30,
        elevation: 10,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: PRIMARY_BG
    },
    subtext: {
        marginTop: 10
    }
})