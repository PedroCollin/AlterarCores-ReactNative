import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: 'white',
        width: '50%',
        height:300,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>SENAI</Text>
      </View>
      <View>
        <Text>Turma da BOSCH!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66ccff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
