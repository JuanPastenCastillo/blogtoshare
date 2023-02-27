import { createContext, useContext, useState } from "react"

const UserView_Ctx = createContext(null)

export const UserView_Provider = ({ children }) => {
  const [windowY, setWindowY] = useState(0)

  return <UserView_Ctx.Provider value={{ windowY, setWindowY }}>{children}</UserView_Ctx.Provider>
}

export const useUserView_Ctx = () => {
  return useContext(UserView_Ctx)
}
