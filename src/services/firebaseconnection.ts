import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBD9ZPMQbwtUy8hrXc8kcCpGi-a2Q1_TLc",
  authDomain: "tarefasmais-46243.firebaseapp.com",
  projectId: "tarefasmais-46243",
  storageBucket: "tarefasmais-46243.firebasestorage.app",
  messagingSenderId: "333889472809",
  appId: "1:333889472809:web:eeb65a2e8446111d290f38"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db};