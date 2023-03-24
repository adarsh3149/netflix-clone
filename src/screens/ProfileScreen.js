import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'
import { selectUser } from '../features/userSlice'
import './ProfileScreen.css'
import { auth } from '../firebase'
import PlanScreen from './PlanScreen'
function ProfileScreen() {
    const user = useSelector(selectUser)
    
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profilescreen_body">
            <h1>Edit Profile</h1>
            <div className="profilescreen_info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profilescreen_details">
                    <h2>{user.email}</h2>
                    <div className="profilescreen_plans">
                            <h3>Plans</h3>
                            <PlanScreen/>
                        <button onClick={()=> auth.signOut()} className='profilescreen_signout'>Sign Out</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default  ProfileScreen