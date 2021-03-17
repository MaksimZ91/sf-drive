import { useCallback, useState } from 'react'
const fetch = require('node-fetch')
import jwtDecoded from 'jwt-decode'


export const useHttp = () =>{
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method="GET", body=null, headers={})=>{
        const data = JSON.parse(localStorage.getItem('tokens'))
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
        const tokens = JSON.parse(localStorage.getItem('tokens'))
        let access = tokens.accessToken              
        let tokenData =jwtDecoded(access)
        const currentTime = Math.round(Date.now()/1000)
        const diff =tokenData.exp - currentTime
        const isValidAcceessToken = diff > 60      
        if (!isValidAcceessToken){ 
        body=JSON.stringify(tokens.refreshToken) 
        headers={'Content-Type':'application/json','Accept':'application/json'}              
        const response = await fetch('http://localhost:5000/api/refresh', {method:'POST', body, headers})
        const dataToken = await response.json() 
        if(!newDataToken.ok){
            throw new Error(dataToken.message) 
        }
        localStorage.setItem("tokens", JSON.stringify(dataToken))
        access=dataToken.accessToken}
        if (body){
            body = JSON.stringify(body)
            headers={'Content-Type':'application/json', Authorization: `Bearer ${access}`}}
            const response = await fetch(url,{method,body,headers})
            const data =  await response.json()
            if(!response.ok){
            throw new Error(data.message)
        }
        return data
    }
} catch (e) {
        setError(e.message)
        throw e           
       }},[])
       return {  request, error, setError }
    }
    