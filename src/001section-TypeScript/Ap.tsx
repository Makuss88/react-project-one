import React, { Fragment, useContext, useEffect } from 'react'
import { Store } from './Store'
import { IEpisode, IAction } from './interfaces'
import { FETCH_DATA, ADD_FAV, REMOVE_FAV } from './action'

import { Header, EposideLayout } from './styled'

// import EpisodesList from './EpisodesList' //!!!!! WRONG!!!

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

const Ap = () => {
  const { state, dispatch } = useContext(Store)

  useEffect(() => {
    state.episodes.length === 0 && fetchDataHadnler()
  })

  const fetchDataHadnler = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: FETCH_DATA,
      payload: dataJSON._embedded.episodes,
    })
  }

  const toogleFavoriteAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode)
    let dispatchObj = {
      type: ADD_FAV,
      payload: episode,
    }
    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: IEpisode) => fav.id !== episode.id,
      )
      dispatchObj = {
        type: REMOVE_FAV,
        payload: favWithoutEpisode,
      }
    }

    return dispatch(dispatchObj)
  }

  const props = {
    episodes: state.episodes,
    favourites: state.favourites,
    toogleFavoriteAction,
  }

  console.log(state)
  return (
    <Fragment>
      <Header>
        <div>
          <h1>Rick and Morty</h1>
          <span> Pick your favourite episode!</span>
        </div>
        <div>Favourite(s): {state.favourites.length}</div>
      </Header>
      {/* <button onClick={fetchDataHadnler}> PRESS ME! </button> */}
      <React.Suspense fallback={<div>lodaing...</div>}>
        <EposideLayout>
          <EpisodesList {...props} />
        </EposideLayout>
      </React.Suspense>
    </Fragment>
  )
}

export default Ap

//
//
//
//
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return state + action.payload
//     case 'MINUS':
//       return state + action.payload
//     case 'RESET':
//       return (state = action.payload)
//     default:
//       return state
//   }
// }
// const [value, setValue] = useState('')
// const [count, dispatch] = useReducer(reducer, 0)

/* <div>{count}</div>
      <button onClick={() => dispatch({ type: 'ADD', payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'MINUS', payload: -1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'RESET', payload: 0 })}>
        Reset
      </button> */
