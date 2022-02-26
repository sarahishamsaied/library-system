import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../Firebase";
const UserAuthContext = createContext()
export function UserAuthContextProvider({children}){
    const [user,setUser] = useState({})
    const [noOfUsers,setNoOfUsers] = useState(0)
    function signUp(email,password){
        setNoOfUsers(noOfUsers+1)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function signIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        console.log("signed out!")
        return signOut(auth);
    }
    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleAuthProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("Auth",currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);
    return <UserAuthContext.Provider value = {{user,signUp,signIn,logout,googleSignIn}}>
        {children}
    </UserAuthContext.Provider>
}
export function useUserAuth(){
    return useContext(UserAuthContext)
}