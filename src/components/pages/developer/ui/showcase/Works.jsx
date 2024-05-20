import React from 'react'

const Works = () => {
  return (
    <div className='h-[40rem]'>
          <div className="cards grid grid-cols-3 justify-items-center gap-y-10">
              <div className="card border w-[25rem] h-[18rem] rounded-md shadow-lg p-2 ">
                  <img src="img/project-1.png" className='' alt="" />
                  <h1 className='text-center'>Project 1</h1>
              </div>
              <div className="card border w-[25rem] h-[18rem] rounded-md shadow-lg p-2">
                  <img src="img/project-2.png" alt="" />
                  <h1 className='text-center'>Project 2</h1>
              </div>
              <div className="card border w-[25rem] h-[18rem] rounded-md shadow-lg p-2">
                  <img src="img/project-3.png" alt="" />
                  <h1 className='text-center'>Project 3</h1>
              </div>
              <div className="card border w-[25rem] h-[18rem] rounded-md shadow-lg p-2">
                  <img src="img/project-4.png" alt="" />
                  <h1 className='text-center'>Project 4</h1>
              </div>
              <div className="card border w-[25rem] h-[18rem] rounded-md shadow-lg p-2">
                  <img src="img/project-5.png" alt="" />
                  <h1 className='text-center'>Project 5</h1>
              </div>
              
          </div>
      </div>
  )
}

export default Works