import React, { useState } from 'react'
import { createContext } from 'react'


export const addResponseContext = createContext()
export const editResponseContext=createContext()

function ContextApi({children}) {

    const [addresponse,setAddresponse]=useState("")

    const [editRes,setEditres]=useState("")
    return (
        <>
        <addResponseContext.Provider value={{addresponse,setAddresponse}}>
          <editResponseContext.Provider value={{editRes,setEditres}}>
          {children}
          </editResponseContext.Provider>
        </addResponseContext.Provider>
    
        
        </>
      )
    }
    
    export default ContextApi