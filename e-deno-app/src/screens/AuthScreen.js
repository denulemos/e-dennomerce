import React, {useState} from 'react'
import { Text, View, Image, KeyboardAvoidingView } from 'react-native';

import SignIn from '../components/Auth/SignIn';
import logo from '../../assets/logo.png';
import {LayoutStyles} from '../styles';
import AuthScreenStyle from './AuthScreenStyle';

const AuthScreen = () => {
    const [showLogin, setShowLogin] = useState(false);
    const identifyPlatform =  Platform.OS === 'ios' ? "padding" : "height"
    
    return (
        <View style={LayoutStyles.container}>  
        <Image source={logo} style={AuthScreenStyle.logo}/>
        <KeyboardAvoidingView behavior={identifyPlatform}> {showLogin ? <Text>Test</Text> : <SignIn/>}</KeyboardAvoidingView>
        </View>
      
    )
}

module.exports =  AuthScreen;
