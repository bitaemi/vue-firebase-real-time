import firebase from 'firebase';
import firestore from 'firebase/firestore';

//initialize Firebase
var config = {
    apiKey: "AIzaSyCOUsS6YQrqcFLNWzSV-vzq-fNTVjmir5I",
    authDomain: "ninja-smooties-97572.firebaseapp.com",
    databaseURL: "https://ninja-smooties-97572.firebaseio.com",
    projectId: "ninja-smooties-97572",
    storageBucket: "ninja-smooties-97572.appspot.com",
    messagingSenderId: "291122468448"
  };

const firebaseApp = firebase.initializeApp(config);

// firebaseApp.firestore().settings({timestampsInSnapshot: true});

export default firebaseApp.firestore();