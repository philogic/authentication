import React from 'react';
import { View } from 'react-native';
import LoginForm from "./src/components/LoginForm";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginForm/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
