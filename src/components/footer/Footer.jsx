import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 logo_Section">
                            <img src="./image/logo.webp" alt="" />
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit expedita laborum nisi est ipsa. Necessitatibus maxime consequuntur placeat..</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact_info">
                                <h1>Contact Info</h1>
                                <p><span><i class="fa-solid fa-location-dot"></i></span> Jl. Raya Surabaya, 61234 Indonesia</p>
                                <p><span><i class="fa-solid fa-phone"></i></span> +62 441 5525 8000</p>
                                <p><span><i class="fa-solid fa-envelope"></i></span> email@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className=" row footer_info">
                        <div className="col-lg-12">
                            <p className='text-center'> 2020 © SHISA it company. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
