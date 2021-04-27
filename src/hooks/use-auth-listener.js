import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";
import { firebase } from "../lib/firebase";
export default function useAuthListener() {
  const [user, setUser] = useState(localStorage.getItem("authUser"));
  //   const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    //   we are listening for a change
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      //   we have a user... therefore we can store the user in localstorage
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
      } else {
        // we don't have an authUser, therefore we clear the local storage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
  }, [firebase]);
  return { user };
}
