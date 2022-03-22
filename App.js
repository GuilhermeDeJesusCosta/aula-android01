//(CODIGO DA IMAGEM:)
//import React from 'react';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';


//export default function App() {
//  console.log("App Executado!!") ;
  //console.log(require('./assets/icon.png')) ;
  //const handlePress = () => console.log("Texto Clicado!") ;
//  return (
//    <SafeAreaView style={styles.container}>
//      <Text> Hello React Native</Text>
//</SafeAreaView>      <Image source={{
//        width: 200,
//        height: 300,
//        uri : "https://picsum.photos/200/300"}}/>
//        
//      <StatusBar style="auto" />
//    </SafeAreaView>
//  );
//}

//CODIGO DO TEXTO NA TELA:
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>💬Projeto desenvolvido por:</Text>
      <Text>👉Guilherme de Jesus Costa.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

