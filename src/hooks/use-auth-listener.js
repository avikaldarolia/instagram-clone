import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";
export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    //   we are listening for a change
    firebase.auth().onAuthStateChanged((authUser) => {
      //   we have a user... therefore we can store the user in localstorage
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // we don't have an authUser, therefore we clear the local storage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
  }, [firebase]);
  return { user };
}
