import firebase from 'firebase';
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDEkSkzyUdKhfTVfvclXNrEE2DxhNekBik",
    authDomain: "todo-productivity-app.firebaseapp.com",
    databaseURL: "https://todo-productivity-app.firebaseio.com",
    projectId: "todo-productivity-app",
    storageBucket: "todo-productivity-app.appspot.com",
    messagingSenderId: "722636973192",
    appId: "1:722636973192:web:e256dbff05f5ecd0e2eb3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;