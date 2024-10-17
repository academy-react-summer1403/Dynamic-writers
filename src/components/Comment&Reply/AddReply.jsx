import { Field, Form, Formik } from 'formik'
import { SentIcon, SmileIcon } from 'hugeicons-react'
import React from 'react'
import { addCommentCourse } from '../../core/services/api/Comments/Add/AddCommendCourse'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { getItem } from '../../core/services/common/storage'
import { useNavigate } from 'react-router'

const AddReply = ({ commentId, courseId, setCheckAdd }) => {

  const navigate = useNavigate()

  const notifySuccess = (message) => {
    toast.success(message)
  }
  
  const notifyError = () => {
    toast.error(' درخواست شما ثبت نشد مقادیر رو با دقت وارد کنید ')
  }

  const addReply = async (value) => {

    const formData = new FormData()
    formData.append('Title', value.title )
    formData.append('Describe', value.describe)
    formData.append('CourseId', courseId)
    formData.append('CommentId', commentId)

    const response = await addCommentCourse(formData)
    const token = getItem('token')


    if(!token) {
        navigate('/login')
    }
    else if(response.success === true) {
        notifySuccess(response.message)
        setCheckAdd(false)
    }
    else{
        notifyError()
    }
  }

  return (
      <Formik
        initialValues={{title: '', describe: ''}}
        onSubmit={(value) => addReply(value)}
      >

        <Form className='w-full border border-[#3772FF] rounded-[24px] h-[72px] flex gap-4 p-4'>

            <button type='submit' className='size-10 min-w-10 min-h-10 bg-[#3772FF] rounded-full flex justify-center items-center'> <SentIcon className='size-5 text-white' /> </button>
            <button className='size-10 min-w-10 min-h-10 border border-[#F1F1F1] rounded-full flex justify-center items-center'> <SmileIcon className='size-5 text-blue-500' /> </button>

            <div className='w-full flex flex-col justify-between'>
                <Field name='title' placeholder='عنوان نظر خود را بنویسید' className='outline-none' />
                <div className='w-full border'></div>
                <Field name='describe' placeholder='متن نظر خود را بنویسید' className='outline-none' />
            </div>

        </Form>

      </Formik>
  )
}


export default AddReply
