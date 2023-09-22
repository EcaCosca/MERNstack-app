import { ExitPointContext } from "../context/ExitPointContext"
import { useContext } from "react"

export const useExitPointsContext = () => {
  const context = useContext(ExitPointContext)

  if(!context) {
    throw Error('useExitPointsContext must be used inside an ExitPointContextProvider')
  }

  return context
}