import React, { useContext, useState } from 'react'

function MyContextPage({children}) {
    const MyContext = React.createContext();
    const [value, setvalue] = useState('ghello');
  return (
    <MyContext.Provider value={{value, setvalue}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextPage