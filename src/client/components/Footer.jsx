import React from 'react'

const Footer = () => (
    <div style={styles.footer}>
        <p>Created by Ethan Smith, 2018 - React, JS</p>
    </div>
)

const styles = {
    container: {
        backgroundColor: 'white',
        height: '40000px',
        width: '500px',
        color: 'black'
    }, 
    footer: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
}

export default Footer
