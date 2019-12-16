import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, goBack, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { saveDeckTitle } from '../utils/helpers'
import { NavigationEvents, StackActions, NavigationActions } from 'react-navigation'
import Deck from './Deck'
//import Decks from './Decks'

export default class AddDeck extends Component{

	sendTitle = () => {
		
		let title = this.textInput._lastNativeText
		console.log('first from add', title, title.trim())
		
		this.textInput.setNativeProps({text: ''})


		saveDeckTitle(title)

		this.props.navigation.dispatch(StackActions.reset({
				index: 0,
				//key: 'Home',
				actions: [NavigationActions.navigate({
					//{
					routeName: 'Deck'
					,
					params: {title}
				//params: 
				//{title}
				}
				)]
			}))


/*		this.props.navigation.navigate(
			'Deck',
			{title}
		)*/
}

	componentDidMount(){
		console.log('mounted')
	}

	render(){

		return (
			<View style={styles.container}>
				<Text style={styles.title}>Add deck</Text>
				<KeyboardAvoidingView behavior='padding'>
				<TextInput
					style={styles.inputBox}
					placeholder="Enter deck title"
					ref={input => { this.textInput = input}}
					 />
					</KeyboardAvoidingView>
				<TouchableOpacity
				style={styles.submitBtn}
				onPress={this.sendTitle}>
					<Text style={{color: '#fff', textAlign: 'center'}}>
						SUBMIT
					</Text>
				</TouchableOpacity>

			</View>

			)
	}
}

const styles=StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	title: {
		paddingTop: 10,
		color: '#472E3E',
		fontWeight: 'bold',
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 30
		
	},

	inputBox: {
		borderColor: '#472E3E',
		borderWidth: 0.5,
		marginBottom: 15, 
		padding: 7,
		width: 300

	},
	submitBtn: {

		backgroundColor: '#472E3E',
		borderRadius: 7,
		padding: 15,
		margin: 5,
		width: 150

	}

})


