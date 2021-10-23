import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD31woUs9qDEYJe9sY3CRH-f09KEaWp6Gw",
  authDomain: "complaint-form-da14a.firebaseapp.com",
  databaseURL: "https://complaint-form-da14a-default-rtdb.firebaseio.com",
  projectId: "complaint-form-da14a",
  storageBucket: "complaint-form-da14a.appspot.com",
  messagingSenderId: "170692198900",
  appId: "1:170692198900:web:7d2b869fc9644e5ba479a1",
  measurementId: "G-7PCSXT3KRK"

 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

