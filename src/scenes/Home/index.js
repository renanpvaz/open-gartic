import React from 'react'

import Space from '../../components/Space'

import './home.css'

const Home = ({ children }) => (
  <main className="home">
    <div className="home__content">
      <section>
        <Space mB="2">
          <h1>Open<strong>Gartic</strong></h1>
        </Space>
        {children}
      </section>
    </div>
  </main>
)

export default Home
