import React from 'react'
import cart from '../assets/img/svg/cart.svg'
import steam from '../assets/img/svg/steam.svg'
import twitter from '../assets/img/svg/twitter.svg'
import discord from '../assets/img/svg/discord.svg'
import link from '../assets/img/svg/link.svg'
import upArrow from '../assets/img/png/up-arrow.png'
import slider_dots from '../assets/img/svg/slider_shadow.svg'
import circles from '../assets/img/svg/345_circle.svg'
import hero_slider from '../assets/img/png/hero_card_img.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1.65,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            }
        ]
    };
    window.onscroll = () => {
        toggleTopButton();
    };
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function toggleTopButton() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document.getElementById("back-to-up").classList.remove("d-none");
        } else {
            document.getElementById("back-to-up").classList.add("d-none");
        }
    }
    return (
        <>
            <section>
                <div className='container'>
                    <button
                        className="color_back_to_top rounded-circle position-fixed bottom-0 end-0 translate-middle d-none back_to_top_animation"
                        onClick={scrollToTop}
                        id="back-to-up">
                        <img className="w-100" src={upArrow} alt="back to top" />
                    </button>
                    <h2 className='text-center text-white fs_xl fw_medium ff_Poppins mt-5 pt-3'>
                        WELCOME TO <span className='text_blue_gradient
                         ff_Unbounded'>SCRAPLAND</span>
                    </h2>
                    <p className='text-center text-white fw-normal fs_sm ff_Poppins mb-4
                     mt-3'>Check out our gamemodes and servers below</p>
                    <div className='d-flex align-items-center justify-content-center position-relative z_index_2'>
                        <a href="" className='d-inline-block me-3 translate_y'>
                            <img className=' transform_translate_img tranisition_0_3' src={cart} alt="cart" />
                            <span className='text-white fw-normal d-block ff_Poppins
                             mt-2
                             fs_xsm opacity_03 tranisition_0_3'>store</span>
                        </a>
                        <a href="" className='d-inline-block mx-3 translate_y'>
                            <img className=' transform_translate_img tranisition_0_3' src={link} alt="link" />
                            <span className='text-white text-center fw-normal d-block
                             mt-2 ff_Poppins
                             fs_xsm opacity_03 tranisition_0_3'>link</span>
                        </a>
                        <a href="" className='d-inline-block mx-3 translate_y'>
                            <img className='ms-2 transform_translate_img tranisition_0_3' src={discord} alt="discord" />
                            <span className='text-white text-center fw-normal d-block
                             mt-2 ff_Poppins
                             fs_xsm opacity_03 tranisition_0_3'>discord</span>
                        </a>
                        <a href="" className='d-inline-block mx-3 translate_y'>
                            <img className=' transform_translate_img tranisition_0_3' src={twitter} alt="twitter" />
                            <span className='text-white text-center fw-normal d-block
                             mt-2 ff_Poppins
                             fs_xsm opacity_03 tranisition_0_3'>twitter</span>
                        </a>
                        <a href="" className='d-inline-block ms-3 translate_y'>
                            <img className=' transform_translate_img tranisition_0_3' src={steam} alt="steam" />
                            <span className='text-white text-center fw-normal d-block
                             mt-2 ff_Poppins
                             fs_xsm opacity_03 tranisition_0_3'>steam</span>
                        </a>
                    </div>
                </div>
                <div className='container-fluid position-relative pb-5'>
                    <img className='position-absolute position_left_dot d-none d-md-block' src={slider_dots} alt="blue dots" />
                    <img className='position-absolute position_right_dot d-none d-md-block' src={slider_dots} alt="blue dots" />
                    <Slider className='mt-5' {...settings}>
                        <div className='d-flex px-ms-3 px-2'>
                            <div className='position-relative col-12'>
                                <img className='w-100 bg_card_gradient min_height_200 border_radius_16' src={hero_slider} alt="card" />
                                <div className='position-absolute d-flex align-items-md-center bottom-0 w-100 justify-content-md-center flex-column flex-md-row pb-md-2'>
                                    <div className='d-flex align-items-center'>
                                        <img className='circles_w_21 mb-3' src={circles} alt="circles" />
                                        <div className='ms-2'>
                                            <p className='fw-semibold fs_md text-white ff_Poppins mb-0
                                     line_height_30'>345</p>
                                            <p className='text-white fw-normal fs_xsm
                                     ff_Poppins opacity_03 mb-0'>PLAYERS ACTIVE</p>
                                        </div>
                                    </div>
                                    <p className='text-white ff_Poppins fw-normal opacity_07
                             mw_445 mb-0 ms-4 me-4 fs_xsm'>Dignissim vitae
                                        integer odio posuere gravida sed dolor purus id. Sed
                                        ipsum et amet etiam interdum amet aenean gravida.</p>
                                    <div className='d-flex align-items-center mt-2 mt-md-0 ms-4 ms-md-0 me-md-3'>
                                        <a href='/' className='bg_cart'>
                                            <img className='w_cart_17 m-2' src={cart} alt="cart" />
                                        </a>
                                        <a href='/' className='bg_cart ms-2'>
                                            <img className='w_cart_17 m_discord' src={discord} alt="discord" />
                                        </a>
                                        <a href="/" className='fw-semibold fs_xsm ff_Poppins
                                 text-white text_shadow bg_server py-2 px-3 ms-2 '>SERVER</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex px-ms-3 px-2'>
                            <div className='position-relative col-12'>
                                <img className='w-100 bg_card_gradient min_height_200 border_radius_16' src={hero_slider} alt="card" />
                                <div className='position-absolute d-flex align-items-md-center bottom-0 w-100 justify-content-md-center flex-column flex-md-row pb-md-2'>
                                    <div className='d-flex align-items-center'>
                                        <img className='circles_w_21 mb-3' src={circles} alt="circles" />
                                        <div className='ms-2'>
                                            <p className='fw-semibold fs_md text-white ff_Poppins mb-0
                                     line_height_30'>345</p>
                                            <p className='text-white fw-normal fs_xsm
                                     ff_Poppins opacity_03 mb-0'>PLAYERS ACTIVE</p>
                                        </div>
                                    </div>
                                    <p className='text-white ff_Poppins fw-normal opacity_07
                                        mw_445 mb-0 ms-4 me-4 fs_xsm'>Dignissim vitae
                                        integer odio posuere gravida sed dolor purus id. Sed
                                        ipsum et amet etiam interdum amet aenean gravida.</p>
                                    <div className='d-flex align-items-center mt-2 mt-md-0 ms-4 ms-md-0 me-md-3'>
                                        <a href='/' className='bg_cart'>
                                            <img className='w_cart_17 m-2' src={cart} alt="cart" />
                                        </a>
                                        <a href='/' className='bg_cart ms-2'>
                                            <img className='w_cart_17 m_discord' src={discord} alt="discord" />
                                        </a>
                                        <a href="/" className='fw-semibold fs_xsm ff_Poppins
                                      text-white text_shadow bg_server py-2 px-3 ms-2'>SERVER</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex px-ms-3 px-2'>
                            <div className='position-relative col-12'>
                                <img className='w-100 bg_card_gradient min_height_200 border_radius_16' src={hero_slider} alt="card" />
                                <div className='position-absolute d-flex align-items-md-center bottom-0 w-100 justify-content-md-center flex-column flex-md-row pb-md-2'>
                                    <div className='d-flex align-items-center'>
                                        <img className='circles_w_21 mb-3' src={circles} alt="circles" />
                                        <div className='ms-2'>
                                            <p className='fw-semibold fs_md text-white ff_Poppins mb-0
                                     line_height_30'>345</p>
                                            <p className='text-white fw-normal fs_xsm
                                     ff_Poppins opacity_03 mb-0'>PLAYERS ACTIVE</p>
                                        </div>
                                    </div>
                                    <p className='text-white ff_Poppins fw-normal opacity_07
                             mw_445 mb-0 ms-4 me-4 fs_xsm'>Dignissim vitae
                                        integer odio posuere gravida sed dolor purus id. Sed
                                        ipsum et amet etiam interdum amet aenean gravida.</p>
                                    <div className='d-flex align-items-center mt-2 mt-md-0 ms-4 ms-md-0 me-md-3'>
                                        <a href='/' className='bg_cart'>
                                            <img className='w_cart_17 m-2' src={cart} alt="cart" />
                                        </a>
                                        <a href='/' className='bg_cart ms-2'>
                                            <img className='w_cart_17 m_discord' src={discord} alt="discord" />
                                        </a>
                                        <a href="/" className='fw-semibold fs_xsm ff_Poppins
                                 text-white text_shadow bg_server py-2 px-3 ms-2'>SERVER</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Hero