import React from 'react'

let imgUrl = 'images/profile.jpg'

class Home extends React.Component {
    render() {
        return (
            <div class='row' style={styles.container}>
                <img src={imgUrl} style={styles.profile} className='two-columns'></img>
                <div style={styles.info} className='ten-columns'>
                    <h4>Ethan Smith</h4>
                    <h5 style={styles.subtitle}>Full Stack Javascript Developer</h5>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        padding: '1% 1%',
        display: 'flex',
        margin: 'auto',
        lineHeight: 0,
        textAlign: 'left',
        color: 'black'
    },
    profile: {
        width: '20%',
        height: '20%',

    },
    info: {
        width: '100%',
        padding: '0% 0% 0% 2%'
    },
    subtitle: {
        color: '#4FA750',
        borderBottom: 'solid 4px black' 
    }
}

export default Home
