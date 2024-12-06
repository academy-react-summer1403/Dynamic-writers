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
    <div className='w-full flex p-2 flex-col gap-3 rounded-2xl h-fit mb-[100px]' dir='rtl'>
        <div className='flex flex-col w-full h-fit gap-10'>
        <div className='flex flex-col gap-6 w-full h-fit'>
            <div className='flex gap-4'>
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
