import React,{useState} from 'react'
import { Field, Formik } from 'formik'
import { Form,useOutletContext } from 'react-router-dom'
import { TelegramIcon,Linkedin02Icon } from 'hugeicons-react'

const Likes = () => {
  const profile=useOutletContext();
  const [InitialValue, setInitialValue] = useState({telegram:profile.telegramLink,linkdin:profile.linkdinProfile})
  const OnClick=()=>{

  }
  return (
    <div  className='flex flex-col h-[500px] p-[40px] w-[100%] items-end'>
      <Formik initialValues={InitialValue} onSubmit={OnClick} enableReinitialize={true}>
        <Form className='flex flex-col h-[50%] px-5 items-end justify-center w-[50%]'>
          <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[100%] relative'>
            <span className='font-[700] text-[16px]'>تلگرام</span>
            <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-12 w-[100%] h-[48px]' placeholder="لینک تلگرام خود را وارد کنید" name="telegram"/>
            <TelegramIcon className='w-[24px] h-[24px] absolute top-11 right-3' color='blue'/>
          </div>
          <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[100%] relative'>
            <span className='font-[700] text-[16px]'>لینکدین</span>
            <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-12 w-[100%] h-[48px]' placeholder="لینک لینکدین خود را وارد کنید" name="linkdin"/>
            <Linkedin02Icon className='w-[24px] h-[24px] absolute top-11 right-3' color='blue'/>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Likes