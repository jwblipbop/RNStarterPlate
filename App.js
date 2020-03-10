import * as React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import Main from './src'
import configureStore from './src/stores/configureStore'

const store = configureStore()

const App = () => {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	)
}

export default App
