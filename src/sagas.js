
import { takeEvery, takeLatest,put, call, take,fork } from 'redux-saga/effects';
// import {  } from 'redux-saga'

export const delay = ms => new Promise((resolve) => setTimeout(resolve, ms));

function* incrementAsync(){
  // 延迟1秒执行
    yield call(delay, 1000);
    yield put({type:'increment'})
}
export default function* Mysaga(){
  yield takeEvery('increment-async', incrementAsync)
};