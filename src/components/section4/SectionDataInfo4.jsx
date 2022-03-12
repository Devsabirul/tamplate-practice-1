import React from 'react'
import './section4.css'

const SectionDataInfo4 = ({ item }) => {
    return (
        <>
            <div className="section4Content d-flex" >
                <div className="icon">
                    <span>{item.icon}</span>
                </div>
                <div className="contentinfo">
                    <h3>{item.title}</h3>
                    <p>{item.discription}</p>
                </div>
            </div>
        </>
    )
}

export default SectionDataInfo4
