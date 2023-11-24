import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAQtHSL-nJa0NeU3XlntF8I6Eo7ziINtZc",
    authDomain: "cropedi-a91e6.firebaseapp.com",
    projectId: "cropedi-a91e6",
    storageBucket: "cropedi-a91e6.appspot.com",
    messagingSenderId: "95849737144",
    appId: "1:95849737144:web:44cb8d17b0d8f41ef33d4d",
    databaseURL:"https://cropedi-a91e6-default-rtdb.firebaseio.com/"
  };
  
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDhHiDBHUBw6beqqs_3E5I2U_0y2bAFCdk",
//   authDomain: "database1-9a152.firebaseapp.com",
//   projectId: "database1-9a152",
//   storageBucket: "database1-9a152.appspot.com",
//   messagingSenderId: "628588049453",
//   appId: "1:628588049453:web:1983423abc26c688d0f4a4",
//   measurementId: "G-QR37Y0ERKF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);