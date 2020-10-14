import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByeW0fRCQlZRpyfOiBOdjy9dMFcZiTRe4",
    authDomain: "whatsapp-clone-e68e0.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-e68e0.firebaseio.com",
    projectId: "whatsapp-clone-e68e0",
    storageBucket: "whatsapp-clone-e68e0.appspot.com",
    messagingSenderId: "451451263570",
    appId: "1:451451263570:web:28ca40adbbeb3f49441d8b",
    measurementId: "G-1VTQDEBQB1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
