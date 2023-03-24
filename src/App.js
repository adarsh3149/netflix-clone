import React, { useEffect } from "react"
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import "@stripe/stripe-js"
// import SignInScreen from "./screens/SignInScreen";
// import SignInScreen from "./screens/SignInScreen"
// import PaymentForm from "./Components/PaymentForm";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (

    <>

      <div className="App">

        {!user ? (
          <>
          <LoginScreen/>

          </>

        ) : (
          <Routes>
          <Route path="/profile" element={<ProfileScreen></ProfileScreen>}>
            </Route>
            <Route exact path="/" element={<HomeScreen></HomeScreen>} />
            




          </Routes>
        )}
      </div>


    </>



  );
}

export default App;
