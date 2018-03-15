import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class NavBar extends React.Component {
    constructor (props) {
        super(props)
        this.hoverButton = this.hoverButton.bind(this)
    }

    hoverButton (evt) {
        console.log(evt)
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row" style={{ textAlign: 'center', padding: '1%' }}>
                        <div name='home' className="four columns" styles={styles.currentItem} onMouseEnter={evt => this.hoverButton(evt)}>Home</div>
                        <div name='blog' className="four columns" styles={styles.menuItem}><a href={'blog/'}>Blog</a></div>
                        <div name='game' className="four columns" styles={styles.menuItem}><a href={'game/'}>Game</a></div>
                    </div>
                </div>
            </header>
        )
    }
}

const styles = {
    menuItem: {
        padding: '5%',
        margin: '5%'
    },
    currentItem: {
        padding: '5%',
        margin: '5%'
    }
}
export default NavBar
