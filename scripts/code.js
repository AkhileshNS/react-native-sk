const Screens = (dirs) => `
${dirs.map((dir) => `import ${dir} from './${dir}/${dir}';\n`)}

export default [
  ${dirs.map((dir) => `{name: '${dir}', component: ${dir}},\n`)}
]
`;

const Screen = (name) => `
import React from 'react';
import {View, Text} from 'react-native';
import {${name}Props} from 'src/App/App.types';
import styles from './${name}.styles';
// import Store from 'src/App/App.store';

interface IProps {
  screen: ${name}Props | null; // null for testing
}

export const ${name}: React.FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>${name}</Text>
    </View>
  );
};

export default (props: ${name}Props) => {
  // const store = Store.useContainer();

  return (
    <${name} screen={props} />
  );
};
`;

const Styles = () => `
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    padding: 8,
    fontSize: 16
  },
});
`;

const Test = (name) => `
import {${name}} from './${name}';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {View} from 'react-native';

describe('<${name} />', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(
        <${name} screen={null} />
      );
    });

    it('should render a <View />', () => {
      expect(wrapper.find(View).length).toBe(1);
    });
  });
});
`;

module.exports = {
  Screens,
  Screen,
  Test,
  Styles,
};
