import React, { Component } from "react"
import { View, Text, ActivityIndicator } from "react-native"
import { withRouter, Switch, Route, Link } from "react-router-native"
import Icon from "react-native-vector-icons/Entypo"

import styles from "./styles"
import DangerButton from "../../buttons/DangerButton"
import CircularGrayButton from "../../buttons/CircularGrayButton"
import { DANGER_BTN_TEXT } from "../../../styles/common"
import QueueItem from "../QueueItem"

class BottomPanel extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.queuesList}>
                    {this.props.queue.map((i, index) => (
                        <QueueItem sendAck={this.props.sendAck} onRemoveRequest={() => this.props.onRemoveRequest(index)} item={i}></QueueItem>
                    ))}
                </View>
                <View style={styles.background}>
                    <Switch>                    
                        <Route exact path="/" component={() => (
                            <DangerButton onPress={this.props.onSendRequest} to="/emergency">Emergency</DangerButton>
                        )} />
                        <Route exact path="/ack" component={() => (
                            <View>
                                <Text style={styles.subtext}>Help is on the way!</Text>
                                <CircularGrayButton to="/"><Icon name="cross" size={10} color={DANGER_BTN_TEXT}></Icon></CircularGrayButton>
                            </View>
                        )} />
                        <Route path="/emergency" component={() => (
                            <View>
                                <ActivityIndicator></ActivityIndicator>
                                <Text style={styles.subtext}>Contacing people near you...</Text>
                                <CircularGrayButton to="/"><Icon name="cross" size={10} color={DANGER_BTN_TEXT}></Icon></CircularGrayButton>
                            </View>
                        )} />
                    </Switch>
                </View>
            </View>
        )
    }
}   

export default withRouter(BottomPanel)