import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE3F8l9LtmlNaL1tmP5bxGxCI-3m1KbgI",
  authDomain: "apple-site-project.firebaseapp.com",
  databaseURL:"https://apple-site-project-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "apple-site-project",
  storageBucket: "apple-site-project.appspot.com",
  messagingSenderId: "554946409310",
  appId: "1:554946409310:web:b5ac1c39c7ab23104915cf"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
