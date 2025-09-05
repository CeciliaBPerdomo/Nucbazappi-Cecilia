import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, redirectTo }) => {
    // children es la ruta que quiero proteger
    const { currentUser } = useSelector(state => state.user)

    return currentUser ? (
        children
    ) : (
        <Navigate to={redirectTo} />
    )
}

export default ProtectedRoute