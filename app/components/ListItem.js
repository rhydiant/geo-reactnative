import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default class ListItem extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={require("../../assets/images/location-1.jpg")}
          style={{ height: 150 }}
          resizeMode={"cover"}
        />
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
