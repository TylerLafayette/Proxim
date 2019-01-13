import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { Link } from "react-router-native"
import Icon from "react-native-vector-icons/Entypo"

import styles from "./styles"
import { PRIMARY_TEXT } from "../../../styles/common"

export default class AppBar extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Link to="/settings">
                    <Icon name="menu" size={30} color={PRIMARY_TEXT}></Icon>
                </Link>
                <Image style={styles.pfp} source={{uri: `http://i.pravatar.cc/150?img=${this.props.userId}.png`}}></Image>
                <View style={styles.dummy} />
            </View>
        )
    }
}