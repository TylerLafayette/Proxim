import React, { Component } from "react"
import { View, Text, TextInput } from "react-native"
import { Link } from "react-router-native"
import { AsyncStorage } from "react-native"

import Icon from "react-native-vector-icons/Entypo"
import CircularGrayButton from "../../components/buttons/CircularGrayButton"
import DangerButton from "../../components/buttons/DangerButton"

export default class Settings extends Component {
    constructor() {
        super()
        this.state = {
            userIDText: ""
        }
    }
    save() {
        _storeData = async () => {
            try {
              await AsyncStorage.setItem('@Store:user_id', this.state.userIDText);
            } catch (error) {
              throw error
            }
        }
        _storeData()
    }
    render() {
        return (
            <View style={{
                flexDirection: "column",
                flex: 1,
                padding: 30
            }}>
                <CircularGrayButton to="/">
                    <Icon name="chevron-left" size={10} color={"#FFFFFF"}></Icon>
                </CircularGrayButton>
                <Text style={{
                    fontSize: 18
                }}>Debug menu</Text>
                <TextInput
                    ref={el => this.idField = el}
                    onChangeText={(userIDText) => this.setState({userIDText})}
                    value={this.state.userIDText}
                    placeholder="User ID"
                ></TextInput>
                <View style={{
                    marginTop: 100,
                    alignSelf: "flex-end"
                }}>
                    <DangerButton
                        onPress={this.save.bind(this)}
                    >Save</DangerButton>
                </View>
            </View>
        )
    }
}