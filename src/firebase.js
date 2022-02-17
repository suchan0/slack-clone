// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDUbwGNm4WKR09Qcw4EpGRI_b3tgfy86b4',
  authDomain: 'slack-clone-yt-4cf18.firebaseapp.com',
  projectId: 'slack-clone-yt-4cf18',
  storageBucket: 'slack-clone-yt-4cf18.appspot.com',
  messagingSenderId: '829578557277',
  appId: '1:829578557277:web:84bb2adae68e713186dab4',
  measurementId: 'G-XE17F38SPX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
