import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_image_1 from '../assets/img/png/slider_1_Img.png'
import slider_image_2 from '../assets/img/png/slider_2_Img.png'
import gunsImg from '../assets/img/png/gunsImg.png'

function OurFeatures() {
    var slideNav = {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        vertical: true,
        autoplay: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: false,

                }
            }
        ]
    };
    var slide = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        dots: false,
        autoplay: true,
        centerMode: false,
    };
    const [slideNavText, setslideNavText] = useState();
    const [slideImage, setslideImage] = useState();
    return (
        <>
            <div className='container'>
                <h2 className='ff_Inter fw_medium fs_lg text-white text-center pt-5 mb-0 pb-md-5'>
                    OUR<span className='text_blue_gradient'>FEATURES!</span></h2>
                <div className='row mt-5 align-items-center flex-column-reverse flex-xl-row'>
                    <div className='col-xl-6 col-md-7 col-12'>
                        <Slider className='mt-5 imgSlider' {...slideNav} asNavFor={slideImage} ref={(slider1) => setslideNavText(slider1)}>
                            <div className='my-2 mw_480'>
                                <div className='ourfeatures_slider py-3 ps-4 mw_480'>
                                    <p className='fw-semibold ff_Inter  text-white mb-0 fs_md_bold'>REVIEW YOUR STATS!</p>
                                    <p className='fw_medium ff_Poppins text-white opacity_05 fs_sm_bold mb-0'>Tincidunt
                                        laoreet integer ut aenean rhoncus.</p>
                                </div>
                            </div>
                            <div className='my-2 mw_480'>
                                <div className='ourfeatures_slider py-3 ps-4 mw_480'>
                                    <p className='fw-semibold ff_Inter  text-white mb-0 fs_md_bold'>REVIEW YOUR STATS!</p>
                                    <p className='fw_medium ff_Poppins text-white opacity_05 fs_sm_bold mb-0'>Tincidunt
                                        laoreet integer ut aenean rhoncus.</p>
                                </div>
                            </div>
                            <div className='my-2 mw_480'>
                                <div className='ourfeatures_slider py-3 ps-4 mw_480'>
                                    <p className='fw-semibold ff_Inter  text-white mb-0 fs_md_bold'>REVIEW YOUR STATS!</p>
                                    <p className='fw_medium ff_Poppins text-white opacity_05 fs_sm_bold mb-0'>Tincidunt
                                        laoreet integer ut aenean rhoncus.</p>
                                </div>
                            </div>
                            <div className='my-2 mw_480'>
                                <div className='ourfeatures_slider py-3 ps-4 mw_480'>
                                    <p className='fw-semibold ff_Inter  text-white mb-0 fs_md_bold'>REVIEW YOUR STATS!</p>
                                    <p className='fw_medium ff_Poppins text-white opacity_05 fs_sm_bold mb-0'>Tincidunt
                                        laoreet integer ut aenean rhoncus.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='col-xl-6'>
                        <Slider className='imgSlilder' {...slide} asNavFor={slideNavText} ref={(slider2) => setslideImage(slider2)}>
                            <div>
                                <img className='w_sm_372 w_xsm_300 m-auto' src={slider_image_1} alt="graph" />
                            </div>
                            <div>
                                <img className='w_sm_372 w_xsm_300 m-auto' src={slider_image_2} alt="play" />
                            </div>
                            <div >
                                <img className='w_sm_372 w_xsm_300 m-auto' src={gunsImg} alt="gunsImg" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFeatures