import React from 'react'

import Panel from '../../components/Panel'

import './home.css'

const Home = ({ children }) => (
  <main className="home">
    <div className="home__content">
      <section>
        <Panel below="xl">
          <h1>Open<strong>Gartic</strong></h1>
        </Panel>
        {children}
      </section>
    </div>
  </main>
)

export default Home
