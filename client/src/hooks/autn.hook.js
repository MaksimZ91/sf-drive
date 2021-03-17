import React, { useCallback, useEffect, useState } from 'react'

export const useAuth = ()=>{
    const [accessToken, setAccessToken]=useState("")
    const [refreshToken, setRefreshToken]=useState("")
    const [userId, setUserId]=useState("")
    
    const login = useCallback  ( (acsToken,refToken, id)=>{
        setAccessToken(acsToken)
        setRefreshToken(refToken)
        setUserId(id)
        localStorage.setItem("tokens", JSON.stringify({accessToken:acsToken, refreshToken:refToken,userId:id }))
    },[])


    useEffect(()=>{
        const  userData = JSON.parse(localStorage.getItem("tokens"))
        if(userData&&userData.accessToken){
        login(userData.accessToken, userData.refreshToken, userData.userId)}
    },[login])

    return {login,accessToken, refreshToken, userId, setAccessToken, setRefreshToken}
}