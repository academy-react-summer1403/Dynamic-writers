import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import { Button, Select, SelectItem } from '@nextui-org/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { AddJob } from '../../../core/services/api/Jobs/AddJob'
import { toast, ToastContainer } from 'react-toastify'

const ModalAdd = ({ show, setShow, myJobs, refetch }) => {

  const SignupSchema = yup.object().shape({
    jobTitle: yup.string().required('نام شغل الزامی است'),
    aboutJob: yup.string().required('توضیحات شغل الزامی است'),
    companyWebSite: yup.string().url('لطفاً آدرس وب‌سایت معتبر وارد کنید').required('وب‌سایت شرکت الزامی است'),
    companyLinkdin: yup.string().url('لطفاً آدرس لینکدین معتبر وارد کنید').required('لینک لینکدین شرکت الزامی است'),
    companyName: yup.string().required('نام شرکت الزامی است'),
    startDate: yup.date()
      .required('تاریخ شروع الزامی است')
      .max(new Date(), 'تاریخ شروع نمی‌تواند بیشتر از امروز باشد')
      .nullable(),
    endDate: yup.date()
      .min(yup.ref('startDate'), 'تاریخ پایان باید بعد از تاریخ شروع باشد')
      .required('تاریخ پایان الزامی است')
      .nullable(),
  })

  const [works, setWorks] = useState([
    { value: false, label: 'اتمام کار' },
    { value: true, label: 'در حال کار' },
  ])
  const [currentStatus, setCurrentStatus] = useState(null)

  return (
    <Modal dir='rtl' isOpen={show} size='xl' onOpenChange={() => setShow(!show)}>
      <ModalContent>
        <ModalHeader>ساخت شغل جدید</ModalHeader>

        <ModalBody>
          <Formik
            initialValues={{
              jobTitle: '',
              aboutJob: '',
              companyWebSite: '',
              companyLinkdin: '',
              companyName: '',
              startDate: null,
              endDate: null
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              if (currentStatus === null) {
                toast.error(' وضعیت را انتخاب کنید ')
              }
              else {
                const formattedStartDate = values.startDate ? new Date(values.startDate).toISOString() : null;
                const formattedEndDate = values.endDate ? new Date(values.endDate).toISOString() : null;

                const dataObj = {
                  jobTitle: values.jobTitle,
                  aboutJob: values.aboutJob,
                  companyWebSite: values.companyWebSite,
                  companyLinkdin: values.companyLinkdin,
                  workStartDate: formattedStartDate,
                  workEndDate: formattedEndDate,
                  inWork: currentStatus,
                  companyName: values.companyName
                }

                const response = await AddJob(dataObj)

                if (response.success === true) {
                  toast.success(response.message)
                  refetch()
                  setShow(false)
                }
              }
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <h3 className='my-1 mt-3'>نام شغل</h3>
                <Field
                  name='jobTitle'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm font-bold outline-none'
                  placeholder='نام شغل را وارد کنید'
                />
                <ErrorMessage name='jobTitle' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>درباره شغل</h3>
                <Field
                  name='aboutJob'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm font-bold outline-none'
                  placeholder='توضیحات شغل را وارد کنید'
                />
                <ErrorMessage name='aboutJob' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>وب سایت شرکت</h3>
                <Field
                  name='companyWebSite'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm font-bold outline-none'
                  placeholder='وب سایت شرکت را وارد کنید'
                />
                <ErrorMessage name='companyWebSite' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>لینک شرکت</h3>
                <Field
                  name='companyLinkdin'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm font-bold outline-none'
                  placeholder='لینک شرکت را وارد کنید'
                />
                <ErrorMessage name='companyLinkdin' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>نام شرکت</h3>
                <Field
                  name='companyName'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm font-bold outline-none'
                  placeholder='نام شرکت را وارد کنید'
                />
                <ErrorMessage name='companyName' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>وضعیت</h3>
                <Select
                  name='status'
                  placeholder='انتخاب کنید'
                  classNames={{ trigger: 'bg-[#f4f4f4]' }}
                >
                  {works.map((work, index) => (
                    <SelectItem key={index} value={work.value} onClick={() => setCurrentStatus(work.value)}>
                      {work.label}
                    </SelectItem>
                  ))}
                </Select>
                <ErrorMessage name='status' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>تاریخ شروع</h3>
                <Field
                  type="date"
                  name="startDate"
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm font-bold outline-none'
                />
                <ErrorMessage name='startDate' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>تاریخ پایان</h3>
                <Field
                  type="date"
                  name="endDate"
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm font-bold outline-none'
                />
                <ErrorMessage name='endDate' component="div" className="text-red-500 text-sm font-bold" />

                <div className="flex justify-between mt-4">
                  <Button type="submit" color="primary">
                    ایجاد شغل
                  </Button>
                  <Button outline onClick={() => setShow(false)}>
                    لغو
                  </Button>
                </div>
                <ToastContainer />
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalAdd;
