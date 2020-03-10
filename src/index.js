import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './navigators/AppNavigator'

export default class AppStack extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		)
	}
}
