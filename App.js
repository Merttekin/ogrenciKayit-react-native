import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase  from 'firebase';
import config from './src/config/firebase';
import LoginForm from './src/components/login/LoginForm';



export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 40 }}>
          <LoginForm />
        </View>
      </Provider>

    );
  }
}