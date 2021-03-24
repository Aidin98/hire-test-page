import React, { useEffect, useState } from 'react'
import './HeroSection.css'
import SimpleImageSlider from "react-simple-image-slider";
function HeroSection() {
    const images=[{url:'https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-1/01-slider-image.jpg'},{url:'https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-1/01-slider-image.jpg'},{url:'https://bitbucket.org/sstojanovic/fetest/raw/80774e9308e47fdcd142102b21d639e227eca9f4/resources/_IMAGES/page-1/01-slider-image.jpg'}]
  const size=useWindowSize()
    return (
        <div className='heroSection'>
            
        <SimpleImageSlider className='heroSection__slider'
        width={size.width}
        height={500}
        images={images}
        showNavs
        showBullets
        style={{color:'red'}}
      />
      <div className='heroSection__info'>
                <h1 className='heroSection__title'>Nullam risus ultricies et < strong className='subtitle1'>augue</strong></h1>
                <p className='herSection__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tortor sit amet tellus aliquam pellentesque. Nulla euismod mauris sed nisi lacinia, eu mollis ante molestie. Ut tempus vehicula rhoncus.</p>
                <button>MAIN CTA</button>
            </div>
        </div>
    )
}

export default HeroSection

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
