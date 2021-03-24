import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <img src='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-1/02-image.png' alt='banner' />
            <div className='banner__info'>
                <h1>Pellentesque non <strong className='subtitle'>est malesuada</strong></h1>
                <h4 className='banner__h4'>MAECENAS TEMPOR TINDICUNT LUCTUS</h4>
                 <p className='banner__p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tortor sit amet tellus aliquam pellentesque. Nulla euismod mauris sed nisi lacinia, eu mollis ante molestie. Ut tempus vehicula rhoncus.</p>
                <a href='#'>Underline link</a>
            </div>
        </div>
    )
}

export default Banner
