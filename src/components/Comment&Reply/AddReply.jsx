import { Field, Form, Formik } from 'formik'
import { SentIcon, SmileIcon } from 'hugeicons-react'
import React from 'react'
import { addCommentCourse } from '../../core/services/api/Comments/Add/AddCommendCourse'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { getItem } from '../../core/services/common/storage'
import { useNavigate } from 'react-router'
import { addReplyComment } from '../../core/services/api/Comments/Add/AddReplyComment'
import { addReplyNew } from '../../core/services/api/Comments/New/Add/AddReplyCommentNew'

const AddReply = ({ commentId, Oid, setCheckAdd }) => {

  const notifySuccess = (message) => {
    toast.dismiss()

    toast.success(message)
  }
  
  const notifyError = (message) => {
    toast.dismiss()

    toast.error(message)
  }

  const addReply = async (value) => {

    if(window.location.pathname.includes('CourseDetail')) {
      const formData = new FormData()
      formData.append('Title', value.title )
      formData.append('Describe', value.describe)
      formData.append('CourseId', Oid)
      formData.append('CommentId', commentId)
  
      const response = await addReplyComment(formData)
      // console.log(response)
  
        if(value.title.length < 10 || value.describe.length < 10){
          notifyError(" تعداد کاراکتر های امکان از 10 تا 390 است ")
        }
  
        if(response.success == true) {
            notifySuccess(response.message)
            setCheckAdd(false)
        }
        else{
            notifyError( ' درخواست شما ثبت نشد مقادیر رو با دقت وارد کنید ' )
        }
    }
    else if(window.location.pathname.includes('NewDetail')) {
      const raw = {
        title: value.title,
        describe: value.describe,
        newsId: Oid
      }
  
      const response = await addReplyNew(raw)
  
        if(value.title.length < 10 || value.describe.length < 10){
          notifyError(" تعداد کاراکتر های امکان از 10 تا 390 است ")
        }
  
        if(response.success === true) {
            notifySuccess(response.message)
            setCheckAdd(false)
        }
        else{
            notifyError( ' درخواست شما ثبت نشد مقادیر رو با دقت وارد کنید ' )
        }
    }

  }

  return (
      <Formik
        initialValues={{title: '', describe: ''}}
        onSubmit={(value) => addReply(value)}
      >

        <Form className='w-full border border-[#3772FF] rounded-[24px] h-fit flex gap-4 p-4'>

            <button type='submit' className='size-10 min-w-10 min-h-10 bg-[#3772FF] rounded-full flex justify-center items-center'> <SentIcon className='size-5 text-white' /> </button>
            <button className='size-10 min-w-10 min-h-10 border border-[#F1F1F1] flex rounded-full justify-center items-center'> <SmileIcon className='size-5 text-blue-500' /> </button>

            <div className='w-full flex flex-col justify-between'>
                <Field name='title' placeholder='عنوان نظر خود را بنویسید' className='outline-none bg-transparent' />
                <div className='w-full border'></div>
                <Field name='describe' placeholder='متن نظر خود را بنویسید' className='outline-none bg-transparent' />
            </div>

            <ToastContainer />

        </Form>
        

      </Formik>
  )
}


export default AddReply
