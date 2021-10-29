import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegi = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Should be at least 6 characters long");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });

    console.log(email, password);
  };

  // Toggle handler function
  const handleToggle = (e) => {
    setIsLoggedIn(e.target.checked);
  };

  const signInUsingGoogle = () => {
    
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    handleEmailChange,
    handlePassChange,
    handleRegi,
    isLoading,
    isLoggedIn,
    handleToggle,
    signInUsingGoogle,
    logOut,
    error,
  };
};

export default useFirebase;
