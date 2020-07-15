import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import screens from 'src/screens';
import {Store} from 'src/App/App.store';

const Stack = createStackNavigator();

const App = () => (
  <Store.Provider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {screens.map((screen, i) => (
          <Stack.Screen {...screen} key={'Screen ' + i} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  </Store.Provider>
);

export default App;
