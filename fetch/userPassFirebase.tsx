import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const createNewUser = async (email:string, password:string): Promise <any> =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    }



