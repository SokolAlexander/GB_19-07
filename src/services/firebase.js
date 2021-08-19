import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBVpPUPIUVpeAy9mgowfweS66oc9TuGMVk",
  authDomain: "gb16-08.firebaseapp.com",
  projectId: "gb16-08",
  storageBucket: "gb16-08.appspot.com",
  messagingSenderId: "531507202698",
  appId: "1:531507202698:web:d351dc9e3627ee62e73b73",
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.database();
export const auth = firebase.auth();