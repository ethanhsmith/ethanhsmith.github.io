import React from 'react'

let imgUrl = 'images/profile.jpg'

class Home extends React.Component {
    render() {
        return (
            <div className='row' style={styles.container}>
                <div className='three columns'>
                    <img src={imgUrl} style={styles.profile} alt=""></img>
                    <div style={styles.externalSites}>
                            <div className='four columns'>
                            <a className='four columns' href='https://github.com/ethanhsmith' style={styles.a}>
                                <img style={styles.externalSitesIcons} src={'images/GitHub-Mark.png'}  alt=""></img>
                                </a>
                            </div>
                            <div className='four columns'>
                                <a className='four columns' href='https://www.linkedin.com/in/ethan-smith-31822153/' style={styles.a}>
                                    <img style={styles.externalSitesIcons} src={'images/Li-Mark.png'}  alt=""></img>
                                </a>
                            </div>
                            <a className='four columns' href='mailto:edhsmith@icloud.com'>
                                <div>
                                    <p id='email'>@</p>
                                </div>
                            </a>
                    </div>
                </div>
                <div style={styles.info} className='nine columns'>
                    <div style={styles.divider}>
                        <h4 style={styles.nameTitle}>Ethan Smith</h4>
                        <h5 style={styles.subtitle}>Full Stack Javascript Developer</h5>
                    </div>
                    <p style={styles.paragraph}>Are you looking for your next Full Stack JS Developer? <a href='mailto:edhsmith@icloud.com'>Email me!</a></p>
                    <b style={styles.paragraph}>Skills:</b>
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>APIs</li>
                        <li>SQL</li>
                        <li>Express</li>
                        <li>Knex.js</li>
                        <li>JWT</li>
                        <li>Jest</li>
                        <li>Git with Github</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>+more</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: 'black',
        padding: '0% 0%',
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
    externalSites: {
        display: 'flex',
        padding: '8px',
        textAlign: 'center',
        margin: 'auto'
    },
    externalSitesIcons: {
        margin: 'auto',
        height: '22px'
    },
    info: {
        backgroundColor: 'white',
        margin: '0% 0% 0% 4%',
        height: '100%',
        padding: '1% 1% 1% 1%'
    },
    subtitle: {
        color: '#5F5EFF',
    },
    paragraph: {
        padding: '0% 0%',
    },
    divider: {
        padding: '0',
        margin: '0 0 15px 0',
        borderBottom: 'solid 4px black'
    },
    a: {
        display: 'block',
        width: '100%',
        height: '100%'
    },
    nameTitle: {
        lineHeight: 0,
        margin: '10px 0'
    }
}

export default Home
