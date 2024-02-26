import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, RecaptchaVerifier, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB1lN52OD7_opci_0t9J5lWAC4c9DanH44',
  authDomain: 'spotify-2b0e7.firebaseapp.com',
  projectId: 'spotify-2b0e7',
  storageBucket: 'spotify-2b0e7.appspot.com',
  messagingSenderId: '804472053007',
  appId: '1:804472053007:web:c0f53bd9a1b1a9320cf27a'
};

const app = initializeApp(firebaseConfig);
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();



export async function SignWithGoogleAccount() {
  const authenticate = await signInWithPopup(auth, GoogleProvider);
  return {
    accessToken: authenticate.user.accessToken,
    name: authenticate.user.displayName,
    email: authenticate.user.email,
    imageUrl: authenticate.user.photoURL,
    isVerified : authenticate.user.emailVerified
  };
}


export async function SignInWithEmailAndPassword({email, password}) {
  const authenticate = await SignInWithEmailAndPassword(auth, email, password);
  return {
    accessToken: authenticate.user.accessToken,
    name: authenticate.user.displayName,
    email: authenticate.user.email,
    imageUrl: authenticate.user.photoURL,
    isVerified: authenticate.user.emailVerified
  };
}

export async function Captcha() {
  window.recaptchaVerifier = new RecaptchaVerifier('sign-up-button', {
    'size': 'invisible',
    'callback': (response) => {
      SignInWithPhoneNumber();
    }
  }, auth);
}