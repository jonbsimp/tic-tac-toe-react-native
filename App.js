import React, { useState } from 'react';
import Board from './Board.js'
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
    const [name, setName] = useState('Tic Tac Toe')

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Board />
    </View>
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
