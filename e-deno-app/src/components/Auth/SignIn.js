import React from 'react'
import {TextInput, Button} from 'react-native-paper'
import {View} from 'react-native';
import { FormStyles } from '../../styles';  

const SignIn = ({changeForm}) => {
    return (
        <View>  
            <TextInput label="Email" style={FormStyles.input}/>
            <TextInput label="Username" style={FormStyles.input}/>
            <TextInput label="Password" style={FormStyles.input} secureTextEntry/>
            <TextInput label="Confirm Password" style={FormStyles.input} secureTextEntry/>

            <Button onPress={changeForm} mode="contained" style={FormStyles.btnSuccess}>Sign In!</Button>
            <Button onPress={changeForm} mode="text" labelStyle={FormStyles.btnTextLabel} style={FormStyles.btnText}>I already have an Account</Button>
        </View>
    )
}

export default SignIn
