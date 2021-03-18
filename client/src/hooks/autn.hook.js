import React, { useCallback, useEffect, useState } from 'react'


const TOKENS_KEY="tokens"

export const useAuth = ()=>{
    const [accessToken, setAccessToken]=useState("")
    const [refreshToken, setRefreshToken]=useState("")
    const [userId, setUserId]=useState("")
    
    const login = useCallback  ( (acsToken,refToken, id)=>{
        setAccessToken(acsToken)
        setRefreshToken(refToken)
        setUserId(id)
        localStorage.setItem(TOKENS_KEY, JSON.stringify({accessToken:acsToken, refreshToken:refToken,userId:id }))
    },[])


    useEffect(()=>{
        const  userData = JSON.parse(localStorage.getItem(TOKENS_KEY))
        if(userData&&userData.accessToken){
        login(userData.accessToken, userData.refreshToken, userData.userId)}
    },[login])

    return {login,accessToken, refreshToken, userId, setAccessToken, setRefreshToken}
}