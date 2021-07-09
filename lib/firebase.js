import firebase from "firebase/app";
import 'firebase/auth'


const API_KEY = process.env.NEXT_PUBLIC_apiKey;
const authDomain = process.env.NEXT_PUBLIC_authDomain;
const projectId = process.env.NEXT_PUBLIC_projectId;


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