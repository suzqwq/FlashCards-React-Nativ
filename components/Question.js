import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Animated } from 'react-native'
import {
	clearLocalNotification,
	setLocalNotification
} from '../utils/helpers'



export default class Question extends Component{

	state = {
            showAnswer: false
     }

    toggleAnswer = () => {

    	if(!this.state.showAnswer){
    		 this.setState({
        	showAnswer: true
      	  })

    	}
    	else {
    		this.setState({
    			showAnswer: false
    		})
    	} 
        
    }

	viewAnswer=()=>{
		const {index} = this.props
		const { showAnswer } =this.state
		const empty=''
	
		if(showAnswer){

			return this.props.cards[index].answer
		}
		else
			return empty
	}

	render(){

	    const { index, cards, handleAnswer } = this.props
	    const { showAnswer }=this.state
	    const empty=''

	    return(
	        <View style={styles.container}>
	            <Text style={styles.question}>{cards[index].question}</Text>
	            <TouchableOpacity
	             onPress={this.toggleAnswer}
	             style={styles.submitBtn}
	            >
	            <Text style={{color: '#fff', textAlign: 'center'}}>{showAnswer ? `Hide` : `Show`} Answer</Text>
	            </TouchableOpacity>
	            <Text style={{color: '#000'}}>{this.viewAnswer(
	            	)}</Text>
	            <View style={styles.minBtns}>
		            <TouchableOpacity
		             style={[styles.btn, {backgroundColor: '#8FDD85'}]}
		             onPress={() => handleAnswer('correct')}
		            >
		            	<Text style={{textAlign:'center', color: '#fff'}}>Correct</Text>
		            </TouchableOpacity>
		            <TouchableOpacity
		            style={[styles.btn, {backgroundColor: '#E06266'}]}
		             onPress={() => handleAnswer('incorrect')}
		            >
		                <Text style={{textAlign:'center', color: '#fff'}}>Incorrect</Text>
		            </TouchableOpacity>
	            </View>
	             
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

	question: {
		textAlign: 'center',
		fontSize: 20,
		paddingBottom: 20

	},

	btnText: {
		color: '#fff',
		textAlign: 'center'

	},
	minBtns: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		margin: 0

	},
	btn: {
		padding: 10,
		marginLeft: 5,
		width: 90,
		height: 50

	},

	submitBtn: {

		backgroundColor: '#472E3E',
		borderRadius: 7,
		padding: 15,
		width: 150

	}

})
