import React from 'react'
import Footer from '../footer/Footer'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';
import { devBaseImgUrl } from '../../../../helpers/functions-general';
import useQueryData from '../../../../custom-hook/useQueryData';
import { StoreContext } from '../../../../../store/StoreContext';

const Experience = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [info, setInfo] = React.useState(null)
    const {
        isLoading,
        isFetching,
        error,
        data: experience,
      } = useQueryData(
        "/v1/experience", // endpoint
        "get", // method
        "experience", // key
      );
  return (
  <>
  <section className="experience  h-auto pt-10">
  <div id='skills' className=''>
        <h1 className='font-extrabold text-center text-6xl text-secondary p-10'>SKILLS</h1>

        {isLoading ? (
            <SpinnerFetching />
        ) : (
            <div className="container mx-auto grid grid-cols-3 gap-[1rem] justify-center items-center text-center">
                  {experience?.data.map((item, key) => 
                (
                    <div className="skill-box mx-auto  w-[50%]" key={key}>
                    <div className="skill-title" >
                        <div className="img">
                            <img src={`${devBaseImgUrl}/${item.experience_image}`} className='skill-icon' alt="" />
                        </div>
                    <h3 className='p-2 font-semibold'>{item.experience_title}</h3>
                </div>    </div>                ))}
        
            
        </div>
        )
    }
        
        
       
    </div>
    </section>
    <Footer/>
  </>
    
  )
}

export default Experience