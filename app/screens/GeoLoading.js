import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import GeoApiClient from "../lib/GeoApiClient";
import ListItem from "../components/GeoListItem";
import GeoFadeIn from "../components/GeoFadeIn";

export default class GeoLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  componentDidMount() {
    new GeoApiClient().fetchLocations().then(data =>
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
        <GeoFadeIn>
          <FlatList
            marginTop={22}
            keyExtractor={(item, index) => index}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <ListItem
                imageName={"../assets/images/location-01.jpg"}
                title={item.name}
              />
            )}
          />
        </GeoFadeIn>
      </View>
    );
  }
}
