import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const NavBar = () => (
    <header>
        <div className="container">
            <div className="row" style={{textAlign: 'center', padding: '1%'}}>
                <div className="four columns" styles={styles.menuItem}><a href="index.html">Home</a></div>
                <div className="four columns"styles={styles.menuItem}>Blog</div>
                <div className="four columns"styles={styles.menuItem}><a href="../game/index.html">Game</a></div>
            </div>
        </div>
    </header>
)
const styles = {
    menuItem: {
        padding: '5%',
        margin: '5%'
    }
}
export default NavBar
