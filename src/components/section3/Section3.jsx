import React from 'react'
import './section3.css'
import { FaHandHoldingMedical } from 'react-icons/fa';
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

const Section3 = () => {
    return (
        <>
            <section className='bg_none'>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="img_section">
                                <img src="./image/section-3.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section3_content">
                                <h1>Protect Yourself from Coronavirus</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit, officia voluptate laudantium natus fugiat atque veniam. </p>
                                <h3><span> <FaHandHoldingMedical /> </span> Wash Your Hands Frequently</h3>
                                <h3><span> <RiSurgicalMaskLine /> </span> Wear a protective mask</h3>
                                <h3><span> <CgProfile /> </span>Avoid direct contact</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3
