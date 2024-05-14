import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
//import axios from "axios";


 
export const  AuthContext = createContext();
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

 
const AuthProviders = ({children}) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = ( email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = ( email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    //update user profile
    const updateUserProfile=(name,image,email)=>{
        return updateProfile(auth.currentUser, {
           displayName: name,
            photoURL: image,
            email:email
         })
       }



    const googleLogIn =()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const GithubLogIn =()=>{
        setLoading(true);
        return signInWithPopup(auth,providerGithub);
    }


    const LogOut = ()=>{
        setUser(' ')
      setLoading(true);
      return signOut(auth);
   } 


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            //const userEmail = currentUser?.email || user?.email;
            // const loggedUser = {
            //     email: userEmail
            // };
            setUser(currentUser);
            console.log('user', currentUser);
            setLoading(false);

            //if user exists then issue a token
        //     if(currentUser){
               
        //         axios.post('http://localhost:4000/jwt', loggedUser, {
        //             withCredentials: true
        //         })
        //         .then(res => {
        //             console.log('token response', res.data);
        //         })

        //     }
        //     else{
        //         axios.post('http://localhost:4000/logout', loggedUser, {
        //             withCredentials: true
        //         })
        //         .then(res => {
        //             console.log( res.data);
        //         })
        //     }

         
    }
    );
        return () =>{
            return unsubscribe();
        }
    }, [])
    
    const authInfo = {
             user,
             loading,
             createUser,
             logIn,
             LogOut,
             googleLogIn,
             GithubLogIn,
             updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;