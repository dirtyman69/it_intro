import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvCiH8NO0a50MAy0uUAldzzQxuimN7gnY",
  authDomain: "it-intro-67781.firebaseapp.com",
  projectId: "it-intro-67781",
  storageBucket: "it-intro-67781.appspot.com",
  messagingSenderId: "293868606835",
  appId: "1:293868606835:web:846b18e00ac198aaaca106",
  measurementId: "G-KPBJTV4DTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
