import React from 'react';
import {View, Text, Button} from 'react-native';
import 'src/App/App.error';
import {Store} from 'src/App/App.store';

const App = () => {
  const store = Store.useContainer();

  return (
    <View>
      <Button title="increment" onPress={store.increment} />
      <Text>Count: {store.counter}</Text>
      <Button title="decrement" onPress={store.decrement} />
    </View>
  );
};

const AppWithStore = () => (
  <Store.Provider>
    <App />
  </Store.Provider>
);

export default AppWithStore;
