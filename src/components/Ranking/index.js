import React from 'react'

import Space from '../Space'

const Ranking = ({ users = [] }) => {
  return (
    <ul>
      {
        users.map((user, i) => (
          <li style={{
            marginBottom: 16,
            width: 48,
            height: 48,
            backgroundColor: '#aaa',
            borderRadius: '.2rem',
            backgroundImage: `url(${`https://api.adorable.io/avatars/48/${user.id}.png`})`
          }}>
          </li>
        ))
      }
    </ul>
  )
}

export default Ranking
