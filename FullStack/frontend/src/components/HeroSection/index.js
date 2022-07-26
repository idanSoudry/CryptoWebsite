import React from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroH1,HeroP } from './HeroElements'
const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1>All About Cryptocurrencies In One Place</HeroH1>
          <HeroP></HeroP>
          <HeroP >
              Become a better & richer invester 
          </HeroP>
          <HeroP />
          <HeroP />
          <HeroP />
          <HeroP />
          <HeroP />         

        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection