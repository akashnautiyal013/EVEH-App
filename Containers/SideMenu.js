import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './stylesidemenu.js';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
      <View style={{height:200,backgroundColor:'blue'}}>
      <ImageBackground style={{height:200,width:300}}source={{uri:'http://rusautonews.com/wp-content/uploads/2017/07/TeslaModel_X_Crossover_1-800x500_c.jpg'}}>
        <View style={{position:"absolute",top:0,width:300,height:200,backgroundColor:'#0099FF',opacity:0.7}}>
        
        </View>
        <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
        <Icon style={{marginTop:5}}name={"ios-flash"} size={45} color="white"></Icon>
        <Text style={{fontSize:40,fontWeight:"800",color:'white'}}>EVEH</Text>
        </View>
      </ImageBackground>     
        </View>
        <ScrollView>      
          <View>
            <View style={styles.navSectionStyle}>
              <Icon style={{marginTop:10}}name={"ios-contact"} size={20} color="#0099FF"></Icon>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Register')}>
               Profile
              </Text>
            </View>
          </View>
          <View>
             <View style={styles.navSectionStyle}>
             <Icon style={{marginTop:10}}name={"ios-car"} size={20} color="#0099FF"></Icon>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('CarListing')}>
                Cars List
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Icon style={{marginTop:10}}name={"ios-card"} size={20} color="#0099FF"></Icon>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Payment')}>
                Payment Method
              </Text>
            </View>
             <View style={styles.navSectionStyle}>
              <Icon style={{marginTop:10}}name={"md-speedometer"} size={20} color="#0099FF"></Icon>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Trips')}>
                Trips
              </Text>
            </View>
             <View style={styles.navSectionStylelast}>
             <Icon style={{marginTop:10}}name={"md-settings"} size={20} color="#0099FF"></Icon>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Register')}>
                Settings
              </Text>
            </View>
            
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;