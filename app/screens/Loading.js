import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Animated
} from "react-native";

import ApiClient from "../lib/ApiClient";
import ListItem from "../components/ListItem";
import FadeInView from "../components/FadeInView";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  componentDidMount() {
    new ApiClient().fetchLocations().then(data =>
      this.setState({
        isLoading: false,
        dataSource: data
      })
    );
  }

  render() {
    console.log("render!");
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <FadeInView>
          <FlatList
            keyExtractor={(item, index) => index}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <ListItem
                imageName={"../assets/images/location-01.jpg"}
                title={item.name}
              />
            )}
          />
        </FadeInView>
      </View>
    );
  }
}
