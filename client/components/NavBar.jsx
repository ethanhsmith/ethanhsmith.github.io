import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const NavBar = () => (
    <header>
        <div className="container">
            <div className="row" style={{textAlign: 'center'}}>
                <div className="four columns"><a href="index.html">Home</a></div>
                <div className="four columns">Blog</div>
                <div className="four columns"><a href="../game/index.html">Game</a></div>
            </div>
        </div>
    </header>
)

export default NavBar
