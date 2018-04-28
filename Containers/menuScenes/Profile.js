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
  KeyboardAvoidingView,
} from 'react-native'
import NavBarCHild from "./navBarChild.js";
import LoginForm from  "../LoginForm.js";
class Profile extends Component{


  render(){
  	 return(
  	 	
  	 	<KeyboardAvoidingView  style={styles.container}>
            <NavBarCHild navigation={this.props.navigation}/>
                <View style={styles.loginContainer}>
                    <Text style={{fontSize:50,fontWeight:"800",color:'white'}}>EVEH</Text>
                  
                   </View>
               <View style={styles.formContainer}>
                   <LoginForm />
               </View>
           </KeyboardAvoidingView>

  	 	)
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
})

    export default Profile