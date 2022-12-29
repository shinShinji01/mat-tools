import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { errorHandler } from './firebase-helpers';

const firebaseConfig = {
  apiKey: 'AIzaSyAYdfNbbKuINdued1i3H2KXqW_deRfjaiM',
  authDomain: 'mat-tools-dfd27.firebaseapp.com',
  projectId: 'mat-tools-dfd27',
  storageBucket: 'mat-tools-dfd27.appspot.com',
  messagingSenderId: '726102699168',
  appId: '1:726102699168:web:43550cc3361cf0f105adc5',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);

// Create new user with Email and Password
export const signUpUserEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
  } catch (error: any) {
    errorHandler(error);
  }
};

// Sign in with Email and Password
export const signInUserEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
  } catch (error: any) {
    errorHandler(error);
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    const res = await signOut(auth);
    console.log(res);
  } catch (error: any) {
    errorHandler(error);
  }
};

// Get current login state and user
export const onUserStateChanged = (updateState: (data: boolean) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // const uid = user.uid;
      console.log('fine');
      updateState(true);
    } else {
      console.log('herovo');
      updateState(false);
    }
  });
};
