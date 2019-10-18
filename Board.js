import React, { useState } from 'react';
import Tile from './Tile.js'
import { StyleSheet, Text, View } from 'react-native';


export default function Board(props) {
    //Hooks
    const [player, setPlayer] = useState(true)
    const [p1Moves, setP1] = useState([])
    const [p2Moves, setP2] = useState([])


    //Constants
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    //Game Logic
    const hasWon = (playerTurn, index) => !!winConditions.filter(wincondition => wincondition.every(winNum => [...playerTurn, index].includes(winNum))).length

    const gameLogic = index => {
        setPlayer(!player)
    }

    const generateTile = (elm) => (
        <Tile customPress={gameLogic} player={player} index={elm} key={elm}/>
    )

    return (
        <View style={styles.container}>
           <View>
                {[0,1,2].map(generateTile)}
           </View>
           <View>
                {[3,4,5].map(generateTile)}
           </View>
           <View>
                {[6,7,8].map(generateTile)}
           </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
