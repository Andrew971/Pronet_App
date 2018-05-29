const firebase = require('../firebase')
const db = firebase.database();
const ref = db.ref();
const websiteRef = db.ref("websiteContent");
websiteRef.once("value", function(snapshot) {
  console.log(snapshot.val());
});


function Add (type, payload, cb) {
  websiteRef.on("value", (snapshot)=> {
    let content = snapshot.val();
    if(content === null){
      websiteRef.child(type).set(payload)
    }
    else if(content[type] === undefined){
      websiteRef.child(type).set(payload)
    }else{
      const newField = content[type].field.concat(payload.field)
      const contentFieldRef = db.ref(`websiteContent/${type}`);
      contentFieldRef.child('field').set(newField)
    }
  },  (errorObject)=> {
    console.log("The read failed: " + errorObject.code);
  })
cb({status:true})

}


module.exports = {Add}
