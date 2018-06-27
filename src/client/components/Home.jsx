import React from 'react'

let imgUrl = 'images/profile.jpg'

class Home extends React.Component {
    render() {
        return (
            <div className='row' style={styles.container}>
                <div style={styles.profileSection} className='three columns'>
                    <img src={imgUrl} style={styles.profile} alt=""></img>
                    <div style={styles.externalSites} className='row'>
                            <div className='four columns'>
                                <a href='https://github.com/ethanhsmith' style={styles.a}>
                                    <img style={styles.externalSitesIcons} src={'images/GitHub-Mark.png'}  alt=""></img>
                                </a>
                            </div>
                            <div className='four columns'>
                                <a href='https://www.linkedin.com/in/ethan-smith-31822153/' style={styles.a}>
                                    <img style={styles.externalSitesIcons} src={'images/Li-Mark.png'}  alt=""></img>
                                </a>
                            </div>
                            <div className='four columns'>
                                <a href='mailto:edhsmith@icloud.com'>
                                    <div>
                                        <p id='email'>@</p>
                                    </div>
                                </a>
                            </div>
                    </div>
                </div>
                <div style={styles.infoSection} className='nine columns'>
                    <div style={styles.divider}>
                        <h4 style={styles.nameTitle}>Ethan Smith</h4>
                        <p style={styles.subtitle}>Full Stack Javascript Developer</p>
                    </div>
                    <p>Are you looking for your next Full Stack JS Developer? <a href='mailto:edhsmith@icloud.com'>Email me!</a></p>
                    <b>Skills:</b>
                    <ul style={styles.ul}>
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
                        <li>And more</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#fafafa',
        padding: '6px',
        margin: 'auto',
        lineHeight: 0,
        textAlign: 'left',
        color: 'black',
    },
    profileSection: {
        padding: '3px'
    },
    profile: {
        width: '100%',
        margin: 'auto',
        borderRadius: '3px'
    },
    externalSites: {
        display: 'flex',
        padding: '3px',
        textAlign: 'center',
        margin: 'auto'
    },
    externalSitesIcons: {
        margin: 'auto',
        height: '22px'
    },
    infoSection: {
        lineHeight: '1.2',
        margin: 'auto',
        padding: '3px'
    },
    divider: {
        margin: 'auto',
        marginBottom: '15px',
        borderBottom: 'solid 3px black',
        padding: '3px'
    },
    nameTitle: {
        margin: 'auto'
    },
    subtitle: {
        margin: 'auto',
        color: '#5F5EFF'
    },
    a: {
        display: 'block',
        margin: 'auto',
        height: '100%'
    },
    ul: {
        lineHeight: '0.2'
    }   
}

export default Home
