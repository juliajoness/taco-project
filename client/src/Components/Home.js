import React from 'react'
import videoBg from '../assets/taco.mp4'

function Home() {
    return (
        <div className='homepage'>
            <video src={videoBg} autoPlay loop muted />
        
        </div>
    )
}

export default Home;