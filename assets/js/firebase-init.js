
// Initialize Firebase

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const database = firebase.database();

// Make storage and database available globally (optional)
window.firebaseStorage = storage;
window.firebaseDatabase = database;