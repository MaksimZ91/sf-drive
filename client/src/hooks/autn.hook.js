import React, { useCallback, useEffect, useState } from 'react'


const TOKENS_KEY="tokens"

export const useAuth = ()=>{
    const [accessToken, setAccessToken]=useState("")
    const [refreshToken, setRefreshToken]=useState("")
    const [userId, setUserId]=useState("")
    
    const login = useCallback ( async (acsToken,refToken, id)=>{
        setAccessToken(acsToken)
        setRefreshToken(refToken)
        setUserId(id)
        await localStorage.setItem(TOKENS_KEY, JSON.stringify({accessToken:acsToken, refreshToken:refToken,userId:id }))
    },[])


    useEffect(async ()=>{
        const  userData = await JSON.parse(localStorage.getItem(TOKENS_KEY))
        if(userData&&userData.accessToken){
       await login(userData.accessToken, userData.refreshToken, userData.userId)}
    },[login])

    return {login,accessToken, refreshToken, userId, setAccessToken, setRefreshToken}
}