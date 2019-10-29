import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Button, View, Alert,Text, Image } from 'react-native';
import SnakeGame from './gameSnake';

class App extends Component {
 _onPress() {
    <View>
   <SnakeGame/>
    </View>
  }

  render() {
    let pic = {
      uri: 'https://i.postimg.cc/L6kkjZWD/snakegame.jpg',
    };
    return (
    <View style={styles.container}>
      <View style={styles.img}>
      <View style={styles.fixToText}>
          <Button
            title="New Game"
            color="#17EB2D"
            onPress={()=>{this._onPress}} 
          />
         </View>
       <Image source={pic} style={styles.img}/>
      </View>
   </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor:"white"
  },
  img: {
      marginTop: '10%',
      width: '100%',
      height: '80%',
      justifyContent: 'center',
    },
  fixToText: {
    flexDirection: 'row',
    alignSelf:'auto',
    marginLeft:180, 
    
  },
});

export default App;
