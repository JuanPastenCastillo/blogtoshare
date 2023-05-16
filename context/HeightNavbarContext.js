import { createContext, useContext, useState } from "react"

const HeightNavbar_Ctx = createContext(null)

export const HeightNavbarContext_Provider = ({ children }) => {

  const [heightNavbar, setHeightNavbar] = useState()

  return <HeightNavbar_Ctx.Provider value={{ heightNavbar, setHeightNavbar }}>{children}</HeightNavbar_Ctx.Provider>
}

export const useHeightNavbar_Ctx = () => {
  return useContext(HeightNavbar_Ctx)
}
