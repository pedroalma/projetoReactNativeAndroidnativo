/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import TaskList from './src/screens/TaskList';

AppRegistry.registerComponent(appName, () => TaskList);
