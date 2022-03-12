import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import HeroSection from './hero/HeroSection'
import Info from './info_section/Info'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'

const MainComponents = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Info />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </>
    )
}

export default MainComponents
