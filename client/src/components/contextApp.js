import React, { useState }  from 'react'
import { useAuth } from '../hooks/autn.hook'


export const FormContex = React.createContext()


export const FormProvider = ({ children }) => {
  const [openAuthor, setOpenAuthor]=useState(false)
  const [recovery, setRecovery]=useState(false)
  const {login,accessToken, refreshToken, userId, setAccessToken}=useAuth()
  const isAuthen = !!accessToken
   
return (
  <FormContex.Provider value={{openAuthor,setOpenAuthor,recovery, setRecovery,login,refreshToken,userId,isAuthen, setAccessToken, accessToken }}>
    {children}
  </FormContex.Provider>
  )
}
