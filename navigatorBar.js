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
	Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
let width = Dimensions.get('window').width;

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
		height: 44,
		titleColor: '#000',
		backgroundColor: '#f5f3f4',
		leftButtonTitle: null,
		leftButtonTitleColor: '#000',
		rightButtonTitle: null,
		rightButtonTitleColor: '#000'
	};

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

	_renderRightIcon() {
		if(this.state.rightButtonIcon){
			return (
				 <Icon name="ios-book" color="#4F8EF7" /> 
			);
		}
		return null;
	}
	_renderRightIcon2() {
		if(this.state.rightButtonIcon){
			return (
               <Icon name="ios-book" color="#4F8EF7" /> 			);
		}
		return null;
	}

	_renderRightIcon3() {
		if(this.state.rightButtonIcon){
			return (
<Icon name="ios-book" color="#4F8EF7" /> 			);
		}
		return null;
	}

	_renderRightIcon4() {
		if(this.state.rightButtonIcon){
			return (
<Icon name="ios-book" color="#4F8EF7" /> 			);
		}
		return null;
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
				backgroundColor: this.state.backgroundColor
			}]}>

				<TouchableOpacity onPress={this._onLeftButtonPressHandle.bind(this)}>
					<View style={styles.leftButton}>
						{this._renderLeftIcon()}
						<Text style={[styles.leftButtonTitle, {color: this.state.leftButtonTitleColor}]}>
							{this.state.leftButtonTitle}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
					<View style={styles.rightButton}>
						{this._renderRightIcon()}
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
					<View style={styles.rightButton}>
						{this._renderRightIcon2()}
						<Text>2</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
					<View style={styles.rightButton}>
						{this._renderRightIcon3()}	
						<Text>3</Text>			
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this._onRightButtonPressHandle.bind(this)}>
					<View style={styles.rightButton}>
						{this._renderRightIcon4()}
						<Text>4</Text>
					</View>
				</TouchableOpacity>

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
		paddingLeft: 8
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
