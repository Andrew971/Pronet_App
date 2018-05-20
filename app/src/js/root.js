import {combineReducers } from 'redux'
import { all } from 'redux-saga/effects';


//List of Reducer
import {Reducer} from '../Website/Controllers';
import {AppBarReducer} from '../AppBar/reducer';





//List of Watchers
import {Watcher} from '../Website/Controllers/saga';


export function rootReducer(asyncReducers) {
  return combineReducers({
      state: Reducer,
      AppBar:AppBarReducer,
      ...asyncReducers
  });
}

export function* rootSaga (){

  yield all([
    Watcher(),

  ])

}
