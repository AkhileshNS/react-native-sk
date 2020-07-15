const Component = (name) => `
import React from 'react';
import {View, Text} from 'react-native';
import styles from './${name}.styles';
// import Store from 'src/App/App.store';

interface IProps {}

export const ${name}: React.FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>${name}</Text>
    </View>
  );
};

export default () => {
  // const store = Store.useContainer();

  return <${name}  />;
};
`;

const Type = (name) => `
type ${name}RouteProp = RouteProp<RootStackParamList, '${name}'>;
type ${name}NavigationProp = StackNavigationProp<RootStackParamList, '${name}'>;
export interface ${name}Props {
  route: ${name}RouteProp;
  navigation: ${name}NavigationProp;
}
`;

const Types = (dirs) => `
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  ${dirs.map((dir) => dir + ': undefined').join(';')};
};

${dirs.map((dir) => Type(dir)).join('\n')}
`;

const Screens = (dirs) => `
${dirs.map((dir) => `import ${dir} from './${dir}/${dir}'`).join(';\n')}

export default [
  ${dirs.map((dir) => `{name: '${dir}', component: ${dir}}`).join(',\n')}
]
`;

const Screen = (name) => `
import React from 'react';
import {View, Text} from 'react-native';
import {${name}Props} from 'src/screens/types.tsx';
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

const Test = (name, isComponent) => `
import {${name}} from './${name}';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {View} from 'react-native';

describe('<${name} />', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(
        <${name} ${isComponent ? '' : 'screen={null}'} />
      );
    });

    it('should render a <View />', () => {
      expect(wrapper.find(View).length).toBe(1);
    });
  });
});
`;

module.exports = {
  Component,
  Screens,
  Screen,
  Test,
  Styles,
  Types,
};
