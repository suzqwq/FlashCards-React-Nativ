import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { getDeck, addCardToDeck } from '../utils/helpers'
import { NavigationEvents, StackActions, NavigationActions } from 'react-navigation'

export default class AddQuestion extends Component{

	state={
		added: false
	}

	handleQuestion = () => {
		let title = this.textInput._lastNativeText
		this.textInput.setNativeProps({text: ''})
		return title


	}

	handleAnswer = () => {
		let ansr= this.textIn._lastNativeText
		this.textIn.setNativeProps({text: ''})
		return ansr

	}

	submitQA = () => {
		let card={}
		const { added }= this.state
		let title=this.props.navigation.state.params.title
		addCardToDeck(title, card)

			this.setState({
				added: true
			})

			this.props.navigation.dispatch(StackActions.reset({
				index: 0,
				actions: [NavigationActions.navigate({
					routeName: 'Loading',
					params: {title}
				}
				)]
			}))	
}

	render(){

		return (
			<View style={styles.container}>
				<Text style={styles.title}>Enter your question</Text>
				<KeyboardAvoidingView behavior='padding'>
				<TextInput
				style={styles.addQ}
				placeholder='Type your question'
					ref={input => { this.textInput = input}} 
					onChangeInput={this.handleQuestion}/>
				<TextInput
				style={styles.addQ}
				placeholder='Type the answer'
				ref={ input => {this.textIn = input}}
				onChangeInput = {this.handleAnswer} />
				</KeyboardAvoidingView>
				<TouchableOpacity
					style={styles.addBtn}
					onPress={this.submitQA}>
					<Text style={{textAlign: 'center', color: '#fff'}}>
						Submit Question
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

	addQ : {
		backgroundColor: '#fff',
		borderColor: '#472E3E',
		borderWidth: 0.5,
		borderRadius: 7,
		padding: 10,
		margin: 5,
		width: 200

	},

	title: {
		fontSize: 30,
		paddingTop: 20,
		paddingBottom: 30,
		fontWeight: 'bold',
		color: '#472E3E',
		textAlign: 'center'

	},

	addBtn: {
		backgroundColor: '#472E3E',
		borderWidth: 0.5,
		borderRadius: 7,
		padding: 10,
		margin: 5,
		width: 200,

	}

})
