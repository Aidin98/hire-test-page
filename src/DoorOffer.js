import React from 'react'
import Door from './Door'
import './DoorOffer.css'
import Pattern from './Pattern'
function DoorOffer() {
    return (
        <div className='doorOffer'>
            <div className='doorOffer__row'>
                <Door title='Edwin Daniels' img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/dummy-05.png' />
                 <Door title='Rhoda Barton' img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/dummy-07.png' />
                  <Door title='Lilie Walker' img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/dummy-02.png' />
                  <Door title='Edwin James' img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/dummy-03.png' />
            </div>
            <Pattern />
            <div className='doorOffer__row'>
                <Door title='Edwin Daniels' img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/dummy-05.png' />
                 <Door title='Rhoda Barton' img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/dummy-07.png' />
                  <Door title='Lilie Walker' img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/dummy-02.png' />
                  <Door title='Edwin James' img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/dummy-03.png' />
            </div>
            <Pattern />
        </div>
    )
}

export default DoorOffer
