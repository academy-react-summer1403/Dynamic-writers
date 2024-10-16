import { Field, Formik } from 'formik'
import React,{useState,useEffect} from 'react'
import { Form,useOutletContext } from 'react-router-dom'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import { Calendar03Icon } from 'hugeicons-react'

import "react-circular-progressbar/dist/styles.css";


const InformationUser = () => {
  const profile=useOutletContext();
  const [InitialValue, setInitialValue] = useState({field1:profile.fName,field2:profile.lName,selectedOption:profile.gender.toString(),field3:profile.userAbout,field4:profile.phoneNumber,field5:profile.nationalCode,birthDate:"",field7:profile.email,field8:profile.homeAdderess})
  const OnClick=()=>{

  }
  const [selectedDate, setSelectedDate] = useState(`${profile.birthDay ? profile.birthDay : ''}`);

  useEffect(() => {
    jalaliDatepicker.startWatch();

  }, []);
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className='flex flex-row-reverse p-[40px]'>
            <Formik  initialValues={InitialValue} onSubmit={OnClick} enableReinitialize={true}>
            <Form className='w-[80%] flex flex-row-reverse flex-wrap gap-12 h-auto px-5 items-center justify-center'>
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>نام</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="نام خود را وارد کنید" name="field1" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>نام خانوادگی</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[48px]' placeholder="نام خانوادگی خود را وارد کنید" name="field2" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[150px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>درباره من</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right p-3 placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[93px]' as="textarea" row="5" placeholder="یک متن درباره خود را وارد کنید" name="field3" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-3 w-[286px]'>
                  <span className='font-[700] text-[16px]'>شماره همراه</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="شماره همراه خود را وارد کنید" name="field4" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>کد ملی</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="کد ملی خود را وارد کنید" name="field5" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[260px] relative'>
                  <span className='font-[700] text-[16px]'>تاریخ تولد</span>
                      <Calendar03Icon className='absolute top-11 left-3'/>
                      <input
                        data-jdp
                        onChange={handleDateChange}
                        placeholder='تاریخ تولد خود را وارد کنید'
                        className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px] flex-grow-2'
                        value={selectedDate}
                      />
                    
                </div>
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[220px]'>
                  <span className='font-[700] text-[16px]'>جنسیت</span>
                  <div className='flex flex-row-reverse gap-10'>
                    
                    <div className='flex flex-row gap-3'>
                      <Field  type="radio" name="selectedOption" value="false"/>
                      <span className='font-[700] text-[18px]'>مرد</span>
                    </div>
                    <div className='flex flex-row gap-3'>
                      <Field type="radio" name="selectedOption" value="true" />
                      <span className='font-[700] text-[18px]'>زن</span>
                    </div>
                    <span className='text-[14px] font-[500] text-[#3772FF]'>انتخاب کنید</span>
                  </div>
                </div>
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>ایمیل</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="ایمیل خود را وارد کنید" name="field7" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[150px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>آدرس سکونت</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] p-3 text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[93px]' as="textarea" row="5" placeholder="آدرس سکونت خود را وارد کنید" name="field8" />
                </div>
              </Form>

            </Formik>
        <div className=' h-[500px] w-[50%] flex justify-center'>
          <div className='flex flex-col justify-center gap-10 items-center border-[1px] rounded-[16px] h-[287px] w-[259px] relative'>
            <span className='absolute top-3 right-3 font-[700]'>وضعیت اطلاعات حساب</span>
            <div className='w-[140px] h-[140px] mt-10'>
              <CircularProgressbar
                value={profile.profileCompletionPercentage}
                text={`${profile.profileCompletionPercentage}%`}
                strokeWidth={5}
                styles={buildStyles({textColor:`${profile.profileCompletionPercentage==100 ? "#57b4f3":"#FFC619"}`,textSize:"30px",pathColor:`${profile.profileCompletionPercentage==100 ? "#467ccd":"#FFC619"}`,trailColor:"#f0f0f0",TextAlignment:"Center" })}
              />
            </div>
            <span className={`${profile.profileCompletionPercentage==100 ? "text-[#467ccd]":"text-[#FFC619]"} text-[14px]`}> اطلاعات حساب‌ کابری شما تکمیل {profile.profileCompletionPercentage==100 ? "است":"نیست"}</span>
          </div>
        </div>
    </div>
  )
}

export default InformationUser