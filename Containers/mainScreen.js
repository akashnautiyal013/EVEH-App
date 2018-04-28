/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Home from "./HomeScreen";
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class mainScreen extends Component {

  render() {
    return (
       <View style={{flex:1}}>
       <View style={{height:50,width:500,backgroundColor:"red"}}>
         <TouchableOpacity style={{height:50,width:50,backgroundColor:'green'}} onPress={ () =>this.props.navigation.navigate("DrawerOpen") }>
          
         </TouchableOpacity>
       </View>
          <Home/>
        </View>

    );
  }
}
