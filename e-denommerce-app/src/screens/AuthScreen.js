import React from 'react'
import { Text, View, Image } from 'react-native';
import logo from '../../assets/logo.png';
import {LayoutStyles} from '../styles';
import AuthScreenStyle from './AuthScreenStyle';

const AuthScreen = () => {
    return (
        <View style={LayoutStyles.container}>  
        <Image source={logo} style={AuthScreenStyle.logo}/>
        <Text>
            Holaaa
        </Text>
        </View>
      
    )
}

module.exports =  AuthScreen;
