import React from 'react'
import { setIsShow } from '../../../../../store/StoreAction';
import { devBaseImgUrl } from '../../../../helpers/functions-general';
import { StoreContext } from '../../../../../store/StoreContext';
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';


const Certificate = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [info, setInfo] = React.useState(null)
    const {
        isLoading,
        isFetching,
        error,
        data: certificate,
      } = useQueryData(
        "/v1/certificate", // endpoint
        "get", // method
        "certificate", // key
      );

    //   const handleShowMore = (item) => {
    //     dispatch(setIsShow(true))
    //     setInfo(item)
    //   }
  return (
    // xl:h-[75rem] pb-10
    <>
   <div className='h-auto pb-10'> 
   <div className="container">
    <div className='h-[40rem]'>
        {isLoading ? (
            <SpinnerFetching />
        ):(
            <div className="cards grid grid-cols-3 justify-items-center gap-y-10" >
                {certificate?.data.map((item, key) => 
                (
                  <div className="card border w-[25rem] h-[18rem] rounded-md shadow-lg p-2" key={key}>
                  <img src={`${devBaseImgUrl}/${item.certificate_image}`}  alt="" />
                  <h1 className='text-center'>{item.certificate_title}</h1>
              </div>
                ))}
              
              
          </div>
        )}
          
      </div>
      </div></div>
      </>
  )
}

export default Certificate