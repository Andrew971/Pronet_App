import {combineReducers } from 'redux'
import { all } from 'redux-saga/effects';


//List of Reducer
import {UIReducer} from '../Containers/reducer';
import {WebsiteReducer} from '../Website/reducer';
import {AppBarReducer} from '../AppBar/reducer';





//List of Watchers
import {Watcher} from '../Website/saga';


export function rootReducer(asyncReducers) {
  return combineReducers({
      UI: UIReducer,
      Website: WebsiteReducer,
      AppBar:AppBarReducer,
      ...asyncReducers
  });
}

export function* rootSaga (){

  yield all([
    Watcher(),

  ])

}
