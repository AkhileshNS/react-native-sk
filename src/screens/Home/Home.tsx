import React from 'react';
import {View, Text, Button} from 'react-native';
import {Store} from 'src/App/App.store';
import {HomeProps} from 'src/screens/types';
import styles from './Home.styles';

interface IProps {
  screen: HomeProps | null; // null for testing
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const Home: React.FC<IProps> = (props) => {
  return (
    <View style={styles.container}>
      <Button title="increment" onPress={props.increment} />
      <Text style={styles.text}>Count: {props.counter}</Text>
      <Button title="decrement" onPress={props.decrement} />
    </View>
  );
};

export default (props: HomeProps) => {
  const store = Store.useContainer();

  return (
    <Home
      screen={props}
      counter={store.counter}
      increment={store.increment}
      decrement={store.decrement}
    />
  );
};
