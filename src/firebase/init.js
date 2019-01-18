import firebase from 'firebase';
import firestore from 'firebase/firestore';

//initialize Firebase

var config = {};
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({timestampsInSnapshot: true});
//export firestore database