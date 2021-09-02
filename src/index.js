import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
// import { PersisrtGate } from 'redux-persist/integration/react';
// import { NavigationActions } from 'react-navigation';
import store from "./store";
import ApplicationNavigator from "./navigation"



export default class Todos extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <View style={{ flex: 1 }}>
          <ApplicationNavigator />
        </View>
      </Provider>
    );
  }
}
