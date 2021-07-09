import firebase from "firebase/app";
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp(
        {
            apiKey: "AIzaSyD3Cfl96n7K9qd4ZHRBxM5NQAgk2iz9IzM",
            authDomain: "hellonode-23652.firebaseapp.com",
            projectId: "hellonode-23652",
            storageBucket: "hellonode-23652.appspot.com",
            messagingSenderId: "1013952898702",
            appId: "1:1013952898702:web:f58ad2eef295fc0fbbcbdf",
            measurementId: "G-GQ70D7TDJS"
        }
    )
}

export default firebase