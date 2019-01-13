import { StyleSheet } from "react-native"
import { PRIMARY_BG, PRIMARY_TEXT } from "../../../styles/common"

export default StyleSheet.create({
    wrapper: {
        left: 0,
        right: 0,
        height: 80,
        elevation: 10,
        flexDirection: "row",
        paddingHorizontal: 30,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: PRIMARY_BG,
        color: PRIMARY_TEXT
    },
    pfp: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    dummy: {
        width: 30
    }
})