import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBi1j02grd2e-cKmnKPWDobKdAQt65Jwcs",
  authDomain: "random-movies-f0184.firebaseapp.com",
  databaseURL: "https://random-movies-f0184-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "random-movies-f0184",
  storageBucket: "random-movies-f0184.appspot.com",
  messagingSenderId: "329559434233",
  appId: "1:329559434233:web:2f47e931f1703a2635d328"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const dataMovies = ref(db, 'items');

export default dataMovies;