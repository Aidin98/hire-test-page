import React from 'react'
import './Fotter.css'
function Fotter() {
    return (
        <div className='fotter'>
            <img src='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/logo-footer.png' alt='fotter__png' />
            <div className='fotter__info'>
                <ul className='fotter__links'>
                    <li style={{textDecoration:'underline'}}>Page1</li>
                    <li>Page2</li>
                    <li>Page3</li>
                </ul>
                <p>COPYRIGHT @ 2016 MAECENAS VEL MASSA ULLAMCORPER</p>
            </div>
        </div>
    )
}

export default Fotter
