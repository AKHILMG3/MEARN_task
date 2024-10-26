import React, { createContext, useState } from 'react'

    //create context

export const addProjectContextResponse = createContext()
export const editProjectContextResponse = createContext()
function ContextShare({Children}) {

  const [addProjectRes,setAddProjectRes] = useState("")
  const [editProjectRes,setEditProjectRes] = useState("")

  return (
    <div>
        <addProjectContextResponse.Provider value = {{addProjectRes,setAddProjectRes}}>
          <editProjectContextResponse.Provider value = {{editProjectRes,setEditProjectRes}}>
          {Children}
          </editProjectContextResponse.Provider>           
            </addProjectContextResponse.Provider> 
    </div>
  )
}

export default ContextShare