import React from 'react'
import { RefreshContextProvider } from 'contexts/RefreshContext'


const Providers: React.FC = ({ children }) => {
  return (
    <RefreshContextProvider>
      {children}
    </RefreshContextProvider>
  )
}

export default Providers
