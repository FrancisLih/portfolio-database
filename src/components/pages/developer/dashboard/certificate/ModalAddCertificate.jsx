import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { InputText,InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { StoreContext } from '../../../../../store/StoreContext'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'

const ModalAddCertificate = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsAdd(false))

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/certificate/${itemEdit.certificate_aid}` :`/v1/certificate`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["certificate"] });
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
        certificate_title : itemEdit ? itemEdit.certificate_title : "",
        certificate_image : itemEdit ? itemEdit.certificate_image : "",
        certificate_category : itemEdit ? itemEdit.certificate_category : "",
        certificate_description : itemEdit ? itemEdit.certificate_description : "",
        certificate_publish_date : itemEdit ? itemEdit.certificate_publish_date : "",
    }
    
    const yupSchema = Yup.object({
        certificate_title :Yup.string().required('Required'),
        certificate_image :Yup.string().required('Required'),
        certificate_category :Yup.string().required('Required'),
        certificate_description :Yup.string().required('Required'),
        certificate_publish_date :Yup.string().required('Required'),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Certificate</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
                  <Formik
                      initialValues={initVal}
                      validationSchema={yupSchema}
                      onSubmit={async (values) => {
                          mutation.mutate(values)
                      }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                      <div className='grow overflow-y-auto'>
                          
                      <div className="input-wrap">
                          <InputText
                              label="Title"
                              type="text"
                              name="certificate_title"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Category"
                              type="text"
                              name="certificate_category"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Image"
                              type="text"
                              name="certificate_image"
                          />
                      </div>
                      <div className="input-wrap">
                          <InputTextArea
                              label="Description"
                              type="text"
                              name="certificate_description"
                              className='h-[10rem] resize-none'
                          />
                      </div>
                      <div className="input-wrap">
                          <InputText
                              label="Publish Date"
                              type="text"
                              name="certificate_publish_date"
                          />
                      </div>
                      

                    
                      
                      </div>

                      <div className='form-action'>
                          <button className='btn btn-form btn--accent' type="submit">{mutation.isPending ? <SpinnerButton/>: "Add"}</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose}>Cancel</button>
                      </div>
                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
  </ModalWrapper>

  )
}

export default ModalAddCertificate