
const firebaseConfig = {
  apiKey: "AIzaSyBvtQxXtJHRCoh9Ng8OW7X0zCL9xDfdO1A",
  authDomain: "attendance-31f8f.firebaseapp.com",
  databaseURL: "https://attendance-31f8f-default-rtdb.firebaseio.com",
  projectId: "attendance-31f8f",
  storageBucket: "attendance-31f8f.appspot.com",
  messagingSenderId: "340110116027",
  appId: "1:340110116027:web:0b93379b9c9d39e947559e",
  measurementId: "G-D4Y73J6YTE"
};

// Initialize Firebase 
if(!firebase.apps.length){ 
  firebase.initializeApp(firebaseConfig);
 } 
 export default firebase.database()