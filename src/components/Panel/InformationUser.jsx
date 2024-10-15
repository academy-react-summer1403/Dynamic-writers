import { Field, Formik } from 'formik'
import React,{useState} from 'react'
import { Form } from 'react-router-dom'
import PersianDatePicker from '@skhazaei/persian-date-picker';
const InformationUser = () => {

  const [startDate, setStartDate] = useState(null);
  const [InitialValue, setInitialValue] = useState({field1:"",field2:"",field3:"",field4:"",field5:"",birthDate:"",field7:"",field8:""})
  const OnClick=()=>{

  }
 
  return (
    <div className='flex flex-row-reverse h-[775px] p-[40px] '>
            <Formik className="" initialValues={InitialValue} onSubmit={OnClick} enableReinitialize={true}>
            <Form className='flex flex-row-reverse flex-wrap gap-11 h-auto px-5 items-center justify-center'>
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>نام</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="نام خود را وارد کنید" name="field1" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>نام خانوادگی</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[48px]' placeholder="نام خانوادگی خود را وارد کنید" name="field2" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>درباره من</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[48px]' placeholder="یک متن درباره خود را وارد کنید" name="field3" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-3 w-[286px]'>
                  <span className='font-[700] text-[16px]'>شماره همراه</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="شماره همراه خود را وارد کنید" name="field4" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[286px]'>
                  <span className='font-[700] text-[16px]'>کد ملی</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="کد ملی خود را وارد کنید" name="field5" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-2 w-[286px] '>
                  <span className='font-[700] text-[16px]'>تاریخ تولد</span>
                  {/* <Field name="birthDate">
                      {({ field }) => (
                        <input
                          {...field}
                          readOnly // فقط برای خواندن
                          placeholder="تاریخ تولد خود را وارد کنید" // پل‌هولدر
                          
                          value={startDate ? startDate.toLocaleDateString() : ''} // نمایش تاریخ
                        />
                      )}
                    </Field> */}
                    <PersianDatePicker
                      value={startDate}
                      className='bg-[#e8e7e7] rounded-[16px] placeholder-[#787878] font-[700] text-[14px] px-3 w-full h-[48px] text-left placeholder-ri'
                      placeholder="تاریخ را انتخاب کنید" // متن placeholder
                    />
                    {/* <DatePicker
                      onChange={(date) => {
                        setStartDate("birthDate", date); 
                      }}
                      className='bg-[#e8e7e7] rounded-[16px] placeholder-[#787878] font-[700] text-[14px] px-3 w-full h-[48px] text-left placeholder-ri'
                      defaultValue={startDate ? dayjs(startDate, { jalali: true }) : null}
                      placeholder='تاریخ تولد خود را وارد کنید'
                    /> */}
                     {/* <input class="initial-value-example" /> */}
                  {/* <Calendar
                      calendar={false} 
                      locale="fa" 
                      shouldHighlightWeekends
                  />
                   <DatePicker
        value={selectedDay}            // تاریخ انتخاب شده
        onChange={setSelectedDay}       // به‌روزرسانی تاریخ انتخابی
        shouldHighlightWeekends         // رنگ کردن تعطیلات (جمعه‌ها)
        locale="fa"                     // زبان و تقویم به فارسی (شمسی)
        inputPlaceholder="تاریخ را انتخاب کنید"  // متن placeholder اینپوت
        inputClassName="custom-input"    // کلاس دلخواه برای استایل‌دهی به اینپوت (در صورت نیاز)
      /> */}
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>ایمیل</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="ایمیل خود را وارد کنید" name="field7" />
                </div>
                
                <div className='flex flex-col items-end gap-2 h-[80px] flex-grow-3 w-[90%]'>
                  <span className='font-[700] text-[16px]'>آدرس سکونت</span>
                  <Field className='bg-[#e8e7e7] rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3 w-[100%] h-[48px]' placeholder="آدرس سکونت خود را وارد کنید" name="field8" />
                </div>
              </Form>

            </Formik>
        <div className='bg-slate-500 h-[100%] w-[30%]'></div>
    </div>
  )
}

export default InformationUser