import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import Question from './Question'
import Score from './Score'
import {
	clearLocalNotification,
	setLocalNotification
} from '../utils/helpers'

export default class Quiz extends Component{

	state = {
            index: 0,
            showAnswer: false,
            correct: 0,
            incorrect: 0
        }

    handleAnswer = (a) => {
        this.setState((state) => ({
            index : state.index + 1,
            correct : a === 'correct' ? state.correct + 1 : state.correct,
            incorrect : a === 'incorrect' ? state.incorrect + 1 : state.incorrect,
            showAnswer: false
        }))
    }

        restart = () => {
        this.setState({
            index : 0,
            showAnswer: false,
            correct : 0,
            incorrect : 0,
        })
    }

    componentDidMount(){
        clearLocalNotification()
        .then(setLocalNotification)
    }

    render(){
        const { index, showAnswer, correct, incorrect } = this.state
        const { title, cards } = this.props.navigation.state.params
        const showCard = index < cards.length ? true : false
       
		return (
			<View style={styles.container} >
				<Text style={styles.title}>Quiz</Text>
				<Text style={styles.subtitle}>{title}</Text>
                <Text style={styles.counter}>{ showCard ? index + 1 : index }/{ cards.length }</Text>
                {showCard ?
                    <Question
                     cards={cards}
                     index={index}
                     showAnswer={showAnswer}
                     handleAnswer={this.handleAnswer}
                     title={title}
                    />
                :
                    <Score
                     cardLen={cards.length}
                     title={title}
                     correct={correct}
                     incorrect={incorrect}
                     restart={this.restart}
                    />

                }
                <View style={styles.container}>
                { index<cards.length ? 
                	
                	(<TouchableOpacity
                	style= {styles.navBtn}
                	onPress={()=>{
                		this.setState({
						index: index+1
						})
                	}} >
                	<Text style={{textAlign: 'center', color: '#fff'}}>Next</Text>
                	</TouchableOpacity>)
                	:
                	<Text>All questions were answered</Text>

                }
                </View>

	        
			</View>

			)
	}
}

const styles=StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center',
	},

	title: {
		paddingTop: 10,
		color: '#472E3E',
		fontWeight: 'bold',
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 30
		
	},
	    subtitle: {
        paddingTop: 10,
        color: '#472E3E',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 15
        
    },
	counter: {
		color: '#7C777A',
		fontSize: 15,
		marginBottom: 20



	},
	navBtn: {

		backgroundColor: '#7C777A',
		borderRadius: 7,
		padding: 15,
		marginBottom: 5,
		width: 150		

	},
	btnText: {
		color: '#472E3E', 
		textAlign: 'center', 
		fontWeight: 'bold'
	},

	question: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 20

	},

	btnText: {
		color: '#fff',
		textAlign: 'center'

	},

	submitBtn: {

		backgroundColor: '#472E3E',
		borderRadius: 7,
		padding: 15,
		margin: 5,
		width: 150

	}

})
