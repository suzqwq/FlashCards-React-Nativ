import React, {Component} from 'react'
import { Text, View, Platform, StyleSheet } from 'react-native'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, NavigationActions, StackActions } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddQuestion from './components/AddQuestion'
import Quiz from './components/Quiz'
import Question from './components/Question'
import Score from './components/Score'
import Loading from './components/Loading'
import { setLocalNotification } from './utils/helpers'

const iosScreens = createBottomTabNavigator({
	Home: {
		screen: Decks,
		navigationOptions: {
			toBarLabel: 'Decks',
			tabBarIcon: ({tintColor})=> <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
		},
	},
	Add: {
		screen: AddDeck,
		navigationOptions: {
			toBarLabel: 'Add Card',
			tabBarIcon: ({tintColor})=> <Ionicons name="md-add" size={30} color={tintColor} />
		}
	}
})

const androidScreens = createMaterialTopTabNavigator({
	Home: {
		screen: Decks,
		navigationOptions: {
			toBarLabel: 'Decks',
			tabBarIcon: ({tintColor})=> <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
		},
	},
	Add: {
		screen: AddDeck,
		navigationOptions: {
			toBarLabel: 'Add Card',
			tabBarIcon: ({tintColor})=> <Ionicons name="md-add" size={30} color={tintColor} />
		},
	}
})

//const Tabs = Platform.OS === 'ios' ? createAppContainer(iosScreens) : createAppContainer(androidScreens)

const StackNav = createStackNavigator({
	Home: {
		screen: Platform.OS==='ios' ? iosScreens : androidScreens, 
		navigationOptions: {
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#472E3E'
			}
		}
	},

	Deck: {
		screen: Deck,
		navigationOptions: {
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#472E3E'
			}
		}
	},


	AddQuestion: {
		screen: AddQuestion,
		navigationOptions: {
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#472E3E'
			}
		}
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#472E3E'
			}
		}
	},

	Question: {
		screen: Question,
		navigationOptions: {
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#472E3E'
			}
		}
	},
	Score: {
		screen: Score,
		navigationOptions: {
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#472E3E'
			}
		}
	},
	Loading: {
		screen: Loading,
		navigationOptions: {
			headerTintColor: '#fff',
			headerStyle: {
				backgroundColor: '#472E3E'
			}
		}
	},

})


const MainNav = createAppContainer(StackNav)
class App extends Component {

	componentDidMount(){

		setLocalNotification()
	}

	render(){

		return(
			<MainNav />

			)
	}
}

export default App

