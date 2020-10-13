import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import screens from 'src/screens';
import {Store} from 'src/App/App.store';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from 'src/global/theme';
import Controller from './App.controller';

const Stack = createStackNavigator();

const App = () => (
  <PaperProvider theme={theme}>
    <Store.Provider>
      <Controller />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          {screens.map((screen, i) => (
            <Stack.Screen {...screen} key={'Screen ' + i} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Store.Provider>
  </PaperProvider>
);

export default App;
