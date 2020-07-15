import {Home} from './Home';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {View} from 'react-native';

describe('<Home />', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Home
          screen={null}
          counter={0}
          increment={() => {}}
          decrement={() => {}}
        />,
      );
    });

    it('should render a <View />', () => {
      expect(wrapper.find(View).length).toBe(1);
    });
  });
});
