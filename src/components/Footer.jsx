import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='left-logo'>
            <img src="https://terralogic.academy/_next/static/media/Logo-White.ced873e8.svg" alt="foooter-logo.jpeg" />
            <p>Terralogic &copy; 2025.All rights reserved</p>
        </div>

        <div className='right-content'>
            <ul className='icon-list'>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-x-twitter"></i></li>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer