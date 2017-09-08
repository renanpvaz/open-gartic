import React from 'react'

const Ranking = ({ players = [] }) => {
  return (
    <ul>
      {
        players.map((player, i) => (
          <li style={{
            marginBottom: 16,
            width: 48,
            height: 48,
            backgroundColor: '#aaa',
            borderRadius: '.2rem',
            backgroundImage: `url(${`https://api.adorable.io/avatars/48/${player.id}.png`})`
          }}>
          </li>
        ))
      }
    </ul>
  )
}

export default Ranking
