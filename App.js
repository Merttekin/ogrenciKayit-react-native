import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from './src/config/firebase';
import LoginForm from './src/components/login/LoginForm';



export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 40 }}>
          <LoginForm />
        </View>
      </Provider>

    );
  }
}