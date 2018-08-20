import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCRiBk9zlUyYDrp2Vuto875EoEG05-qrPg",
    authDomain: "portfolio-aa920.firebaseapp.com",
    databaseURL: "https://portfolio-aa920.firebaseio.com",
    projectId: "portfolio-aa920",
    storageBucket: "portfolio-aa920.appspot.com",
    messagingSenderId: "573328417218"
};
firebase.initializeApp(config);
export default firebase;