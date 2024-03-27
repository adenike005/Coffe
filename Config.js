import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDKUM1M0W6fjMFAZVvcmEBrNeX1T_9_NUI",
  authDomain: "test-c4e73.firebaseapp.com",
  projectId: "test-c4e73",
  storageBucket: "test-c4e73.appspot.com",
  messagingSenderId: "111672645557",
  appId: "1:111672645557:web:a62db885d1e8bbbb86abfc",
  measurementId: "G-YQ9WJKFBE7"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };