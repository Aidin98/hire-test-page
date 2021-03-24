import React from 'react'
import './CheckBox.css'
import TextureOption from './TextureOption'
import DoorOption from './DoorOption'
function CheckBox() {
    return (
        <div className='checkbox'>
            <div className='texture'>
                <h1 style={{color:'darkslategrey'}}>Suspendisse</h1>
                <div className='texture__options'>
                    <div>
                    <TextureOption selected={true} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-01.png' />
                     <TextureOption selected={false} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-02.png' />
                    <TextureOption selected={false} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-03.png' />
                    <TextureOption selected={true} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-04.png' />
                    </div>
                    <div>
                    <TextureOption selected={true} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-05.png' />
                     <TextureOption selected={true} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-06.png' />
                    <TextureOption selected={false} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-07.png' />
                    <TextureOption selected={true} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-08.png' />
                    </div>
                    <div>
                    <TextureOption selected={false} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-09.png' />
                     <TextureOption selected={false} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-10.png' />
                    <TextureOption selected={true} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-11.png' />
                    <TextureOption selected={false} img='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-2/texture-12.png' />
                    </div>
                </div>
            </div>
            <div className='doors'>
                <h1 style={{color:'darkslategrey'}}>Vestibulum</h1>
                <div className='doorOptions'>
                        <DoorOption selected={true} title='Bibendum'
                        imgselected='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/icon-door-1-active.png' 
                        imgnotselected='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/icon-door-1-inactive.png'/>
                        <DoorOption selected={false} title='Aenean'
                        imgselected='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/icon-door-2-active.png' 
                        imgnotselected='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/icon-door-2-inactive.png'/>
                         <DoorOption selected={false} title='Curabitur si'
                        imgselected='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/icon-door-3-active.png' 
                        imgnotselected='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/icon-door-3-inactive.png'/>
                         <DoorOption selected={false} title='Efficitur'
                        imgselected='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/icon-door-4-active.png' 
                        imgnotselected='https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_GRAPHICS/icons/icon-door-4-inactive.png'/>
                </div>
            </div>
           
        </div>
    )
}

export default CheckBox
