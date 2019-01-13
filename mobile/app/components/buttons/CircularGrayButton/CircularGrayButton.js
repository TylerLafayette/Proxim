import React, { Component } from "react"
import { TouchableWithoutFeedback, Animated, View, Text } from "react-native"
import { Link } from "react-router-native"

import styles from "./styles"

export default class CircularGrayButton extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(1)
    }
    handlePressIn() {
		Animated.timing(this.animatedValue, {
            toValue: 0.7,
            duration: 150
		}).start()
	}
	handlePressOut() {
		Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 150
		}).start()
	}
    render() {
        const touchStyle = {
			opacity: this.animatedValue
        }
        return (
            <Link
                component={TouchableWithoutFeedback}
                to={this.props.to}
                onPress={this.props.onPress || null}
				onPressIn={this.handlePressIn.bind(this)}
				onPressOut={this.handlePressOut.bind(this)}
            >
                <Animated.View style={[styles.wrapper, touchStyle]}>
                    {this.props.children}
                </Animated.View>
            </Link>
        )
    }
}