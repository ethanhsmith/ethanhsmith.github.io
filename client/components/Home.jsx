import React from 'react'

class Home extends React.Component {
    let profileImg = ''
    render () {
        return (
            <div style={{backgroundColor: 'black', padding: '5% 5%', margin: '25% 25%', textAlign: 'center', color: 'white'}}>
               <img src='url(images/profile.jpg)'></img>
                <h1>Home Component</h1>
            </div>
            )
    }
}

export default Home
