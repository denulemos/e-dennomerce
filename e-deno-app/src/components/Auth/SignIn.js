import React, {useState} from "react";
import { TextInput, Button } from "react-native-paper";
import { ToastAndroid, View } from "react-native";
import Toast from 'react-native-root-toast';

import SignInInitial from "./validations/signInInitial";
import ValidationSchema from './validations/validationSchema';
import {registerUser} from '../../api/user';

import { FormStyles } from "../../styles";

const SignIn = ({ changeForm }) => {

    const [form, setForm] = useState(SignInInitial);
    const [loading, setLoading] = useState(false);

    const validateFields = async() => {
        setLoading(true);
        const valid = ValidationSchema(form);
        if (valid.isCorrect) {
            try {
              const result = await registerUser(form);
              changeForm();
            }
            catch(e) {
              Toast.show(e.message, {
                position: Toast.positions.CENTER,
              });
              setLoading(false);
            }
        }
        else {
          Toast.show(valid.message, {
            position: Toast.positions.CENTER,
          });
          setLoading(false);
        }
    }

  return (
    <View style={FormStyles.formContainer}>
      <TextInput
        value={form.email}
        onChangeText={(value) => setForm({ ...form, email: value })}
        label="Email"
        style={FormStyles.input}
      />
      <TextInput
        value={form.username}
        onChangeText={(value) => setForm({ ...form, username: value })}
        label="Username"
        style={FormStyles.input}
      />
      <TextInput
        value={form.password}
        onChangeText={(value) => setForm({ ...form, password: value })}
        label="Password"
        style={FormStyles.input}
        secureTextEntry
      />
      <TextInput
        value={form.confirmPassword}
        onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
        label="Confirm Password"
        style={FormStyles.input}
        secureTextEntry
      />

      <Button
        onPress={validateFields}
        mode="contained"
        loading={loading}
        style={FormStyles.btnSuccess}
      >
        Sign In!
      </Button>
      <Button
        onPress={changeForm}
        mode="text"
        labelStyle={FormStyles.btnTextLabel}
        style={FormStyles.btnText}
      >
        I already have an Account
      </Button>
    </View>
  );
};

export default SignIn;
