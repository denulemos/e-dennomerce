import React from 'react'
import {TextInput, Button} from 'react-native-paper'
import {View} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { FormStyles } from '../../styles';

import SignInInitial from './initialValues/SignInInitial';

const SignIn = ({changeForm}) => {

    const formik = useFormik({
        initialValues: SignInInitial(),
        onSubmit: (formData) => {
            console.log(formData);
        },
    })

    return (
        <View>  
            <TextInput onChangeText={(value) => formik.setFieldValue("email", value)} label="Email" style={FormStyles.input}/>
            <TextInput onChangeText={(value) => formik.setFieldValue("username", value)} label="Username" style={FormStyles.input}/>
            <TextInput onChangeText={(value) => formik.setFieldValue("password", value)} label="Password" style={FormStyles.input} secureTextEntry/>
            <TextInput onChangeText={(value) => formik.setFieldValue("confirmPassword", value)} label="Confirm Password" style={FormStyles.input} secureTextEntry/>

            <Button onPress={formik.handleSubmit} mode="contained" style={FormStyles.btnSuccess}>Sign In!</Button>
            <Button onPress={changeForm} mode="text" labelStyle={FormStyles.btnTextLabel} style={FormStyles.btnText}>I already have an Account</Button>
        </View>
    )
}

export default SignIn
