import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref as refImage, uploadBytes, getDownloadURL } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB6EgBYPsyjl6r42f_j8Qju-z8sClNHKG8",
  authDomain: "rafepev.firebaseapp.com",
  databaseURL: "https://rafepev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rafepev",
  storageBucket: "rafepev.appspot.com",
  messagingSenderId: "902571787216",
  appId: "1:902571787216:web:5e0e610bf40c774315efd5"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { storage, refImage, uploadBytes, getDownloadURL };