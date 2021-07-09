import firebase from "firebase/app";
import 'firebase/auth'

debugger
const API_KEY = process.env.apiKey;
const authDomain = process.env.authDomain;
const projectId = process.env.projectId;


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