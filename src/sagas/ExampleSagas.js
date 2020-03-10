import { put, takeEvery, takeLatest } from 'redux-saga/effects'

function* getExample() {
	console.log('Hello Saga!')
}

export function* watchExampleSaga() {
	// yield takeLatest(SAMPLE.START, getExample)
	yield takeLatest('SAMPLE_START', getExample)
}
