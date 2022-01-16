import { createContext, useContext, ReactNode } from 'react'

type Type = {}

const defaultValues: Type = {}

const IndexContext = createContext(defaultValues)

const useValues = () => {
  return {}
}

const IndexContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <IndexContext.Provider value={useValues()}>
      {children}
    </IndexContext.Provider>
  )
}

const useIndexContext = () => useContext(IndexContext)

export { useIndexContext, IndexContextProvider }
