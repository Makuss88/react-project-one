import React from 'react'
import { IEpisode } from './interfaces'
import { EposideBox } from './styled.js'

const EpisodesList = (props: any): Array<JSX.Element> => {
  const { episodes, favourites, toogleFavoriteAction } = props
  return episodes.map((episode: IEpisode) => {
    return (
      <EposideBox key={episode.id}>
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toogleFavoriteAction(episode)}>
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? 'Unfav...'
              : 'Fav me!'}
          </button>
        </section>
      </EposideBox>
    )
  })
}

export default EpisodesList
