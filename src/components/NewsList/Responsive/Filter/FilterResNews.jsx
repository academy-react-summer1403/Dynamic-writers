import { Modal, ModalBody, ModalContent, ModalHeader, Select, SelectItem } from '@nextui-org/react'
import { Field, Form, Formik } from 'formik'
import { Cancel01Icon, CellsIcon, Search01Icon } from 'hugeicons-react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterResNews = ({ isOpen, onOpenChange }) => {

  const [searchParams, setSearchParams] = useSearchParams()

  const updateParams = (value, value2) => {
    searchParams.set('SortingCol', value)
    searchParams.set('SortType', value2)
    setSearchParams(searchParams)
  }  

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent dir='rtl'>
        <ModalHeader>
          <div className='flex justify-between item-center w-full'>
              <h2 className='font-extrabold'> ترتیب و فیلتر </h2>
              <div onClick={onOpenChange} className='group dark:border-none dark:bg-red-500 dark:text-white hover:bg-red-500 hover:text-white border py-1.5 px-3 border-red-500 text-red-500 rounded-full bg-white flex flex-row-reverse items-center gap-2 text-sm cursor-pointer'>
                  <Cancel01Icon className='size-4 group-hover:text-white' />
                  بستن
              </div>
          </div>
        </ModalHeader>

        <ModalBody>
        <div className='flex flex-col gap-2 w-full items-start'>

          <div className='flex flex-row-reverse gap-2'> <span className='text-base font-bold'> ترتیب </span> <CellsIcon /> </div>

          <Select placeholder='انتخاب کنید' className='w-full my-2 rounded-xl text-gray-100 font-semibold text-sm bg-gray-100' dir='rtl'>
              <SelectItem onClick={() => updateParams('CurrentView', 'DESC')}> پربازدید ترین </SelectItem>
              <SelectItem onClick={() => updateParams('InsertDate', 'DESC')}> جدید ترین </SelectItem>
              <SelectItem onClick={() => updateParams('UpdateDate', 'DESC')}> بروز ترین </SelectItem>
              <SelectItem onClick={() => updateParams('', '')}> هیچ کدام </SelectItem>
          </Select>

          </div>
        </ModalBody>
        </ModalContent>
    </Modal>
  )
}

export default FilterResNews
