/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App/App';
import {name as appName} from './app.json';
import './src/App/App.error';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
