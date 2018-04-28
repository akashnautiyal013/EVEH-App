import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  NativeModules,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native'
const { UIManager } = NativeModules;

import Map from '../map';
import NavBar from "../navBar";
var {height, width} = Dimensions.get('window');
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);
var CustomLayoutSpring = {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.4,
    },
    update: {
      type: LayoutAnimation.Types.linear,
      springDamping: 0.4,
    },
  };
export default class Menu1 extends Component {

constructor(props) {
    super(props);

     this.state = {
          heightAni:1,
          widthAni:width,
          open:false,
       };

       this.onClickSearch = this.onClickSearch.bind(this);
    }

  onClickSearch(){

    if (!this.state.open) {
    LayoutAnimation.configureNext(CustomLayoutSpring);
     this.setState({open:true,heightAni:height-70, widthAni:width,})
    }else{
      LayoutAnimation.configureNext(CustomLayoutSpring);
      this.setState({
        heightAni:1,
        widthAni:width,
        open:false,
      })
    }
  }



  render() {
    return(
      <View style={styles.container}>
      <NavBar onClickSearch = {this.onClickSearch} navigation={this.props.navigation}/>
       <View style={{marginTop:40,height:height-60,width:width}}>
        <Map/>
        <View style={{backgroundColor:'white', top:10,height:this.state.heightAni,width:this.state.widthAni}}>
        </View>
        <View style={{backgroundColor:'white', top:10,height:this.state.heightAni,width:this.state.widthAni}}>
        </View>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ecc71',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btnContainer: {
    width: 200,
    height: 40,
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
})