import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

function Score(props){

    const { cardLen, correct, incorrect, restart } = props
    console.log('from score', props)

    return(
        <View style={styles.container}>
            <Text style={styles.report}>Correct: {correct}</Text>
            <Text style={styles.report}>Incorrect: {incorrect}</Text>
            <Text style={[styles.report, {marginBottom: 10}]}>Score: {Math.round((correct/cardLen)*100)}%</Text>
            <TouchableOpacity
            style={styles.submitBtn}
             onPress={() => props.navigation.navigate('Deck')}
            >
                <Text style={{color: '#fff', textAlign: 'center'}}>Back to Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity
             style={styles.resBtn}
             onPress={restart}
            >
                <Text style={{textAlign: 'center'}}>Restart Quiz</Text>
            </TouchableOpacity>
        </View>
    )
}



export default withNavigation(Score)

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       justifyContent: 'center'

    },

    submitBtn: {
        backgroundColor: '#472E3E',
        borderRadius: 7,
        padding: 15,
        margin: 5,
        width: 150

    },
      resBtn: {
        borderColor: '#472E3E',
        borderWidth: 1,
        borderRadius: 7,
        padding: 15,
        margin: 5,
        width: 150

    },
    report: {
        fontSize: 20,
        paddingBottom: 5,
        color: '#2D2A2C'
    }
})