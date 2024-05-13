import React from 'react'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsActive, setIsAdd, setIsDelete } from '../../../../../store/StoreAction'

const CertificateTable = ({isLoading, isFetching, certificate, setItemEdit}) => {

    const {store, dispatch} = React.useContext(StoreContext)
    const [isArchiving, setIsArchiving] = React.useState(0);
    const [id, setId] = React.useState('')

    let counter = 1

    const handleArchive = (item) => {
        dispatch(setIsActive(true));
        setId(item.certificate_aid)
        setIsArchiving(0)
    }
    const handleRestore = (item) => {
        dispatch(setIsActive(true));
        setId(item.certificate_aid)
        setIsArchiving(1)
    }

    const handleDelete = (item) => {
        dispatch(setIsDelete(true))
        setId(item.certificate_aid)
    }
    const handleEdit = (item) => {
        dispatch(setIsAdd(true))
        setItemEdit(item)
    } 


  return (
    <>
    <div className="table-wrapper relative">
   {isFetching && <SpinnerFetching/>}
        <table>
            <thead>
                <tr >
                    <th className='w-[20px]'>#</th>
                    <th className='w-[150px]'>Image</th>
                    <th className='w-[80px]'>Title</th>
                    <th className='w-[80px]'>Description</th>
                    <th className='w-[80px]'>Active</th>
                    <th className='w-[80px]'>Published</th>
                    <th className='w-[100px]'>Action</th>
                </tr>
            </thead>
            <tbody>
            {isLoading && ( 
                    <tr>
                        <td colSpan={9}>
                            <TableLoader count="20" cols="4"/>
                        </td>
                    </tr>)
                    }

                    {certificate?.data.length === 0 && (
                        <tr>
                            <td colSpan={9}>
                                <NoData/>
                            </td>
                        </tr>
                    )}
                
                    {certificate?.data.map((item,key)=>(
                         <tr key={key}>
                         <td>{counter++}</td>
                         <td>{item.certificate_image}</td>
                         <td>{item.certificate_title}</td>
                         <td>{item.certificate_description}</td>
                         <td>{item.certificate_is_active}</td>
                         <td>{item.certificate_date_published}</td>
                         <td className='table-action'>
                         <ul>
                             {item.certificate_is_active ? (
                                 <>
                                     <li><button onClick={()=>handleEdit(item)} className="tooltip" data-tooltip="Edit"><LiaEdit/></button></li>
                                     <li><button onClick={()=>handleArchive(item)} className="tooltip" data-tooltip="Archive"><PiArchive /></button></li>
                                 </>
                             ) : (
                                 <>
                                 <li><button onClick={()=>handleRestore(item)} className="tooltip" data-tooltip="Restore" ><LiaHistorySolid/></button></li>
                                 <li><button onClick={()=>handleDelete(item)} className="tooltip" data-tooltip="Delete"><LiaTrashAltSolid/></button></li></>
                             )}
                         </ul>
                         </td>
                     </tr>
                    ))
                }     
                                     
                    
            </tbody>
        </table>
    </div>
    {store.isActive && <ModalConfirm position="center" queryKey="certificate" endpoint={`/v1/certificate/active/${id}`} isArchiving={isArchiving}/>}
    {store.isDelete && <ModalDelete position="center" queryKey="certificate" endpoint={`/v1/certificate/${id}`} />}
    </>
  )
}

export default CertificateTable