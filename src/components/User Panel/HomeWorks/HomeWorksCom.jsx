import { Field, Formik, Form } from 'formik'
import { Search01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { GetHomeWorks } from '../../../core/services/api/HomeWorks/GetHomeWorks';
import HomeWorksTable from './HomeWorksTable';

const HomeWorksCom = () => {
  
  const [homeWorks, setHomeWorks] = useState([])
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])    

  const [isLoading, setIsLoading] = useState(true)

  const getHomWorks = async () => {

      const response = await GetHomeWorks()
      setHomeWorks(response)
      setFilteredData(response)

      if(response) {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      getHomWorks()
    }, [])

    useEffect(() => {
      const results = homeWorks.filter(item => 
          item.hwTitle.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredData(results)
    }, [search])

    useEffect(() => {
      if(homeWorks.length > 0) {
        setIsLoading(false)
      }
    }, [homeWorks])

  
  return (
    <div className='w-full flex p-2 flex-col gap-3 rounded-2xl h-fit' dir='rtl'>
        <div className='flex flex-col w-full h-fit gap-10'>
        <h2 className='text-[28px] font-bold mt-8'> تکالیف </h2>
        <div className='flex gap-6 w-full h-fit'>
            <div className='flex flex-col gap-4 w-[289px]'>
                <div className='flex items-center gap-2'>
                    <Search01Icon />
                    <span className='text-base font-semibold'> جست‌جو تکلیف </span>
                </div>
                <div className='relative flex flex-col gap-3'>
                <Formik
                    initialValues={{Query: ''}}
                    onSubmit={(value) => setSearch(value.Query)}
                >
                        
                    <Form>
                        <Field type='search' name='Query' className='w-full h-10 rounded-xl dark:bg-slate-600 dark:text-white bg-gray-200 px-2 text-sm outline-none'  placeholder='جست جو کنید...' dir='rtl'/>
                        <button type='submit' className='text-white bg-blue-500 absolute rounded-xl h-10 w-10 left-0 top-0 text-center flex justify-center items-center hover:bg-blue-400'> <Search01Icon className='size-5' /> </button>
                    </Form>
                </Formik>
                </div>
            </div>
        </div>
      </div>
      <HomeWorksTable
        myHomeWorks={filteredData}
        isLoading={isLoading}
      />
    </div>
  )
}

export default HomeWorksCom