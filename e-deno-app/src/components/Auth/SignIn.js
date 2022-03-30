import React from 'react'
import {TextInput, Button} from 'react-native-paper'
import {View} from 'react-native';
import { FormStyles } from '../../styles';  

const SignIn = () => {
    return (
        <View>  
            <TextInput label="Email" style={FormStyles.input}/>
            <TextInput label="Username" style={FormStyles.input}/>
            <TextInput label="Password" style={FormStyles.input} secureTextEntry/>
            <TextInput label="Confirm Password" style={FormStyles.input} secureTextEntry/>

            <Button mode="contained" style={FormStyles.btnSuccess}>Sign In!</Button>
            <Button mode="text" labelStyle={FormStyles.btnTextLabel} style={FormStyles.btnText}>I already have an Account</Button>
        </View>
    )
}

export default SignIn
