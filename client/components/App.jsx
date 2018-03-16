import React from 'react'
import Parallax from 'parallax-js'

import Background from './Background'
import NavBar from './NavBar'
import Home from './Home'

const App = () => (
  <div id='main-container' className='app'>
    <NavBar id='nav-bar' />
    <div style={styles.container}>
      <h3 style={styles.constructionMessage}>This Website is under construction.</h3>
      <Home />
    </div>
  </div>
)

let imgUrl = 'images/header-img.jpg'

const styles = {
  container: {
    height: '95%',
    width:'100%',
    padding: '5% 10%',
    position: 'absolute',
    backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
  },
  text: {
    color: '#ffffff',
    fontSize: 80
  },
  constructionMessage: {
    color: 'black'
  }
}

export default App
