import React, { useRef } from 'react'
import { auth } from '../firebase'
import './SignUpScreen.css'
const SignUpScreen = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })

    }
    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign Up</h1>
                <input ref={emailRef} placeholder='Email' type="email" />
                <input ref={passwordRef} placeholder='password' type="password" />
                <button type='submit' onClick={register}>
                    Sign Up
                </button>

                <h4>
                    <span className="signupScreen_grey"> Already A Customer?</span>
                    <span className="signupScreen_link" onClick={signIn}>  SignIn Now </span>
                </h4>

            </form>
        </div>
    )

}
export default SignUpScreen;
