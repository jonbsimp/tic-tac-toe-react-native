import React, { useState } from 'react';
import Board from './Board.js'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DeviceWidth = Dimensions.get('window').width

export default function Tile(props) {
    const [tile, setTile] = useState(" ")

    const onPress = _ => {
        props.customPress(props.index)
        setTile(props.player ? 'X' : 'O')
    }
    
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Text>{tile} :{props.index}</Text>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
        width: DeviceWidth*0.2,
        height: DeviceWidth*0.2,
        marginBottom:10,
        marginLeft:10,
        backgroundColor: 'powderblue'}
});
