import { initializeApp, getApp, getApps, } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB67slNUQx8bjIKuxAsSivhycZyfsQj8oY",
    authDomain: "ordertracker-74c19.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "ordertracker-74c19",
    storageBucket: "ordertracker-74c19.firebasestorage.app",
    messagingSenderId: "397506173526",
    appId: "1:397506173526:web:0574a2e8715d0b30c279f7",
    measurementId: "G-5RH1QTNSHH"
  };

const app = getApps.length > 0 ? getApp() :  initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage}