import firebase from 'firebase';
import 'firebase/firestore'

const {apiKey, authDomain, 
    databaseURL, storageBucket,
    messagingSenderId, appId} = process.env;

const firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId: "todo-productivity-app",
    storageBucket,
    messagingSenderId,
    appId
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;