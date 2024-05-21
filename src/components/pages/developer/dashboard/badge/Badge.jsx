import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import BadgeTable from './BadgeTable'

import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'
import ModalAddBadge from './ModalAddBadge'

const Badge = () => {

    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSearch] = React.useState(false)
    const [keyword, setKeyword] = React.useState('');
    const [itemEdit, setItemEdit] = React.useState('');
    const {
        isLoading,
        isFetching,
        error,
        data: badge,
      } = useQueryData(
        isSearch ? "/v1/badge/search" : "/v1/badge", // endpoint
        isSearch ? "post" : "get", // method
        "badge", // key
        {
            searchValue: keyword
        }
      );

      const handleAdd = () => {
        dispatch(setIsAdd(true))
        setItemEdit(null)
    }

  return (
    <section className='flex overflow-x-hidden'>
            <Navigation/>
            <main className='w-[calc(100%-250px)]'>
                <Header/>
                <div className='flex relative'>
            <div className={`main-wrapper transition-all px-4 py-3 w-full`}>
                <div className='flex justify-between items-center'>
                <h1>Badge</h1>
                    {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                </div>


            <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                    <h2>Search</h2>
                <button className='btn btn--accent' onClick={handleAdd}>
                    <FiPlus/> New
                </button>
            </div>

           <BadgeTable isLoading={isLoading} badge={badge} isFetching={isFetching} setItemEdit={setItemEdit}/>
            </div>
            {/* <StudentInformation setShowInfo={setShowInfo} studentInfo={studentInfo}/> */}
            </div>
            </main>
            {store.isAdd && <ModalAddBadge itemEdit={itemEdit}  />}
            {store.error && <ModalError position="center"/>}
            {store.success && <Toast/>}
        </section>
  )
}

export default Badge