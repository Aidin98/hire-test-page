import React from 'react'
import './Wrapper.css'
function Wrapper() {
    return (
        <div className='wrapper'>
            <div className='wrapper__info'>
                <p className='wrapper__title'>Home / Lorem IPSUM</p>
                <h1>Lorem IPSUM</h1>
                <p className='wrapper__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget molestie nulla. Pellentesque sem purus, tincidunt nec tempor in, laoreet vitae libero. Aliquam cursus eros vel lorem malesuada efficitur. Nullam sit amet pellentesque ipsum. Suspendisse potenti. Sed mauris nisi, pretium ac lacus vel, pretium facilisis nisi. Ut condimentum, tortor non.</p>
            </div>
            <img className='wrapper__pic' src='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/01-header-image.jpg' alt='page2 slider' />
        </div>
    )
}

export default Wrapper
