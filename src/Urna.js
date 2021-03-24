import React from 'react'
import './Urna.css'
function Urna() {
    return (
        <div className='urna'>
            <div className='urna__info'>
                <h1 className='urna__h1'>PELLENTESQUE <strong className='urna__strong'>urna</strong></h1>
                <h5 className='urna__h5'>MOBBI ANTE ERAT, FERMENTUM EGET DIAM SIT AMET</h5>
                <p className='urna__p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tortor sit amet tellus aliquam pellentesque. Nulla euismod mauris sed nisi lacinia, eu mollis ante molestie. Ut tempus vehicula rhoncus.</p>
                <a href='#'>Underline link</a>
            </div>
            <img src='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-1/03-image.png' alt='urna'/>
        </div>
    )
}

export default Urna
