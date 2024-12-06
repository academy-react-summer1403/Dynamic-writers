import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import { Button, Select, SelectItem } from '@nextui-org/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { AddJob } from '../../../core/services/api/Jobs/AddJob';
import { toast, ToastContainer } from 'react-toastify';
import { UpdateJob } from '../../../core/services/api/Jobs/UpdateJob';

const ModalUpdate = ({ show, setShow, selectedItem, refetch }) => {

  const SignupSchema = yup.object().shape({
    jobTitle: yup.string().required('نام شغل الزامی است'),
    aboutJob: yup.string().required('توضیحات شغل الزامی است'),
    companyWebSite: yup.string().url('لطفاً آدرس وب‌سایت معتبر وارد کنید').required('وب‌سایت شرکت الزامی است'),
    companyLinkdin: yup.string().url('لطفاً آدرس لینکدین معتبر وارد کنید').required('لینک لینکدین شرکت الزامی است'),
    companyName: yup.string().required('نام شرکت الزامی است'),
  });

  const [works, setWorks] = useState([
    { key:'select', value: false, label: 'اتمام کار' },
    { key:'select2', value: true, label: 'در حال کار' },
  ]);

  const [currentStatus, setCurrentStatus] = useState({
    key: selectedItem.inWork ? 'select2' : 'select',
    value: selectedItem.inWork,
    label: selectedItem.inWork ? ' در حال کار ' : ' اتمام کار '
  });

  useEffect(() => {
    if (selectedItem) {
      setCurrentStatus({
        key: selectedItem.inWork ? 'select2' : 'select',
        value: selectedItem.inWork,
        label: selectedItem.inWork ? ' در حال کار ' : ' اتمام کار '
      });
    }
  }, [selectedItem]);

  return (
    <Modal dir='rtl' isOpen={show} size='xl' onOpenChange={() => setShow(!show)}>
      <ModalContent>
        <ModalHeader>ویرایش شغل</ModalHeader>

        <ModalBody>
          <Formik
            initialValues={{
              jobTitle: selectedItem?.jobTitle || '',
              aboutJob: selectedItem?.aboutJob || '',
              companyWebSite: selectedItem?.companyWebSite || '',
              companyLinkdin: selectedItem?.companyLinkdin || '',
              companyName: selectedItem?.companyName || '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              if (currentStatus === null) {
                toast.error('وضعیت را انتخاب کنید');
              } else {

                const dataObj = {
                  jobTitle: values.jobTitle,
                  aboutJob: values.aboutJob,
                  companyWebSite: values.companyWebSite,
                  companyLinkdin: values.companyLinkdin,
                  workStartDate: selectedItem.workStartDate,
                  workEndDate: selectedItem.workEndDate,
                  inWork: currentStatus.value,
                  companyName: values.companyName,
                  userId: selectedItem.userId,
                  id: selectedItem.id,
                };

                const response = await UpdateJob(dataObj);

                if (response.success === true) {
                  toast.success(' عملیات با موفق بود ');
                  refetch();
                  setShow(false);
                }
              }
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <h3 className='my-1 mt-3'>نام شغل</h3>
                <Field
                  name='jobTitle'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm dark:bg-slate-700 font-bold outline-none'
                  placeholder='نام شغل را وارد کنید'
                />
                <ErrorMessage name='jobTitle' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>درباره شغل</h3>
                <Field
                  name='aboutJob'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm dark:bg-slate-700 font-bold outline-none'
                  placeholder='توضیحات شغل را وارد کنید'
                />
                <ErrorMessage name='aboutJob' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>وب سایت شرکت</h3>
                <Field
                  name='companyWebSite'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm dark:bg-slate-700 font-bold outline-none'
                  placeholder='وب سایت شرکت را وارد کنید'
                />
                <ErrorMessage name='companyWebSite' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>لینک شرکت</h3>
                <Field
                  name='companyLinkdin'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm dark:bg-slate-700 font-bold outline-none'
                  placeholder='لینک شرکت را وارد کنید'
                />
                <ErrorMessage name='companyLinkdin' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>نام شرکت</h3>
                <Field
                  name='companyName'
                  className='bg-[#f4f4f4] rounded-xl w-full p-2 text-sm dark:bg-slate-700 font-bold outline-none'
                  placeholder='نام شرکت را وارد کنید'
                />
                <ErrorMessage name='companyName' component="div" className="text-red-500 text-sm font-bold" />

                <h3 className='my-1 mt-3'>وضعیت</h3>
                <Select
                  name='status'
                  classNames={{ trigger: 'bg-[#f4f4f4] dark:bg-slate-700' }}
                  defaultSelectedKeys={[currentStatus.key]}
                >
                  {works.map((work, index) => (
                    <SelectItem
                      key={work.key}
                      value={work.value}
                      onClick={() => setCurrentStatus({ key: work.key, value: work.value, label: work.label })}
                    >
                      {work.label}
                    </SelectItem>
                  ))}
                </Select>
                <ErrorMessage name='status' component="div" className="text-red-500 text-sm font-bold" />

                <div className="flex justify-between mt-4">
                  <Button type="submit" color="primary">
                    ویرایش شغل
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
  );
};

export default ModalUpdate;
