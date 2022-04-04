import {StyleSheet} from 'react-native';
import Colors from './colors';

const FormStyles = StyleSheet.create({
    input: {
        marginBottom: 5
    },
    btnSuccess: {
        padding: 5,
        backgroundColor: Colors.bluePrimary,
    },
    btnText: {
        marginTop: 10,
    },
    btnTextLabel: {
        color: Colors.bluePrimary,
    },
    formContainer : {
        marginBottom: 20
    }
})

export default FormStyles;