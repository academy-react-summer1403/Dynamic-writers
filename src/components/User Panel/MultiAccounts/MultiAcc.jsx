import { Button } from '@nextui-org/react'
import { Cancel01Icon, Delete01Icon, Login03Icon, Logout03Icon, SmartPhone01Icon } from 'hugeicons-react'
import React from 'react'
import { getItem, removeItem, setItem } from '../../../core/services/common/storage'
import { useNavigate } from 'react-router'

const MultiAcc = () => {
  const usersObj = JSON.parse(JSON.parse(getItem('users')))
  // console.log(usersObj)

  const activeAccountId = JSON.parse(getItem('userId'))

  const navigate = useNavigate()

  return (
    <div className='w-full flex p-2 flex-col bg-white dark:bg-slate-700 gap-3 rounded-2xl h-fit px-3 my-4' dir='rtl'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-semibold'> حساب های کاربری </h2>
          {/* <Button className='bg-white border-1 border-red-500 text-red-500' radius='full'> بستن <Cancel01Icon color='red' /> </Button> */}
        </div>
        <ul className='w-full'>
          {usersObj.map((user, index) => {
            return <li className='flex h-[80px] w-full justify-between items-center'>
              <div className='flex gap-3 items-center'>
                <img className={`${user.id === activeAccountId ? 'bg-blue-500' : 'bg-gray-400'} w-[45px] rounded-full h-[45px]`} />
                <div className='flex flex-col gap-1'>
                  <h2 className='font-semibold' dir='ltr'> {user.id} شناسه </h2>
                  <span className='font-semibold text-gray-600 dark:text-gray-400 flex gap-1 items-center text-[15px]'> <SmartPhone01Icon size={16} /> {user.phoneNumber} </span>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                {activeAccountId !== user.id && <Delete01Icon color='red' size={26} className='cursor-pointer' onClick={() => {
                  const updatedItems = usersObj.filter(item => item.id !== user.id);
                  setItem('users', JSON.stringify(updatedItems))
                  navigate('/layoutPanel/dashboard')
                }} />}
                {activeAccountId === user.id ? <Logout03Icon color='red' className='cursor-pointer' onClick={() => {
                  removeItem('token')
                  removeItem('apiKey')
                  navigate('/login')
                }} size={32} /> : <Login03Icon color='blue' className='cursor-pointer' onClick={() => {
                  setItem('token', user.token)
                  setItem('apiKey', user.apiKey)
                  setItem('userId', user.id)
                  navigate('/')
                }} size={32} />}
              </div>
            </li>
          })}
        </ul>
    </div>
  )
}

export default MultiAcc
