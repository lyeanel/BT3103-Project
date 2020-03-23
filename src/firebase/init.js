import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const configOptions = {
    apiKey: "AIzaSyCgLVju_UBGx9ny3iZ1G5ZpkAn8rVLCFFY",
    authDomain: "bt3103-forum.firebaseapp.com",
    databaseURL: "https://bt3103-forum.firebaseio.com",
    projectId: "bt3103-forum",
    storageBucket: "bt3103-forum.appspot.com",
    messagingSenderId: "390281398455",
    appId: "1:390281398455:web:bfbc7b251808271ddc2532",
    measurementId: "G-1EXGWCK77H"
  };

const firebaseApp = firebase.initializeApp(configOptions);

const db= firebase.firestore();

export default firebaseApp.firestore();