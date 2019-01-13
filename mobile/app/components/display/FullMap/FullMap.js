import React, { Component } from "react"
import { Alert, View, Text, ActivityIndicator } from "react-native"
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"

export default class FullMap extends Component {
    constructor() {
        super()
        this.state = {
            location: null,
            extraMessage: false
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            location => {
                this.setState({ location: location.coords })
                this.props.onUpdateLocation(location.coords)
            },
            error => {},
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        )
        setInterval(
            () => this.setState({extraMessage: true}),
            5000
        )
    }
    render() {
        return (
            <View style={{
                flex:1,
                alignItems: "center",
                justifyContent: "center",
            }}>
                {this.state.location ? <MapView
                    region={{...this.state.location, latitudeDelta: 0.03, longitudeDelta: 0.03}}
                    provider={PROVIDER_GOOGLE}
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        minWidth: 100,
                        minHeight: 100
                    }}
                >
                    <Marker
                        coordinate={this.state.location}
                        title="You"
                    ></Marker>
                </MapView>: <View><ActivityIndicator></ActivityIndicator><Text style={{
                    marginTop: 30
                }}>{this.state.extraMessage ? "This is taking longer than usual..." : "Locating you..."}</Text></View>}
            </View>
        )
    }
}