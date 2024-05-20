import React from 'react'

const Header = () => {
  return (
    <header className='header  p-10 '>
        <div className='flex justify-between'>
            <img src="https://via.placeholder.com/80x40" className=' object-cover' alt="" />


            <ul className='nav mx-auto flex gap-20'>
                <li className='nav-link'><a href="#home">HOME</a></li>
                <li className='nav-link'><a href="#about">ABOUT</a></li>
                <li className='nav-link'><a href="#portfolio">PORTFOLIO</a></li>
                <li className='nav-link'><a href="#skills">SKILLS</a></li>
                <li className='nav-link'><a href="#">CONTACT</a></li>
            </ul>

        </div>
    </header>
  )
}

export default Header