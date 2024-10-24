import React,{useState} from 'react'
import { Field, Formik,ErrorMessage,Form } from 'formik'
import { useOutletContext } from 'react-router-dom'
import { TelegramIcon,Linkedin02Icon } from 'hugeicons-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateLinkInProf from '../../core/services/api/Panel/UpdateLinkInProf'
import * as yup from 'yup'
const Likes = () => {
  const [profile]=useOutletContext();
  const [InitialValue, setInitialValue] = useState({
    telegram: profile.telegramLink || "", 
    linkdin: profile.linkdinProfile || ""
  });  
  const telegramRegex = "^(https?:\/\/)?(www\.)?(t(elegram)?\.(me|org))(\/[a-zA-Z0-9_-]{5,32})?\/?$";
  const linkdinRegex = "^(https?:\/\/)?(www\.)?linkedin\.com\/(in|company|school)\/[a-zA-Z0-9_-]+\/?$";
  const notifySuccess = (massage) => toast.success(massage,{position:"top-center",theme:"dark"});

  const onSubmit= async(el)=>{
    if (profile.latitude==null){
      profile.latitude=32.0
      profile.longitude=53.0
    }
    if(profile.telegramLink==null){
      profile.telegramLink=""
    }
    if(profile.linkdinProfile==null){
      profile.linkdinProfile=""
    }
    let massage=await UpdateLinkInProf(profile,el.linkdin,el.telegram)
    notifySuccess(massage.message)
  }
  const validation=yup.object().shape(
    {
      telegram:yup.string().matches(new RegExp(telegramRegex),"لینک تلگرام معتبر نیست"),
      linkdin:yup.string().matches(new RegExp(linkdinRegex),"لینک لینکدین معتبر نیست")
    }
  )
  return (
    <div  className='flex flex-col h-[500px] p-[40px] w-[100%] items-end'>
      <Formik initialValues={InitialValue} onSubmit={onSubmit} enableReinitialize={true} validationSchema={validation}>
        <Form className='flex flex-col h-[50%] md:px-5  gap-8 pt-[100px] items-end justify-center md:w-[50%] w-[90%] lg:w-[90%]'>
          <div className='flex flex-col items-end gap-2 h-[120px] flex-grow-2 w-[100%] relative'>
            <span className='font-[700] text-[16px]'>تلگرام</span>
            <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-12 w-[100%] h-[48px]' placeholder="لینک تلگرام خود را وارد کنید" name="telegram"/>
            <ErrorMessage name='telegram' className='text-red-700 text-[14px]' component={"p"}/>
            <TelegramIcon className='w-[24px] h-[24px] absolute top-11 right-3' color='blue'/>
          </div>
          <div className='flex flex-col items-end gap-2 h-[120px] flex-grow-2 w-[100%] relative'>
            <span className='font-[700] text-[16px]'>لینکدین</span>
            <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-12 w-[100%] h-[48px]' placeholder="لینک لینکدین خود را وارد کنید" name="linkdin"/>
            <ErrorMessage name='linkdin' className='text-red-700 text-[14px]' component={"p"}/>
            <Linkedin02Icon className='w-[24px] h-[24px] absolute top-11 right-3' color='blue'/>
          </div>
          <button type='submit' className='bg-[#3772FF] px-[24px] py-[14px] rounded-[64px] text-white font-[700] text-[20px]'> اعمال تغییرات</button>
        </Form>
      </Formik>
      <ToastContainer/>
    </div>
  )
}

export default Likes