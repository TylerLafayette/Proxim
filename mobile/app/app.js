import React, { Component } from "react"
import { AsyncStorage, View, Text, StatusBar, ActivityIndicator } from "react-native"
import { withRouter, NativeRouter, Switch, Route, AndroidBackButton, Alert, Link } from "react-router-native"
import PubNub from "pubnub"

import Map from "./screens/Map"
import Settings from "./screens/Settings"
import { isRegExp } from "util";

class App extends Component {
    constructor() {
        super()
        this.state = {
            doneLoading: false,
            toSettings: false,
            userId: 1,
            requestsQueue: [],
            location: {}
        }
        this.pubnub = new PubNub({
            subscribeKey: "sub-c-9a60bd82-16f0-11e9-b4a6-026d6924b094",
            publishKey: "pub-c-35c611f0-ae37-41a4-af8b-376496de28d8",
            ssl: true
        })
    }
    componentDidMount = async () => {
        try {
            const value = await AsyncStorage.getItem('@Store:user_id')
            this.setState({doneLoading: true})
            if (value !== null) {
                // We have data!!
                this.setState({userId: value})
            }
        } catch (error) {
            throw error
        }

        this.pubnub.addListener({
            message: this._messageReceived.bind(this)
        })
        this.pubnub.subscribe({
            channels: ["requests"]
        })
    }
    _messageReceived(message) {
        message = message.message
        if(message.type == "ACK" && message.userId == this.state.userId) return this.props.history.push("/acknowledged")
        if(message.type != "REQUEST" || message.userId == this.state.userId) return
        this.setState({requestsQueue: [...this.state.requestsQueue, message]})
    }
    _sendRequest() {
        this.pubnub.publish({
            message: {
                type: "REQUEST",
                userId: this.state.userId,
                location: this.state.location
            },
            channel: "requests"
        })
    }
    _removeRequest(index) {
        let fixed = Object.assign([], this.state.requestsQueue)
        fixed.splice(index, 1)
        this.setState({requestsQueue: fixed})
    }
    _updateLocation(loc) {
        this.setState({location: loc})
    }
    _sendAck(userId) {
        this.pubnub.publish({
            message: {
                type: "ACK",
                userId
            },
            channel: "acks"
        })
    }
    render() {
        return (
            <View style={{
                backgroundColor: "#FFFFFF",
                flex: 1
            }}>
                <AndroidBackButton>
                    <Switch>
                        <Route exact path="/settings">
                            <Settings />
                        </Route>
                        {this.state.doneLoading ?
                                <Route path="/">
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <Map
                                            onUpdateLocation={this._updateLocation.bind(this)}
                                            onRemoveRequest={this._removeRequest.bind(this)}
                                            onSendRequest={this._sendRequest.bind(this)}
                                            sendAck={this._sendAck.bind(this)}
                                            userId={this.state.userId}
                                            queue={this.state.requestsQueue}
                                            ></Map>
                                    </View>
                                </Route>
                            :
                            <Link to="/settings"><ActivityIndicator></ActivityIndicator></Link>
                        }
                    </Switch>
                </AndroidBackButton>
            </View>
        )
    }
}

App = withRouter(App)

export default class Index extends Component {
    render() {
        return (
            <NativeRouter>
                <App></App>
            </NativeRouter>
        )
    }
}