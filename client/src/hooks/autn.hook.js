import React, { useCallback, useState } from 'react'

export const useAuth = ()=>{
    const [accessToken, setAccessToken]=useState(null)
    const [refreshToken, setRefreshToken]=useState(null)
    
    const login = useCallback  ((acsToken,refToken)=>{
        setAccessToken(acsToken)
        setRefreshToken(refToken)
        localStorage.setItem("tokens", JSON.stringify({accessToken:acsToken, refreshToken:refToken}))
    },[])

    return {login}
}