import React from 'react'
import Footer from '../footer/Footer'

const Experience = () => {
  return (
    <div id='skills' className='h-screen'>
        <h1 className='font-extrabold text-center text-6xl text-secondary p-10'>SKILLS</h1>
        <div className="container mx-auto  grid grid-cols-3 gap-[1rem] justify-center items-center text-center">
            <div className="skill-box mx-auto  w-[50%]  ">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/img/figma-logo.svg"  className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>Figma</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quo?</p>
            </div>
            <div className="skill-box mx-auto w-[50%]">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/img/html-logo.svg"  className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>HTML</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quo?</p>
            </div>
            <div className="skill-box mx-auto w-[50%]">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/img/css-logo.svg"  className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>CSS</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quo?</p>
            </div>
            <div className="skill-box mx-auto w-[50%]">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/img/sass-logo.svg"  className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>SCSS</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quo?</p>
            </div>
            <div className="skill-box mx-auto w-[50%]">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/img/tailwind-logo.svg"  className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>Tailwind</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quo?</p>
            </div>
            <div className="skill-box mx-auto w-[50%]">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/img/react-logo.svg"  className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>React.JS</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quo?</p>
            </div>
            <div className="skill-box mx-auto w-[50%]">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/img/wordpress-logo.svg"  className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>Wordpress</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quo?</p>
            </div>
            <div className="skill-box mx-auto w-[50%]">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/img/mysql-logo.svg"  className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>MySQL</h3>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quo?</p>
            </div>
            
        </div>
        <Footer/>
    </div>
    
  )
}

export default Experience