import { func } from "prop-types";
import { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);
  useEffect(() => {
    async function getUserObjByUserId() {
      setActiveUser(response);
    }

    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);
  return <div></div>;
}
