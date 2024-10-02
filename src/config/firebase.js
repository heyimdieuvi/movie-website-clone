// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzY-LZ_KxLaYAEpnp10c_rsTDbNCWheVA",
  authDomain: "movie-f42dd.firebaseapp.com",
  projectId: "movie-f42dd",
  storageBucket: "movie-f42dd.appspot.com",
  messagingSenderId: "306211106005",
  appId: "1:306211106005:web:40d612944474dc49be865c",
  measurementId: "G-PF5107SQLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the storage service
const storage = getStorage(app);

export { storage };
