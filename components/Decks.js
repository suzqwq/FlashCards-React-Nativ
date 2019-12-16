import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native'
import { getDecks, removeDeck } from '../utils/helpers'
import { NavigationEvents, StackActions } from 'react-navigation'
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'
import { useIsFocused } from '@react-navigation/native';
import Deck from './Deck'
import AddDeck from './AddDeck'
import AddQuestion from './AddQuestion'

export default class Decks extends Component{

	state={
		decks: {},
		update: false
	}

	componentDidMount(){

		const { navigation } = this.props
		getDecks()
		.then((data)=>this.setState(()=>({
			decks: data,
			}))

		)
		
		this.forceUpdate()
		
	}


	render(){

		const { decks, loading }=this.state

		  if (typeof decks=='undefined' || decks==null || Object.values(decks).length<1) {

		 	return (
		 		<View style={[styles.container, {justifyContent: 'center'}]}>

					<Text style={{textAlign: 'center', margin: 10}}>You don't have decks. Please create one! </Text>
						<TouchableOpacity
						style={styles.addDeck}	 
						 onPress={()=> this.props.navigation.navigate('Add')}>
						<Text style={{textAlign: 'center'}}>
						Add a deck
						</Text>
					</TouchableOpacity>
				</View>

			)}

			else {
				return (
					<View style={styles.container}>
					<Text style={styles.title}>
							Decks
						</Text>
						<ScrollView style={styles.scroll}>
							{
							Object.keys(decks).map((deck)=>{
								
								const cards=decks[deck].question && decks[deck].question
								return (
									<View 
									 key={deck}
									>
										<TouchableOpacity
										style={styles.deck}
										 onPress={()=> this.props.navigation.navigate(
										 	'Deck',
										 	{
										 		title: deck,
										 		cards:cards && cards
											 }
										 	)}
										 >
											<Text style={styles.cardText}>
											 { deck && deck} </Text>
											<Text style={styles.cardNTxt}> { cards ? decks[deck].question.length : 0} Cards

											</Text>
										</TouchableOpacity>
										</View>
								)
							})
						
					}

						
						</ScrollView>
					</View>

					)
				

			}

	}
}

const styles=StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		

	},

	addDeck : {
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

	scroll: {
	padding: 50

	},

	deck: {
		flex: 0.5,
		padding: 10,
		width: 140,
		backgroundColor:'#472E3E',
		borderRadius: 7,
		marginBottom: 10,
		color: '#fff',
		justifyContent: 'center',
		shadowRadius: 3,
		shadowOpacity: 0.8,
		shadowColor: 'rgba(0,0,0,0.24)',
	},
	cardText: {
		flex: 1,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	cardNTxt: {
		flex: 1,
		color: '#fff',
		textAlign: 'center',

	}


})


