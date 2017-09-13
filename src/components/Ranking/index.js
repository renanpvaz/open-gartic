import React from 'react'

const Ranking = ({ players = [] }) => {
  return (
    <ul>
      {
        players.map((player, i) => (
          <li style={{
            margin: 16,
            width: 40,
            height: 40,
            backgroundColor: '#aaa',
            borderRadius: '.2rem',
            backgroundColor:'rgb(231, 231, 231)',
            backgroundImage: `url(http://avatar.3sd.me/?${player.uid})`
          }} />
        ))
      }
    </ul>
  )
}

export default Ranking
