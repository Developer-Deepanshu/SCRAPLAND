import React from 'react'
import bottom_shadow from '../assets/img/svg/howWeAre_bottom_shadow.svg'
import top_shadow from '../assets/img/svg/top_shadow_how_we_are.svg'

function HowWeAre() {
    return (
        <>
            <div className='bg_HowWeAre position-relative'>
                <img className='position-absolute w-100 bottom-0' src={bottom_shadow} alt="shadow" />
                <img className='position-absolute w-100 top-0' src={top_shadow} alt="shadow" />
                <div className='line_how_we_are position-absolute top_20'></div>
                <div className='container py-5'>
                    <h2 className='ff_Inter fw_medium fs_lg text-white text-center pt-5'>
                        <span className='text_blue_gradient'>WHO</span> WE ARE?</h2>
                    <p className='ff_Poppins fw_medium fs_md text-white text-center m-auto mw_735 pb-5'>Tincidunt
                        laoreet integer ut aenean rhoncus. Pulvinar erat vitae facilisis facilisi ut
                        massa nec interdum laoreet. Morbi tristique dictum facilisis pharetra egestas sit et.
                        Velit nunc sapien mauris integer. Ornare habitasse nunc porta tincidunt pulvinar ut
                        risus.</p>
                </div>
            </div>
        </>
    )
}

export default HowWeAre