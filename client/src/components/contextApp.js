import React, { useState}  from 'react'
import {useAuth} from '../hooks/autn.hook'


export const FormContex = React.createContext()


export const FormProvider = ({ children }) => {
  const [openAuthor, setOpenAuthor]=useState(false)
  const [recovery, setRevocery]=useState(false)
  const {login,accessToken, refreshToken, userId, setAccessToken}=useAuth()
  const isAuthen = !!accessToken
 
return (
  <FormContex.Provider value={{openAuthor,setOpenAuthor,recovery, setRevocery,login,refreshToken,userId,isAuthen, setAccessToken }}>
    {children}
  </FormContex.Provider>
  )
}
