import React, { Component } from "react"
import { View } from "react-native"

import styles from "./styles"

import FullMap from "../../components/display/FullMap"
import AppBar from "../../components/display/AppBar"
import BottomPanel from "../../components/display/BottomPanel"


export default class Map extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "column"
            }}>
                <View style={styles.wrapper}>
                    <FullMap
                        onUpdateLocation={this.props.onUpdateLocation}
                    />
                </View>
                <AppBar userId={this.props.userId}></AppBar>
                <BottomPanel
                    sendAck={this.props.sendAck}
                    onRemoveRequest={this.props.onRemoveRequest}
                    queue={this.props.queue}
                    onSendRequest={this.props.onSendRequest}    
                ></BottomPanel>
            </View>
        )
    }
}