/**
 * react-native-navigation-bar main
 */

import React, {
	Component,
	
} from 'react';

import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	Dimensions,
	Platform,
	NativeModules,
	TouchableWithoutFeedback,
	LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
const { UIManager } = NativeModules;
let width = Dimensions.get('window').width;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class NavigationBar extends Component{

	static propTypes = {
		title: PropTypes.string.isRequired,
		//not include the height of statusBar on ios platform
		height: PropTypes.number,
		titleColor: PropTypes.string,
		backgroundColor: PropTypes.string,
		leftButtonTitle: PropTypes.string,
		leftButtonTitleColor: PropTypes.string,
		onLeftButtonPress: PropTypes.func,
		rightButtonTitle: PropTypes.string,
		rightButtonTitleColor: PropTypes.string,
		onRightButtonPress: PropTypes.func,
		onRightButtonPress2: PropTypes.func,
		onRightButtonPress3: PropTypes.func,
		onRightButtonPress4: PropTypes.func,
	};

	static defaultProps = {
		height: 50,
		titleColor: '#000',
		backgroundColor: 'White',
		leftButtonTitle: null,
		leftButtonTitleColor: '#000',
		rightButtonTitle: null,
		rightButtonTitleColor: '#000',
		open:false,
		Animatedwidth:0,
	};

	constructor(props) {
    super(props);

	   this.state = {
          Animatedwidth:50,
          open:false,
       }
    }

	componentWillMount(){
		this.state = this._getStateFromProps(this.props);
	}

	componentWillReceiveProps(newProps){
		let newState = this._getStateFromProps(newProps);
		this.setState(newState);
	}

	shouldComponentUpdate(nextProps, nextState, context) {
		return JSON.stringify([nextState, context]) !== JSON.stringify([this.state, context]);
	}

	_getStateFromProps(props){
		return {
			...props
		};
	}

	_renderLeftIcon() {
		if(this.state.leftButtonIcon){
			return (
				<Image style={styles.leftButtonIcon} resizeMode={'contain'} source={this.state.leftButtonIcon} />
			);
		}
		return null;
	}

	onClickSearch(){
    if (!this.state.open) {
     LayoutAnimation.linear();
     this.setState({open:true,Animatedwidth:width-100})
    }else{
      LayoutAnimation.linear();
      this.setState({
        Animatedwidth:20,
        open:false,
      })
    }
	}

	

	_onLeftButtonPressHandle(event) {
		let onPress = this.state.onLeftButtonPress;
		typeof onPress === 'function' && onPress(event);
	}

	_onRightButtonPressHandle(event) {
		let onPress = this.state.onRightButtonPress;
		typeof onPress === 'function' && onPress(event);
	}

	render() {
		let height = Platform.OS === 'ios' ? this.state.height + 20 : this.state.height;
		return (
			<View style={[styles.container, {
				height: height,
				backgroundColor:"white",
			}]}>
				<TouchableOpacity onPress={()=> this.props.navigation.navigate('DrawerOpen')}>
					<View style={styles.leftButton}>
						<Icon size={25} name="md-menu" color="#0099FF" /> 
						<Text style={[styles.leftButtonTitle, {color: this.state.leftButtonTitleColor}]}>
							

						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=> this.props.onClickSearch()}>
					<View style={styles.rightButton}>
						<Icon size={20} name="md-search" color="#0099FF" /> 
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
					<View style={styles.rightButton}>
						<Icon size={20} name="md-options" color="#0099FF" /> 
						
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
					<View style={styles.rightButton}>
						
						<Icon size={20} name="ios-radio" color="#0099FF" /> 
						
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
					<View style={styles.rightButton}>
						
						<Icon size={20}name="md-pin" color="#0099FF" /> 
						
					</View>
				</TouchableOpacity>
                <View style = {{height:50,width:this.state.Animatedwidth,backgroundColor:"red"}}></View>

			</View>
		);
	}
};

let styles = StyleSheet.create({
	container: { 
		flex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		flexDirection: 'row',
		width: width
	},
	leftButton: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: 90,
		paddingTop: 1,
		paddingLeft: 8,
		marginLeft:10,

	},
	leftButtonIcon: {
		width: 12,
		height: 15,
		marginRight: 6
	},
	leftButtonTitle: {
		fontSize: 15
	},
	title: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 1,
		justifyContent: 'center',
		width: width - 200,
		overflow: 'hidden'
	},
	titleText: {
		fontSize: 18,
		fontWeight: '400'
	},
	rightButton: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: 50,
		paddingTop: 1,
		paddingRight: 8
	},
	rightButtonIcon: {
		width: 10,
		height: 15
	},
	rightButtonTitle: {
		fontSize: 15
	}
});

if(Platform.OS === 'ios'){
	styles = {
		...styles,
		container: {
			flex: 1,
			position: 'absolute',
			top: 0,
			left: 0,
			flexDirection: 'row',
			width: width,
			paddingTop: 20
		},
		rightButton: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
			width: 90,
			paddingTop: 1,
			paddingRight: 8
		}
	}
}
