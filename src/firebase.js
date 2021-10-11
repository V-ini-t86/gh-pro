import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCK2cxU-o4UT00cI9pyAKcITN93b27Jsh0",
  authDomain: "bunker-cart.firebaseapp.com",
  projectId: "bunker-cart",
  storageBucket: "bunker-cart.appspot.com",
  messagingSenderId: "769028615372",
  appId: "1:769028615372:web:bc8cb51c68e5ae52b6e669",
  measurementId: "G-RWRYF48MEG",
}; 

firebase.initializeApp(firebaseConfig);
const storage = getStorage();
const auth = getAuth();
// const storage = firebase.storage();
const provider = new GoogleAuthProvider();
const db = getFirestore();
export default firebase;
export { auth, provider, db,storage };
