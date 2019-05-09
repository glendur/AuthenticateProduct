import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/Main';
import './global';
import firebaseConfig from './src/InitFirebase';
import firebase from 'firebase'; 
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class App extends React.Component {
  constructor() {
    super();

  }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Main style={{ flex: 1 }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
});
