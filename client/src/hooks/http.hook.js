import { useCallback, useState } from 'react'
const fetch = require('node-fetch')
import jwtDecoded from 'jwt-decode'
const TOKENS_KYES='tokens'
const MILLISECONDS_IN_SECONDS=1000
const SECONDS = 60 

export const useHttp = () =>{
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method="GET", body=null, headers={})=>{
        const data = JSON.parse(localStorage.getItem(TOKENS_KYES))
        try {
            if(!data){
                if (body){
                    body = JSON.stringify(body)
                    headers['Content-Type'] = 'application/json'} 
                    const response = await fetch(url,{method,body,headers})
                    const data =  await response.json()
                    if(!response.ok){
                    throw new Error(data.message)
                }
                return data
            }else{
                let tokens = JSON.parse(localStorage.getItem(TOKENS_KYES))
                let access = tokens.accessToken                   
                let tokenData =jwtDecoded(access)        
                const currentTime = Math.round(Date.now()/MILLISECONDS_IN_SECONDS)
                const diff =tokenData.exp - currentTime
                const isValidAcceessToken = diff > SECONDS
                if (!isValidAcceessToken){
                    const refToken =tokens.refreshToken
                    const response = await fetch('http://localhost:5000/author/refresh', 
                    {
                        method:'POST',
                        body:JSON.stringify({refToken}),
                        headers:{'Content-Type':'application/json','Accept':'application/json'}
                    })
                    const dataToken = await response.json()        
                    if(!response.ok){
                        throw new Error(dataToken.message)
                    }
                    localStorage.setItem(TOKENS_KYES, JSON.stringify(dataToken))
                     access= dataToken.accessToken
                    }
                    if (body){
                    body = JSON.stringify(body)}
                    if(Object.keys(headers).length==0){
                    headers={'Content-Type':'application/json', Authorization: `Bearer ${access}`}}
                    const response = await fetch(url,{method,body,headers})
                    const data =  await response.json()
                    if(!response.ok){
                        throw new Error(data.message)
                    }
                    return data
                }
            }catch (e) {
                setError(e.message)
                throw e
            }
        },[])
        return {  request, error, setError }
    }
    