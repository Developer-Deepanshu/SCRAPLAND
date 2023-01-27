import React, { useState } from 'react'
import logo from '../assets/img/svg/logo_svg.svg'

function NavBar() {
  const [open, setOpen] = useState(false);
  if (open) {
    document.body.classList.add("overflow-hidden")
  }
  else {
    document.body.classList.remove("overflow-hidden")
  }
  return (
    <>
      <nav className='pt-5'>
        <div className='bg_nav_bar'>
          <div className='container'>
            <div className='d-flex align-items-center 
             justify-content-between'>
              <div className='d-flex align-items-center'>
                <a href="" className='d-inline-block position-absolute'>
                  <img className='w-100' src={logo} alt="logo" /></a>
                <div className={open ? "ms-0 nav_open " : "nav_open ms_n100"}>
                  <ul className='p-0 m-0 d-flex align-items-center py-3 flex-lg-row flex-column
                  justify-content-center justify-content-lg-between min_vh_max_lg'>
                    <li className='ms-lg-5 ps-lg-3'>
                      <a href="" className='ms-lg-5 d-inline-block fs_sm ff_Inter
               text-white fw-normal hover_nav_btn tranisition_0_3 underLineNav'>Store</a>
                    </li>
                    <li className='ms-lg-4 mt-4 mt-lg-0'>
                      <a href="" className='d-inline-block fs_sm ff_Inter
               text-white fw-normal hover_nav_btn tranisition_0_3 underLineNav'>Marketplace</a>
                    </li>
                    <li className='ms-lg-4 mt-4 mt-lg-0'>
                      <a href="" className='d-inline-block fs_sm ff_Inter
               text-white fw-normal hover_nav_btn tranisition_0_3 underLineNav'>Bans</a>
                    </li>
                    <li className='ms-lg-4 mt-4 mt-lg-0'>
                      <a href="" className='d-inline-block fs_sm ff_Inter
               text-white fw-normal hover_nav_btn tranisition_0_3 underLineNav'>Servers</a>
                    </li>
                    <li className='ms-lg-4 mt-4 mt-lg-0'>
                      <a href="" className='d-inline-block fs_sm ff_Inter
               text-white fw-normal hover_nav_btn tranisition_0_3 underLineNav'>Schedule</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <a href="" className='d-inline-block fs_sm ff_Inter
               text-white fw-normal hover_nav_btn tranisition_0_3 underLineNav'>Login</a>
                <div className="hamburger-menu d-lg-none position-relative z_index_2"
                  onClick={() => setOpen(!open)}>
                  <div className="bar-top"></div>
                  <div className="bar-middle"></div>
                  <div className="bar-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar