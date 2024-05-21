import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { InputFileUpload,InputText,InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { StoreContext } from '../../../../../store/StoreContext'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import useUploadPhoto from '../../../../custom-hook/useUploadPhoto'

const ModalAddWorks = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsAdd(false))

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/works/${itemEdit.works_aid}` :`/v1/works`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["works"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly Added.`));
        } else 
        
        if (!data.success){
            dispatch(setError(true));
            dispatch(setMessage(data.error));
        }
        },
    });

    const initVal = {
        works_title : itemEdit ? itemEdit.works_title : "",
        works_image : itemEdit ? itemEdit.works_image : "",
        // works_category : itemEdit ? itemEdit.works_category : "",
        works_description : itemEdit ? itemEdit.works_description : "",
        // works_publish_date : itemEdit ? itemEdit.works_publish_date : "",
    }
    
    const yupSchema = Yup.object({
        works_title :Yup.string().required('Required'),
        // works_image :Yup.string().required('Required'),
        // works_category :Yup.string().required('Required'),
        works_description :Yup.string().required('Required'),
        // works_publish_date :Yup.string().required('Required'),
    })

    const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
      );

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-modal text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Works</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
              <Formik
                       initialValues={initVal}
                       validationSchema={yupSchema}
                       onSubmit={async (values) => {
                        uploadPhoto()
                        mutation.mutate({...values, 
                            works_image:
                            (itemEdit && itemEdit.works_image === "") || photo
                              ? photo === null
                                ? itemEdit.works_image
                                : photo.name
                              : values.works_image,})
                      }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                      <div className='grow overflow-y-auto'>

                      <div className="input-wrap">

                                        {photo || (itemEdit && itemEdit.works_image !== "") ? (
                                        <img
                                        src={
                                        photo
                                        ? URL.createObjectURL(photo) // preview
                                        : itemEdit.works_image // check db
                                        ? devBaseImgUrl + "/" + itemEdit.works_image
                                        : null
                                        }
                                        alt="Photo"
                                        className="rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto"
                                        />
                                        ) : (
                                        <span className="min-h-20 flex items-center justify-center">
                                        <span className="text-primary mr-1">Drag & Drop</span>{" "}
                                        photo here or{" "}
                                        <span className="text-primary ml-1">Browse</span>
                                        </span>
                                        )}

                                        {(photo !== null ||
                                        (itemEdit && itemEdit.image !== "")) && (
                                        <span className="min-h-10 flex items-center justify-center">
                                        <span className="text-primary mr-1">Drag & Drop</span>{" "}
                                        photo here or{" "}
                                        <span className="text-primary ml-1">Browse</span>
                                        </span>
                                        )}

                                        {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                                        <InputFileUpload
                                        label="Photo"
                                        name="Photo"
                                        type="file"
                                        id="myFile"
                                        accept="image/*"
                                        title="Upload photo"
                                        onChange={(e) => handleChangePhoto(e)}
                                        onDrop={(e) => handleChangePhoto(e)}
                                        className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full "
                                        />
                                    </div>

                      <div className="input-wrap">
                          <InputText
                              label="Title"
                              type="text"
                              name="works_title"
                          />
                      </div>
                      {/* <div className="input-wrap">
                          <InputText
                              label="Category"
                              type="text"
                              name="works_category"
                          />
                      </div> */}

                      {/* <div className="input-wrap">
                          <InputText
                              label="Image"
                              type="text"
                              name="works_image"
                          />
                      </div> */}

                      <div className="input-wrap">
                      <InputTextArea
                              label="Description"
                              type="text"
                              name="works_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>
                      {/* <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="works_publish_date"
                          />
                      </div> */}

                    
                      
                      </div>

                      <div className='form-action'>
                          <button className='btn btn-form btn--primary' type="submit"> {mutation.isPending ?<SpinnerButton/> : "Add"}</button>
                          <button className='btn btn-form btn--secondary' type="button" onClick={handleClose}>Cancel</button>
                      </div>
                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
  </ModalWrapper>

  )
}

export default ModalAddWorks