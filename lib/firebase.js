import firebase from "firebase/app";
import 'firebase/auth'


const API_KEY = process.env.NEXT_PUBLIC_apiKey;
console.log(API_KEY);
const authDomain = process.env.NEXT_PUBLIC_authDomain;
console.log(authDomain);
const projectId = process.env.NEXT_PUBLIC_projectId;
console.log(projectId);



// const API_KEY = "AIzaSyD3Cfl96n7K9qd4ZHRBxM5NQAgk2iz9IzM";
// const authDomain = "hellonode-23652.firebaseapp.com";
// const projectId = "hellonode-23652";


if (!firebase.apps.length) {
    firebase.initializeApp(
        {
            apiKey: API_KEY,
            authDomain: authDomain,
            projectId: projectId,
        }
    )
}



export default firebase