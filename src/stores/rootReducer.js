import { combineReducers } from 'redux'
import counter from './exampleFolder/ExampleReducer'

const rootReducer = combineReducers({
	counter,
})

export default rootReducer