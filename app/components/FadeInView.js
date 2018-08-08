import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class FadeInView extends React.Component {
    state = { fadeAnim: new Animated.Value(0) }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim, { toValue: 1, duration: 1000, }
        ).start();
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View style={{ opacity: fadeAnim }}>
                {this.props.children}
            </Animated.View>
        );
    }
}