import React, { useState, useEffect } from 'react'

function AuthApi(token) {
    // current user
    const [currentUser, setCurrentUser] = useState(null)

    // login status
    const [isLogged, setIsLogged] = useState(false)

    // roles
    const [isStudent, setIsStudent] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    return {
        currentUser: [currentUser, setCurrentUser],
        isLogged: [isLogged, setIsLogged],
        isStudent: [isStudent, setIsStudent],
        isAdmin: [isAdmin, setIsAdmin]
    }
}

export default AuthApi