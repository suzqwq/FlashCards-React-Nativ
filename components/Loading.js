import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Loading(props){
	const { title } = props

	return(
		<View styles={styles.container}><Text style={styles.txt} >{window.setTimeout(()=>{

			props.navigation.navigate('Home', {title})
		}, 300)}</Text>
		<Text style={styles.loading}>
		Loading.....
		</Text>
		</View>

		)
}

const styles=StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	txt: {
		fontSize: 20,
		textAlign: 'center',
		color: '#fff'
	},
	loading: {
		fontSize: 20,
		textAlign: 'center',
		
	}
})