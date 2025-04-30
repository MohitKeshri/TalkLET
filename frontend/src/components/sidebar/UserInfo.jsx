import React from 'react'
import { useAuthContext } from '../../context/AuthContext'

const UserInfo = () => {
   const {authUser}= useAuthContext();
  return (
    
    <div className="w-8 rounded-full mx-16 flex flex-col items-center justify-center ">
            <img src={authUser.profilePic} alt="user avatar" />
            <p className='text-black text-sm'>{authUser.username}</p>
          </div>
  )
}

export default UserInfo