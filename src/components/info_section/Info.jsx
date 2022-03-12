import React from 'react'
import './info.css'
import Data from './Data'
import Info_content from './Info_content'

const Info = () => {
    return (
        <section className='mt-5 mb-5 pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 info_content text-center">
                        <h1>Please Help Us to Fight Against Coronavirus</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus necullamcorper mattis, pulvinar dapibus le.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    
                    {
                        Data.map(item => {
                            return <Info_content item={item} />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Info
