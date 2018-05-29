import {takeLatest,all, call,put} from "redux-saga/effects";
import axios from "axios";
import {apiURL} from "../js/api";
// import firebase from 'firebase'
// import firebaseInit from "../js/firebase";
//
// const db = firebase.database();
// // const ref = db.ref();
// const websiteRef = db.ref("websiteContent");
// websiteRef.once("value", function(snapshot) {
//   console.log(snapshot.val());
// });

 function* CreateContent(action) {
   console.log(action);
  try {
    const res = yield call(axios.post, apiURL+'cms/content', action.payload);
    console.log(res.data);
    (res.data)? yield put({type:'MODAL_HIDE'}):console.log('false');
  } catch (e) {
    console.log('error network');
  }
}


 function* ContentList(action) {
  // try {
  //
  // yield console.log(action)
  //
  // } catch (e) {
  //   console.log('error network');
  // }
}



export function* Watcher() {
  yield all([
    takeLatest("NEW_CONTENT_REQUESTED", CreateContent),
    takeLatest("CONTENT_LIST_REQUESTED", ContentList)
  ]);
}
