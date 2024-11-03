import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'


// check token ກວດສອບເວລາການໃຊ້ງານຂອງ Token

const isTokenExpired = (token) => {
    if(!token) return true;
    try {
        const decode = jwtDecode(token)
        const currentTime = Date.now() / 10000;

        return decode.exp < currentTime;
    } catch (error) {
        console.log(error)
        return true
    }
}

const privateRoute = ({children}) => {
    const userData = JSON.parse(localStorage.getItem("USER_DATA"))
    const accessToken = userData?.accessToken
    ;
    const isAuthenticted = accessToken && !isTokenExpired(accessToken)
    // const isAuthenticted = accessToken  
   
    //  check before redirect to page
    return isAuthenticted ? children : <Navigate to='/' />
}
export default privateRoute