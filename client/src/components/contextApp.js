import React, { useState}  from 'react'



export const FormContex = React.createContext()


export const FormProvider = ({ children }) => {
  const [openAuthor, setOpenAuthor]=useState(false)
  const [recovery, setRevocery]=useState(false)
 
return (
  <FormContex.Provider value={{openAuthor,setOpenAuthor,recovery, setRevocery}}>
    {children}
  </FormContex.Provider>
  )
}
