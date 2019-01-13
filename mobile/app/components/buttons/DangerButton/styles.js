import { StyleSheet } from "react-native"
import { DANGER_BTN_BG, DANGER_BTN_TEXT } from "../../../styles/common"

export default StyleSheet.create({
    wrapper: {
        backgroundColor: DANGER_BTN_BG,
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 5
    },
    text: {
        color: DANGER_BTN_TEXT,
        fontWeight: "bold",
        fontSize: 18,
    }
})