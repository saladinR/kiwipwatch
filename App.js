import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import WatchList from './components/WatchList';
import Header from './components/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <WatchList /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
});
