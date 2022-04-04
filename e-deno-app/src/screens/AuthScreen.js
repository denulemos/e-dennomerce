import React, {useState} from 'react'
import { Text, View, Image, KeyboardAvoidingView } from 'react-native';

import SignIn from '../components/Auth/signIn';
import Login from '../components/Auth/login';
import logo from '../../assets/logo.png';
import {LayoutStyles} from '../styles';
import AuthScreenStyle from './AuthScreenStyle';

const AuthScreen = () => {
    const [showLogin, setShowLogin] = useState(true);
    
    // if it is ios, adjust the padding, if it is android, adjust the height
    const identifyPlatform =  Platform.OS === 'ios' ? "padding" : "height"

    const changeForm = () => {
        setShowLogin(!showLogin);
    }
    
    return (
        <View style={LayoutStyles.container}>  
        <Image source={logo} style={AuthScreenStyle.logo}/>
        <KeyboardAvoidingView behavior={identifyPlatform}> 
        {showLogin ? <Login changeForm={changeForm} /> : <SignIn changeForm={changeForm} />}
        </KeyboardAvoidingView>
        </View>
      
    )
}

module.exports =  AuthScreen;
