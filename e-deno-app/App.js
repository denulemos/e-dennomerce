import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AuthScreen from './src/screens/AuthScreen';

export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <PaperProvider>
      {auth ? <Text>Test</Text> : <AuthScreen/>}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
