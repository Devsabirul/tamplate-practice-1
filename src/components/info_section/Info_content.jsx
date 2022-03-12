import React from 'react'
import './info.css'
const Info_content = ({ item }) => {

    return (
        <>
            <div className="col-lg-3 p-2">
                <div className="info_section_centent">
                    <h2>{item.title}</h2>
                    <p>{item.discription}</p>
                </div>
            </div>

        </>
    )
}

export default Info_content
