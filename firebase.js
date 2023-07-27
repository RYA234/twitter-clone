
import {initializeApp,getApp,getApps} from "@firebase/app";
import {getFirestore, getFireStore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage";
import { get } from "http";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();
const db = getFirestore(app);
const storage = getStorage(app);
export{app,db, storage}