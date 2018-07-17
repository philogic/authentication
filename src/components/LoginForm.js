import React, {Component} from "react";
import {View} from "react-native";
import {Button, FormLabel, FormInput} from "react-native-elements";
import {connect} from "react-redux";
import firebase from "firebase";
import {authInputChange} from "../actions/AuthActions";

class LoginForm extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDiW3ZxG3w77IOdusSHxv31sTLMoi-5Nlo",
      authDomain: "authentication-1c525.firebaseapp.com",
      databaseURL: "https://authentication-1c525.firebaseio.com",
      projectId: "authentication-1c525",
      storageBucket: "authentication-1c525.appspot.com",
      messagingSenderId: "877498223234"
    };
    firebase.initializeApp(config);
  };
  render() {
    return (
      <View style={styles.formStyle}>
        <View style={styles.sectionStyle}>
          <FormLabel>Email</FormLabel>
          <FormInput value="" placeholder="Email" onChangeText={text => this.props.authInputChange({"field": "email", "value": text})}/>
        </View>
        <View style={styles.sectionStyle}>
          <FormLabel>Password</FormLabel>
          <FormInput value="" placeholder="Password" secureTextEntry onChangeText={text => this.props.authInputChange({"field": "password", "value": text})}/>
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

export default connect(null, {authInputChange})(LoginForm);