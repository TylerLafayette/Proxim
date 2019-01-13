import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import Icon from "react-native-vector-icons/Entypo"

import styles from "./styles"
import CircularGreenButton from "../../buttons/CircularGreenButton"
import CircularGrayButton from "../../buttons/CircularGrayButton"
import DangerButton from "../../buttons/DangerButton";

export default class QueueItem extends Component {
    constructor() {
        super()
        this.state = {
            accepted: false
        }
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Image style={styles.pfp} source={{uri: `http://i.pravatar.cc/150?img=${this.props.item.userId}.png`}} />
                {this.state.accepted ? 
                <View>
                    <DangerButton>Call</DangerButton>
                    <DangerButton>Navigate</DangerButton>
                </View>
                : 
                <View>
                    <CircularGreenButton
                        onPress={() => {
                            this.setState({accepted: true})
                            this.props.sendAck(this.props.item.userId)
                        }}
                    >
                        <Icon name="check" size={10} color={"#FFFFFFF"}></Icon>
                    </CircularGreenButton>
                    <CircularGrayButton onPress={this.props.onRemoveRequest}>
                        <Icon name="cross" size={10} color={"#FFFFFFF"}></Icon>
                    </CircularGrayButton>
                </View>}
            </View>
        )
    }
}