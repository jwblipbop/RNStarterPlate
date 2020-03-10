import * as React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../styles'

function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{color: Colors.SECONDARY}}>Home Screen</Text>
		</View>
	)
}

export default HomeScreen
