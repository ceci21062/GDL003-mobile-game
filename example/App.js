import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Button, View, Alert } from 'react-native';
//import {OpcionMenu} from './menu';

class App extends Component {
  render() {
    let pic = {
      uri:
        'https://thumbs.dreamstime.com/b/modelo-inconsútil-de-la-historieta-del-kawaii-con-los-fantasmas-lindos-51223794.jpg',
    };
    return (
      <ImageBackground source={pic} style={styles.imgback}>
        <View style={styles.menu} />
        <Button
          style={styles.button}
          title="NEW GAME"
          onPress={() =>
            Alert.alert(
              'Alert Title',
              'My Alert Msg',
              [
                {
                  text: 'Ask me later',
                  onPress: () => console.log('Ask me later pressed'),
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false }
            )
          }
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imgback: {
    height: '100%',
  },
  menu: {
    height: '40%',
  },
  button: {
    backgroundColor: '#00308F',
  },
});

export default App;
