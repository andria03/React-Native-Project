import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBkawcAunGi64N4hP3uT0sH1EMdnQ_9vLo",
  authDomain: "machinetest-c7b0e.firebaseapp.com",
  projectId: "machinetest-c7b0e",
  storageBucket: "machinetest-c7b0e.appspot.com",
  messagingSenderId: "500662121465",
  appId: "1:500662121465:web:47e06d28e503abfd4cc328"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
