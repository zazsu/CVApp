import firebase from 'firebase/app';
import 'firebase/auth';

//firebase configuration information
var config = {
  apiKey: "AIzaSyAutZLhFT8qkWeos_dplnaFA0Oa9Dp8ssA",
  authDomain: "cv-app-ebf5d.firebaseapp.com",
  projectId: "cv-app-ebf5d",
  storageBucket: "cv-app-ebf5d.appspot.com",
  messagingSenderId: "1042630656306",
  appId: "1:1042630656306:web:f6d198fc5f9c256ea4d72b"
};

firebase.initializeApp(config);

//return a user if one is authenticated
//else return null
export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if(user) {
        resolve(user);
        
      } else {
        resolve(null);
      }
      unsubscribe();
    })
  })
}

//login a user with given credentials
export async function loginUser(email: string, password: string) {
  try {
    const res= await firebase.auth().signInWithEmailAndPassword(email, password)
    return res
  } catch(error) {
    //TODO proper error handling
    alert(error);
    return false
  }  
}

//sign up a user with given credentials
export async function registerUser(email: string, password: string) {
  try {
    const res= await firebase.auth().createUserWithEmailAndPassword(email, password);
    return true
  } catch(error) {
    //TODO proper error handling
    alert(error);
    return false
  }  
} 

//logout user
export async function logoutUser() { 

    try {
      const res= await firebase.auth().signOut();
      return true
    } catch(error) {
      //TODO proper error handling
      alert(error);
      return false
    } 
}

