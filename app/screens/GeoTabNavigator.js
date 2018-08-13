import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";

import GeoLoading from "./GeoLoading";

class GeoFavoritesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>favorites tab</Text>
      </View>
    );
  }
}

class GeoProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>profile tab</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Home: GeoLoading,
    Favorites: GeoFavoritesScreen,
    Profile: GeoProfileScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-map";
        } else if (routeName === "Favorites") {
          iconName = "ios-images";
        } else if (routeName === "Profile") {
          iconName = "ios-person";
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "gray",
      showLabel: false,
      style: {}
    }
  }
);
