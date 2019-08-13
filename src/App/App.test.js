import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Using Jest + Enzyme
describe('<App />', () => {
  it('renders correctly, test using Jest + Enzyme', () => {
    expect(shallow(<App/>)).toMatchSnapshot();
  });
});