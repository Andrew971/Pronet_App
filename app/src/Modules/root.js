import {combineReducers } from 'redux'
import { all } from 'redux-saga/effects';


//List of Reducer
import {Reducer} from './Website/Controllers';





//List of Watchers
import {Watcher} from './Website/Controllers/saga';


export function rootReducer(asyncReducers) {
  return combineReducers({
      state: Reducer,

      ...asyncReducers
  });
}

export function* rootSaga (){

  yield all([
    Watcher(),

  ])

}
