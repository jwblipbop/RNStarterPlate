import { all } from 'redux-saga/effects'
import { watchExampleSaga } from './ExampleSagas'

export default function* rootSaga() {
	yield all([ watchExampleSaga() ])
}
