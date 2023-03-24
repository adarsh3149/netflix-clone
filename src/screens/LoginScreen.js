import React, { useState } from 'react'
// import { auth } from '../firebase'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

const LoginScreen = () => {
  const [signIn, setsignIn] = useState(false)


  return (
    <div className="loginScreen ">
      <div className="loginscreen_background">
        <img className='loginscreen_logo'
          src={require("./netflix2.png")} alt='#' />
        <button  className='loginscreen_button'
        onClick={() => setsignIn(true)}>
          Sign In
        </button>
      </div>
      <div className="loginscreen_gradient" />

      <div className="loginscreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginscreen_input">
              <form>
                
                <button onClick={() => setsignIn(true)} className='loginscreen_getstarted'>
                  GET Started
                </button>
              </form>

            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default LoginScreen