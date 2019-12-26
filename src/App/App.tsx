import React from "react";
import { View, Text } from "react-native";
import Store from "./App.store";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const App = createAppContainer(
  createStackNavigator({
    Home: {
      screen: () => (
        <View>
          <Text>HEllo World</Text>
        </View>
      )
    }
  })
);

const AppWithStore: React.FC = () => (
  <Store.Provider>
    <App />
  </Store.Provider>
);

export default AppWithStore;
