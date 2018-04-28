import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,TouchableOpacity,Dimensions} from 'react-native';
let width = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/Ionicons';

class NavBarCHild extends Component {
 navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render () {
    return (
      <View style={{height:50,width:width,backgroundColor:'white',flexDirection:'row'}}>
       <TouchableOpacity style={{width:50,height:50,justifyContent:'center',alignItem:'center'}}onPress={this.navigateToScreen('Page1')} ><Icon style ={{marginLeft:10}}name={"md-arrow-back"} size={20} color='#0099FF' ></Icon></TouchableOpacity>
       <Text style={{marginLeft:10,textAlign:'center',textAlignVertical:'center', fontSize:20,color:'black'}}>{this.props.title}</Text>
      </View>
    );
  }
}


export default NavBarCHild;