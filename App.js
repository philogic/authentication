import React from 'react';
import { View } from 'react-native';
import LoginForm from "./src/components/LoginForm";
import {Header} from "./src/components/shared"

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title="Please Login"/>
        <LoginForm/>
      </View>
    );
  }
}
