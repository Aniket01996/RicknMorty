import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="n-left">
                <img width="60" height="60" src="https://img.icons8.com/doodle/96/internet--v1.png" alt="internet--v1" />
                <div className="n-name">Rick & <span className='orange'> <img width="50" height="50" src="https://img.icons8.com/emoji/48/flying-saucer.png" alt="flying-saucer" />Morty</span></div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                    <img width="80" height="80" src="https://img.icons8.com/bubbles/100/alien.png" alt="alien"/>
                        <li>Let's</li>
                        <li>get</li>
                        <li>Schwifty!!!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
