import React, { Component } from "react";
import {  View } from "react-native";
import { GameEngine, dispatch } from "react-native-game-engine";
import  Constants  from "./Constants"
import OpcionMenu from "./menu"


class Snake  extends Component{
    constructor(prop){
        super(prop);
        this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
        this.state={
            running:true
        }
    }
    render(){
        return(
           <View>
                    <GameEngine style={[{ width: this.boardSize, height: this.boardSize, backgroundColor: '#00FFFF', flex: null }]}>

                    </GameEngine>
                     <OpcionMenu/>
            </View>
          
           
        )
    }

}
export default Snake;
