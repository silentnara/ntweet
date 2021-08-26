import { authService } from "fbase";
import { useEffect, useState } from "react";
import { AppRouter } from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setInit(true);
    });
  }, []);
  return (
    <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}</>
  );
}

export default App;
