import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import Main from "./Main";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Route = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return <>{user ? <Main /> : <Auth />}</>;
};

export default Route;
