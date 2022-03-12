import React from 'react'
import './section4.css'
import Section4Data from './Section4Data.jsx'
import SectionDataInfo4 from './SectionDataInfo4'
const Section4 = () => {
    return (
        <>
            <section className='mt-5 mb-5 '>
                <div className="container">
                    <div className="row mt-5">
                        <div className="row">
                            <div className="col-lg-12 info_content text-center">
                                <h1>What we Do</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necullamcorper mattis, pulvinar dapibus le.</p>
                            </div>
                        </div>
                        <div className="row mt-5 pt-5">
                            <div className="col-lg-6">

                                {
                                    Section4Data.map(item => {
                                        return <SectionDataInfo4 item={item} />
                                    })
                                }
                            </div>
                            <div className="col-lg-6 section_img">
                                <img src="./image/section-4.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section4
