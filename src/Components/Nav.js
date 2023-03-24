import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import './Nav.css'
import './netflix.png'
const Nav = () => {
    const [show,setShow] = useState(false)
    const navigate = useNavigate()

    const transitionNavBar = () =>{
        if(window.scrollY>0){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && `nav_black`} `}>
            <div className="nav_content">
                <img
                onClick={()=>navigate("/")}
                 className='nav_logo' src={require("./netflix.png")} alt='#' />
                <img
                 onClick={()=> navigate("/profile")}
                className='nav_avatar' src={require("./netflix-avatar.png")} alt="#" />
            </div>
            

        </div>
    )
}

export default Nav