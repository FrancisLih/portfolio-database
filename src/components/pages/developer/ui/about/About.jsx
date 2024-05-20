import React from 'react'

const About = () => {
  return (
    <div id='about' className="max-w-[1200px] mx-auto px-4 h-screen">
    <div className='grid grid-cols-2 gap-13 xs:grid grid-cols-1 p-5'>
        <div>
            <img src="/img/img-about.png" className='2xl:rounded-full shadow-md ' alt="" />
        </div>
        <div className='self-center '>
            <h5 className='font-thin text-6xl pb-3 '>About Me</h5>
            <h2 className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab libero explicabo, dolores magni hic necessitatibus fuga sunt fugit, dolorum sint omnis aliquid asperiores inventore itaque deserunt cum. Fugiat placeat quidem magni commodi adipisci officia libero, soluta sapiente! Unde, minim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, labore!</h2>
            <h3></h3>
                
        </div>
    </div>
    </div>
  )
}

export default About