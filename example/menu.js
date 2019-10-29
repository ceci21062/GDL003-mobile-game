import React, { Component } from 'react';
import { Text, View,Button,TouchableOpacity,StyleSheet } from 'react-native';
import { FontAwesome as Icon } from 'react-native-vector-icons';

class Menu extends Component {
    _onPressButton() {
    alert('You tapped the button!')
  }
    render() {
      return (
        <View style={{ width: 100, height: 100, alignItems: 'center'}}>
           <Button
            onPress={this._onPressButton}
            title={this.props.name}
          />
           <View style={{ width: 50, height: 50, backgroundColor: 'white', alignItems: 'center'}}/>
        </View>
      );
    }
  }
  
 class OpcionMenu extends Component {
    render() {
      return (
        <View style={styles.controls}>
                    <View style={styles.controlRow}>
                        <TouchableOpacity 
                        onPress={() => { this.engine.dispatch({ type: "move-up" })}}>
                             <Icon name="arrow-up" size={40} color="#00FFFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-left" })} }>
                            <Icon name="arrow-left" size={40} color="#00FFFF" />
                        </TouchableOpacity>
                        <View style={[styles.control, { backgroundColor: null}]} />
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-right" })}}>
                            <Icon name="arrow-right" size={40} color="#00FFFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={() => { this.engine.dispatch({ type: "move-down" })} }>
                         <Icon name="arrow-down" size={40} color="#00FFFF" />
                        </TouchableOpacity>
                    </View>
        </View>
      );
    }
  }

  




  const styles = StyleSheet.create({
    controls: {
        width: 100,
        height: 100,
        flexDirection: 'column',
       

    },
    controlRow: {
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    control: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    }
});

  export default  OpcionMenu;