import { createContext, useReducer } from 'react'

export const ExitPointContext = createContext()

export const exitsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXITPOINTS':
      return { 
        exitPoints: action.payload 
      }
    case 'CREATE_EXITPOINT':
      return { 
        exitPoints: [action.payload, ...state.exitPoints] 
      }
    case 'DELETE_EXITPOINT':
      return {
        exitPoints: state.exitPoints.filter(exit => exit._id !== action.payload)
      }
    default:
      return state
  }
}

export const ExitPointContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(exitsReducer, { 
    exitPoints: null
  })
  
  return (
    <ExitPointContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ExitPointContext.Provider>
  )
}