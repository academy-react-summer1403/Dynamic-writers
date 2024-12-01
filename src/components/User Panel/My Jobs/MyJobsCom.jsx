import { Field, Formik, Form } from 'formik'
import { Search01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { GetJobs } from '../../../core/services/api/Jobs/GetJobs';
import Table from './Table';
import TableJob from './Table';
import ModalAdd from './ModalAdd';
import { Button } from '@nextui-org/react';

const MyJobsCom = () => {
  
  const [myJobs, setMyJobs] = useState([])
  const [searchCourse, setSearchCourse] = useState('')
  const [filteredData, setFilteredData] = useState([]) 

  const [show, setShow] = useState(false)

  const [isLoading, setIsLoading] = useState(true)

  const getMyJobs = async () => {

      const response = await GetJobs()
      setMyJobs(response.jobLists)
      setFilteredData(response.jobLists)

      if(response.jobLists) {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      getMyJobs()
    }, [])

    useEffect(() => {
      const results = myJobs.filter(item => 
          item.jobTitle.toLowerCase().includes(searchCourse.toLowerCase())
      )
      setFilteredData(results)
    }, [searchCourse])
  
  return (
    <div className='w-full flex p-2 flex-col gap-3 rounded-2xl h-fit' dir='rtl'>
        <div className='flex flex-col w-full h-fit gap-10'>
        <h2 className='text-[28px] font-bold mt-8'> شغل ها </h2>
        <div className='flex flex-col gap-6 w-full h-fit'>
            <div className='flex items-center gap-2'>
                <Search01Icon />
                <span className='text-base font-semibold'> جست‌جو شغل </span>
            </div>
            <div className='flex gap-4'>
                <div className='relative flex flex-col gap-3 w-[289px]'>
                <Formik
                    initialValues={{Query: ''}}
                    onSubmit={(value) => setSearchCourse(value.Query)}
                >
                        
                    <Form>
                        <Field type='search' name='Query' className='w-full h-10 rounded-xl dark:bg-slate-600 dark:text-white bg-gray-200 px-2 text-sm outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                        <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                    </Form>
                </Formik>
                </div>
                <Button className='bg-blue-500 text-white text-sm font-bold h-[40px] rounded-lg' onClick={() => setShow(true)}> ساخت شغل </Button>
            </div>
        </div>
      </div>
      <TableJob
        myJobs={filteredData}
        isLoading={isLoading}
        getMyJobs={getMyJobs}
      />
      {show && <ModalAdd show={show} setShow={setShow} refetch={getMyJobs} myJobs={myJobs} />}
    </div>
  )
}
export default MyJobsCom
