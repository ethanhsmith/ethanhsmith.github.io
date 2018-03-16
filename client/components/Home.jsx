import React from 'react'

let imgUrl = 'images/profile.jpg'

class Home extends React.Component {
    render() {
        return (
            <div className='row' style={styles.container}>
                <div className='three columns'>
                    <img src={imgUrl} style={styles.profile}></img>
                </div>
                <div style={styles.info} className='eight columns'>
                    <div style={styles.divider}>
                        <h4>Ethan Smith</h4>
                        <h5 style={styles.subtitle}>Full Stack Javascript Developer</h5>
                    </div>
                    <p style={styles.paragraph}>Front End + Peace Loving Hippie</p>
                    <b style={styles.paragraph}>Skills:</b>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>APIs</li>
                        <li>SQL</li>
                        <li>Express</li>
                        <li>Knex.js</li>
                        <li>JWT</li>
                        <li>Jest</li>
                        <li>Git & Github</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'white',
        padding: '1% 1%',
        margin: 'auto',
        lineHeight: 0,
        textAlign: 'left',
        color: 'black'
    },
    profile: {
        width: '100%',
        margin: 'auto',
        padding: '4px'
    },
    info: {
        margin: 'auto',
        padding: '0% 1% 1% 2%'
    },
    subtitle: {
        color: '#4FA750',
        borderBottom: 'solid 4px black',
        padding: '0% 0% 0% 0%'
    },
    paragraph: {
        padding: '0% 0%',
    },
    divider: {
        padding: '0 0 5% 0'
    }
}

export default Home
