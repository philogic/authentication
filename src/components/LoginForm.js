import React, {Component} from "react";
import {View} from "react-native";
import {Button, FormLabel, FormInput} from "react-native-elements";

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.formStyle}>
        <View style={styles.sectionStyle}>
          <FormLabel>Email</FormLabel>
          <FormInput value="" placeholder="Email"/>
        </View>
        <View style={styles.sectionStyle}>
          <FormLabel>Password</FormLabel>
          <FormInput value="" placeholder="Password" secureTextEntry/>
        </View>
        <Button title="Login" backgroundColor="#3bd3d4"/>
      </View>
    )
  }
}

const styles = {
  formStyle: {
    marginTop: 60
  },
  sectionStyle: {
    marginTop: 10,
    marginBottom: 10
  }
};

export default LoginForm;