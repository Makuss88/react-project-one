import React, { useReducer } from 'react'
import { IState, IAction } from './interfaces'
import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from './action'

const initialState: IState = {
  episodes: [],
  favourites: [],
}

export const Store = React.createContext<IState | any>(initialState)

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case FETCH_DATA: {
      return { ...state, episodes: action.payload }
    }
    case ADD_FAV: {
      return { ...state, favourites: [...state.favourites, action.payload] }
    }
    case REMOVE_FAV: {
      return { ...state, favourites: action.payload }
    }
    default:
      return state
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}
