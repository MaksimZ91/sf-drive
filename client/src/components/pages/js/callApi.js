import {useHttp} from '../../../hooks/http.hook'
import jwtDecoded from 'jwt-decode'



export  const useCallsapi = () =>{
  const {requset} = useHttp() 
  const call = async  (url,method,body,headers={}) =>{
  const data = JSON.parse(localStorage.getItem('tokens'))
  let access = data.accessToken
  let tokenData
  try {
    tokenData =jwtDecoded(access)
    const currentTime = Math.round(Date.now()/1000)
    const diff =tokenData.exp - currentTime
    const isValidAcceessToken = diff > 60
    if (!isValidAcceessToken){
      const refresh = data.refreshToken
      const newDataToken = await requset('http://localhost:5000/api/author/refresh', 'POST', refresh)
      localStorage.setItem("tokens", newDataToken)
      access=newDataToken.accessToken
    }

  } catch (error) {
    console.log(error)   
  }
  
  return requset (url,method,body,{Authorization: `Bearer ${access}`})
}
return ({call})
}