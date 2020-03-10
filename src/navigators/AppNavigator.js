import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { Typography } from '../styles'

const Stack = createStackNavigator()

export const AppNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{
					title: 'Overview',
					headerTitleStyle: {
						fontWeight: Typography.FONT_WEIGHT_BOLD,
					},
					headerTitleAlign: 'center',
				}}
			/>
		</Stack.Navigator>
	)
}
