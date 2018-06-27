import React from 'react'


import NavBar from './NavBar'
import Home from './Home'
import Footer from './Footer'

const App = () => (
  <div id='main-container' className='app'>
    <div style={styles.container}>
      <NavBar id='nav-bar' />
      <Home />
      <Footer />
    </div>
  </div>
)

let imgUrl = 'images/header-img.jpg'

const styles = {
  container: {
    height: '100%',
    width:'100%',
    padding: '5% 10%',
    position: 'absolute',
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'auto',
    overflow: 'auto',
  },
  text: {
    color: '#ffffff',
    fontSize: 80
  }
}

export default App
