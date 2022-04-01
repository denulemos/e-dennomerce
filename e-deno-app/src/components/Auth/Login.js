import React from 'react'
import {TextInput, Button} from 'react-native-paper'
import {View} from 'react-native';
import { FormStyles } from '../../styles';  

const Login = ({changeForm}) => {
    return (
        <View>  
            <TextInput label="Email" style={FormStyles.input}/>
            <TextInput label="Password" style={FormStyles.input} secureTextEntry/>
            

            <Button onPress={changeForm} mode="contained" style={FormStyles.btnSuccess}>Login</Button>
            <Button onPress={changeForm} mode="text" labelStyle={FormStyles.btnTextLabel} style={FormStyles.btnText}>Register</Button>
        </View>
    )
}

export default Login
