import React from 'react'
import logo from '../assets/img/svg/logo_svg.svg'
import discord from '../assets/img/svg/discord.svg'
import twitter from '../assets/img/svg/twitter.svg'

function Footer() {
    return (
        <>
            <div className='bg_footer'>
                <div className='container py-5'>
                    <div className='m-auto w_95 pt-5'>
                        <img className='w-100' src={logo} alt="logo" />
                    </div>
                    <p className='fw-normal text-white ff_Poppins fs_sm opacity_05 text-center mw_640 m-auto mt-4'>Iaculis turpis phasellus dolor fringilla. Sed tristique erat accumsan est. Tortor morbi odio nisl dictumst lectus elementum. Cras dictum pulvinar dolor diam pell.</p>
                    <ul className='mx-0 p-0 d-flex align-items-center justify-content-center  mt-4'>
                        <li>
                            <a href="" className='d-inline-block text-white ff_Poppins fs_sm fw-normal opacity_05 me-4'>Home</a>
                        </li>
                        <li>
                            <a href="" className='d-inline-block text-white ff_Poppins fs_sm fw-normal opacity_05 mx-4'>Link</a>
                        </li>
                        <li>
                            <a href="" className='d-inline-block text-white ff_Poppins fs_sm fw-normal opacity_05 mx-4'>Bans</a>
                        </li>
                        <li>
                            <a href="" className='d-inline-block text-white ff_Poppins fs_sm fw-normal opacity_05 mx-4'>Leaderboard</a>
                        </li>
                        <li>
                            <a href="" className='d-inline-block text-white ff_Poppins fs_sm fw-normal opacity_05 mx-4'>About</a>
                        </li>
                        <li>
                            <a href="" className='d-inline-block text-white ff_Poppins fs_sm fw-normal opacity_05 ms-4'>Applications</a>
                        </li>
                    </ul>
                    <div className='d-flex align-items-center justify-content-center mt-4'>
                        <a href="" className='d-inline-block'><img className='w_footer_discord' src={discord} alt="discord" /></a>
                        <a href="" className='d-inline-block ms-4'><img className='w_footer_discord' src={twitter} alt="twitter" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer