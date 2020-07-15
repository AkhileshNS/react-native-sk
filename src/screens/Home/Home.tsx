import React from 'react';
import {View, Text, Button} from 'react-native';
import {Store} from 'src/App/App.store';

interface IProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const Home: React.FC<IProps> = (props) => {
  return (
    <View>
      <Button title="increment" onPress={props.increment} />
      <Text>Count: {props.counter}</Text>
      <Button title="decrement" onPress={props.decrement} />
    </View>
  );
};

export default () => {
  const store = Store.useContainer();

  return (
    <Home
      counter={store.counter}
      increment={store.increment}
      decrement={store.decrement}
    />
  );
};
