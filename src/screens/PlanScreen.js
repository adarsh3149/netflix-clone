import React, { useEffect, useState } from 'react'
import firebase from "../firebase"
import './PlanScreen.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
// import {  useNavigate } from 'react-router-dom'
import "@stripe/stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import { redirect } from 'react-router-dom'
// import { useStripe } from '@stripe/react-stripe-js'
// import { Navigate } from 'react-router-dom'

const getplanID = () => {
    let id = localStorage.getItem("id");
    if (id) {
        return JSON.parse(localStorage.getItem("id"))
    }
    else {
        return ""
    }
}

function PlanScreen() {
    // const navigate = useNavigate()


    const ref = firebase.firestore().collection("products")
    console.log(ref)
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const user = useSelector(selectUser)
    const [id, setid] = useState(getplanID())


    useEffect(() => {
        localStorage.setItem("id", JSON.stringify(id))
    }, [id])
    function getProduc() {
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setData(items)
            setLoader(false)
        })

    }

    useEffect(() => {
        getProduc()
    }, [data.length])

    

    let stripePromise
    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe("pk_test_51MP2VUSBoDIhdxvlg9V7d41wFFpYpXyWiqu45HOAjrcv1iqYIJYAhuW4setA9JmpmvEQlSAMzx4xzxM4FXiBxSPu00S2ubjpue")
        }
        return stripePromise;
    }

    

    const redirectToCheckout = async (id) => {


        console.log(id)
        const stripe = await getStripe()

        const { error } = await stripe.redirectToCheckout({

            mode: "subscription",

            lineItems: [{ price: `${id}`, quantity: 1 },
            ],

            successUrl:window.location.origin,

            cancelUrl: window.location.origin,

        });

        if (error) {

            console.warn("Error:", error)

        }

    };

    function getID(id) {
        setid(id)
    }
    return (
        <div className='planScreen'>
            {loader === false && (data.map((dev) => (
                <div className='planScreen_plans' key={dev.id}>
                    <div className="planScreen_info">
                        <h5>{dev.name}</h5>
                        <h6>{dev.price}</h6>
                    </div>

                    <button onClick={() => {
                        redirectToCheckout(dev.price_id);
                        getID(dev.id)
                    }}>
                        {id === dev.id ? "Subscribed" : "Subscribe"}

                    </button>
                </div>
            )))}
        </div>
    )
}

export default PlanScreen
