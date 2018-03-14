import React from 'react'
import Parallax from 'parallax-js'

import Background from './Background'
import NavBar from './NavBar'
import Home from './Home'

const App = () => (
  <div  id='main-container' className='app'>
    <NavBar id='nav-bar' />
    <div style={styles.container}>
        <Home />
    </div>
  </div>
)

let imgUrl = 'images/header-img.jpg'

const styles = {
  container: {
    flex: 1,
    position: 'absolute',
    backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
  },
  box1: {
    top: 40,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  box2: {
    position: 'absolute',
    top: 80,
    left: 80,
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  box3: {
    position: 'absolute',
    top: 120,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  text: {
    color: '#ffffff',
    fontSize: 80
  }
}

export default App
