import { Field, Formik,Form ,ErrorMessage} from 'formik'
import React,{useState,useEffect} from 'react'
import { useOutletContext } from 'react-router-dom'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import { Calendar03Icon } from 'hugeicons-react'
import * as yup from 'yup'
import "react-circular-progressbar/dist/styles.css";
import jMoment from 'moment-jalaali'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateInformation from '../../core/services/api/Panel/UpdateInformation'

const InformationUser = () => {
  const [profile]=useOutletContext();
  
  const [InitialValue, setInitialValue] = useState({field1:profile.lName,field2:profile.fName,selectedOption:profile.gender.toString(),field3:profile.userAbout,field4:profile.phoneNumber,field5:profile.nationalCode,birthDate:profile.birthDay,field7:profile.email,field8:profile.homeAdderess})
  const nationalIdRegex = "^[1-9]{10}$";
  const phoneRegex = "^09[0-9]{9}$";
  const [selectedDate, setSelectedDate] = useState(`${profile.birthDay ? jMoment(profile.birthDay).locale('fa').format('jYYYY jMMMM jD') : ''}`);
  const notifySuccess = (massage) => toast.success(massage,{position:"top-center",theme:"dark"});
  const notifyError = () => toast.warn("تاریخ تولد نامعتبر می باشد",{position:"top-center",theme:"dark"});

  const onSubmit= async(el)=>{
    let valueOption=el.selectedOption
    if (el.selectedOption=="false")
      valueOption=false
    else
      valueOption=true

    let massage=await UpdateInformation(profile,el.field1,el.field2,el.field3,el.field8,el.field5,valueOption,el.birthDate)
    if(massage.message=="تاریخ تولد نامعتبر می باشد"){
      notifyError()
    }else{
      notifySuccess(massage.message)
    }
  }

  useEffect(() => {

    jalaliDatepicker.startWatch();
    DateBirth.addEventListener('change',handleDateChange)

  }, []);

  const handleDateChange = (e) => {
    const value=e.target.value
    const valueDate=jMoment(value,'jYYYY/jMM/jDD').format('YYYY-MM-DD[T]HH:mm:ss')
    const valueToShow=jMoment(valueDate).locale('fa').format('jYYYY jMMMM jD')

    setSelectedDate(String(valueToShow));

    setInitialValue({...InitialValue,birthDate:String(valueDate)})
  };
 
  const validation=yup.object().shape(
    {
      field1:yup.string().required('این فیلد اجباریست'),
      field2:yup.string().required('این فیلد اجباریست'),
      field3:yup.string().required('این فیلد اجباریست').min(11, "تعداد کارکتر های درباره ی من باید از 10 بیشتر باشد"),
      field4:yup.string().required('این فیلد اجباریست').matches(phoneRegex,"شماره تلفن معتبر نیست"),
      field5:yup.string().required('این فیلد اجباریست').length(10, "تعداد کاراکتر های کد ملی باید 10 رقم باشد"),
      field7:yup.string().required('این فیلد اجباریست').email(),
      field8:yup.string().required('این فیلد اجباریست').min(11," تعداد کارکتر های آدرس محل سکونت باید از 10 بیشتر باشد")
    }
  )
  return (
        <div className='flex flex-col-reverse p-0 items-center md:gap-8 lg:gap-0 xl:gap-14  md:flex-row-reverse md:p-[40px] md:items-start'>
            <Formik  initialValues={InitialValue} onSubmit={onSubmit} enableReinitialize={true} validationSchema={validation}>
            <Form className='w-[80%] flex flex-row-reverse flex-wrap gap-12 h-auto px-5 py-5 items-center justify-start '>
                <div className='flex flex-col items-end gap-2 h-[120px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>نام</span>
                  <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="نام خود را وارد کنید" name="field1" />
                  <ErrorMessage name='field1' className='text-red-700 text-[14px]' component={"p"}/>
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[120px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>نام خانوادگی</span>
                  <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[48px]' placeholder="نام خانوادگی خود را وارد کنید" name="field2" />
                  <ErrorMessage name='field2' className='text-red-700 text-[14px]' component={"p"}/>
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[150px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>درباره من</span>
                  <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right p-3 placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[93px] min-h-[93px]' as="textarea" row="5" placeholder="یک متن درباره خود را وارد کنید" name="field3" />
                  <ErrorMessage name='field3' className='text-red-700 text-[14px]' component={"p"}/>
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[120px] flex-grow-3 w-[286px]'>
                  <span className='font-[700] text-[16px]'>شماره همراه</span>
                  <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="شماره همراه خود را وارد کنید" name="field4" />
                  <ErrorMessage name='field4' className='text-red-700 text-[14px]' component={"p"}/>
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[120px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>کد ملی</span>
                  <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="کد ملی خود را وارد کنید" name="field5" />
                  <ErrorMessage name='field5' className='text-red-700 text-[14px]' component={"p"}/>
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[260px] relative'>
                  <span className='font-[700] text-[16px]'>تاریخ تولد</span>
                      <Calendar03Icon className='absolute top-11 left-3'/>
                      <input
                        data-jdp
                        type="text"
                        id='DateBirth'
                        onChange={handleDateChange}
                        placeholder='تاریخ تولد خود را وارد کنید'
                        className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px] flex-grow-2'
                        value={selectedDate}
                      />
                    
                </div>
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[220px]'>
                  <span className='font-[700] text-[16px]'>جنسیت</span>
                  <div className='flex flex-row-reverse gap-10'>
                    
<<<<<<< HEAD
                    <div className='flex flex-row items-center gap-3'>
                      <Field  type="radio" name="selectedOption" value="false" className="cursor-pointer"/>
                      <span className='font-[700] text-[18px]'>مرد</span>
                    </div>
                    <div className='flex flex-row items-center gap-3'>
                      <Field type="radio" name="selectedOption" value="true" className="cursor-pointer"/>
=======
                    <div className='flex flex-row gap-3'>
                      <Field  type="radio" name="selectedOption" value="false" className="dark:bg-slate-900 cursor-pointer"/>
                      <span className='font-[700] text-[18px]'>مرد</span>
                    </div>
                    <div className='flex flex-row gap-3'>
                      <Field type="radio" name="selectedOption" value="true" className="dark:bg-slate-900 cursor-pointer"/>
>>>>>>> 237a49f5cfdfadee0edc01115d7540ed0ac1d852
                      <span className='font-[700] text-[18px]'>زن</span>
                    </div>
                    <span className='text-[14px] font-[500] text-[#3772FF] whitespace-nowrap'>انتخاب کنید</span>
                  </div>
                </div>
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>ایمیل</span>
                  <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="ایمیل خود را وارد کنید" name="field7" />
                  <ErrorMessage name='field7' className='text-red-700 text-[14px]' component={"p"}/>
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[150px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>آدرس سکونت</span>
                  <Field className='bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] p-3 text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[93px] min-h-[93px]' as="textarea" row="5" placeholder="آدرس سکونت خود را وارد کنید" name="field8" />
                  <ErrorMessage name='field8' className='text-red-700 text-[14px]' component={"p"}/>
                </div>
                <button type='submit' className='bg-[#3772FF] px-[24px] py-[14px] rounded-[64px] text-white font-[700] text-[20px]'> اعمال تغییرات</button>

              </Form>

            </Formik>
<<<<<<< HEAD
        <div className=' h-[300px] w-[100%] flex justify-center md:pr-16 pr-10 md:h-[500px] lg:pr-0  md:p-0 md:w-[50%]'>
        <div className='flex flex-col justify-center gap-10 items-center h-[287px] w-[100%] relative rounded-[16px] md:w-[259px] md:border-[1px] md:border-[#E4E4E4]'>
            <span className='absolute top-3 right-3 font-[700] whitespace-nowrap'>وضعیت اطلاعات حساب</span>
=======
        <div className=' h-[500px] w-[50%] flex justify-center'>
          <div className='flex flex-col justify-center gap-10 items-center border-[1px] dark:border-gray-500 rounded-[16px] h-[287px] w-[259px] relative'>
            <span className='absolute top-3 right-3 font-[700]'>وضعیت اطلاعات حساب</span>
>>>>>>> 237a49f5cfdfadee0edc01115d7540ed0ac1d852
            <div className='w-[140px] h-[140px] mt-10'>
              <CircularProgressbar
                value={profile.profileCompletionPercentage}
                text={`${profile.profileCompletionPercentage}%`}
                strokeWidth={5}
                styles={buildStyles({textColor:`${profile.profileCompletionPercentage >= 80 ? "#57b4f3":"#FFC619"}`,textSize:"30px",pathColor:`${profile.profileCompletionPercentage >= 80 ? "#467ccd":"#FFC619"}`,trailColor:"#f0f0f0",TextAlignment:"Center" })}
              />
            </div>
<<<<<<< HEAD
            <span className={`${profile.profileCompletionPercentage==100 ? "text-[#467ccd]":"text-[#FFC619]"} text-[14px] whitespace-nowrap`}> اطلاعات حساب‌ کابری شما تکمیل {profile.profileCompletionPercentage==100 ? "است":"نیست"}</span>
=======
            <span className={`${profile.profileCompletionPercentage >= 80 ? "text-[#467ccd]":"text-[#FFC619]"} text-[14px]`}> اطلاعات حساب‌ کابری شما تکمیل {profile.profileCompletionPercentage==100 ? "است":"نیست"}</span>
>>>>>>> 237a49f5cfdfadee0edc01115d7540ed0ac1d852
          </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default InformationUser