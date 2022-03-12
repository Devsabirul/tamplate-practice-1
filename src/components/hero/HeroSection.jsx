import React from 'react'
import './herosection.css'

const HeroSection = () => {
    return (
        <>
            <section className='hero_section'>
                <div className="content_section d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 content">
                                <h1>Stick Together and Fight The Coronavirus Now</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, fugiat quae neque nostrum, at, voluptate nemo delectus laborum in cumque totam rem vel qui sunt. Adipisci minima temporibus aperiam quae?</p>
                                <button className='btn btn_solid'>Test Symptoms</button>
                                <button className='btn btn_none' >Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
