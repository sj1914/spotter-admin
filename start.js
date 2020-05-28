const app = require("./app");
const firebase = require("firebase/app");
const dotenv = require("dotenv");
dotenv.config();

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "spotter-1.firebaseapp.com",
  databaseURL: "https://spotter-1.firebaseio.com",
  projectId: "spotter-1",
  storageBucket: "spotter-1.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_UD,
};

firebase.initializeApp(firebaseConfig);

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
