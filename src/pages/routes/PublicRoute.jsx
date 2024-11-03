import React from 'react'
import { Navigate } from 'react-router-dom'

function PublicRoute ({childern}){
    // ດືງ Token ຈາກ LocalStorage ເພືອຢືນຢັ້ງ.
    const isAuthenticted = !!localStorage.getItem('authToken')
    return isAuthenticted ? <Navigate to="dashbord" /> : childern
}
export default PublicRoute