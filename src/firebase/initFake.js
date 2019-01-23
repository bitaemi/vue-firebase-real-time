import firebase from 'firebase';
import firestore from 'firebase/firestore';

//initialize Firebase
var config = {
    apiKey: "shygfhfghjgfh-vssh-fgdgffghI",
    authDomain: "myprojname-id.firebaseapp.com",
    databaseURL: "https://myprojname-id.firebaseio.com",
    projectId: "myprojname-id",
    storageBucket: "myprojname-id.appspot.com",
    messagingSenderId: "46542654756373"
  };

const firebaseApp = firebase.initializeApp(config);

// firebaseApp.firestore().settings({timestampsInSnapshot: true});

export default firebaseApp.firestore();