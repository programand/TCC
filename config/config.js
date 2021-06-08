 import firebase from 'firebase'; 
 
 var firebaseConfig = {
    apiKey: "AIzaSyDQefsPjz6CGqTlNy01PwK8IjkPFzwl3GM",
    authDomain: "general-service-g1.firebaseapp.com",
    projectId: "general-service-g1",
    storageBucket: "general-service-g1.appspot.com",
    messagingSenderId: "767864539939",
    appId: "1:767864539939:web:0dd2fa9c2a66e077655a96"
  };

 let app = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore() //app.database();