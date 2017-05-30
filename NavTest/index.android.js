/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AwesomePage from './testCommon.js'
import OtherCommon from './otherCommon.js'
const AwesomeProject = StackNavigator({
 Main: {screen: AwesomePage},
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
