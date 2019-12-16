import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AddQuestion from './AddQuestion'
import Quiz from './Quiz'

export default class Deck extends Component{

	render(){
		const { cards, title } = this.props.navigation.state.params 
		console.log('current params',cards, title)

		return (
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<Text>This deck has {cards ? cards.length : 0} card</Text>

				<TouchableOpacity
				style={styles.addBtn}
				onPress={()=> this.props.navigation.navigate(
				 	'AddQuestion',
				 	{ title}
				 	)}>
					<Text style={{color: '#fff', textAlign: 'center'}}>
						Add Card
					</Text>
				</TouchableOpacity>
				{ cards ?
				<TouchableOpacity
				style={styles.quizBtn}
				onPress={()=> this.props.navigation.navigate(
					'Quiz',
					{cards, title})}>
					<Text style={{color: '#472E3E', textAlign: 'center'}}>
						Start Quiz
					</Text>
				</TouchableOpacity>
				:
				<Text></Text>
			}
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

	addBtn: {

	backgroundColor: '#472E3E',
	borderRadius: 7,
	padding: 10,
	margin: 5,
	width:200

	},
	quizBtn: {

	backgroundColor: '#fff',
	borderColor: '#472E3E',
	borderWidth: 0.5,
	borderRadius: 7,
	padding: 10,
	margin: 5,
	width: 200

	}

})



