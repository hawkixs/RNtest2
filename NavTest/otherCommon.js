import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class OtherCommon extends React.Component {
  static navigationOptions = {
    title: 'Second Page',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Cette page utilise un code commun
        </Text>
        <Text style={styles.instructions}>
          Pour l'appli iOS et Android
        </Text>
        <Text style={styles.instructions}>
          Ceci est une seconde page commune !
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
