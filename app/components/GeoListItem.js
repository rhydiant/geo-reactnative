import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default class GeoListItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../../assets/images/location-4.jpg")}
        />
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    margin: 16,
    borderRadius: 5,
    shadowColor: "rgba(53, 51, 61, 1.0)",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },

  image: {
    height: 150,
    width: "100%"
  },

  title: {
    height: 100,
    padding: 16
  }
});
