import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDdq8V-t1pybbq7NWi3OeVZ1A1nsbdxIh8",
  authDomain: "twitter-b219c.firebaseapp.com",
  projectId: "twitter-b219c",
  storageBucket: "twitter-b219c.appspot.com",
  messagingSenderId: "832936897312",
  appId: "1:832936897312:web:9a97e356b52f1eb7088545",
};

const app = initializeApp(firebaseConfig);
export const firbaseauth = getAuth(app);
