import { Button } from '@nextui-org/react'
import { Cancel01Icon, Login03Icon, Logout03Icon } from 'hugeicons-react'
import React from 'react'
import { getItem, removeItem, setItem } from '../../../core/services/common/storage'
import { useNavigate } from 'react-router'

const MultiAcc = () => {
  const usersObj = JSON.parse(JSON.parse(getItem('users')))
  // console.log(usersObj)

  const activeAccountId = JSON.parse(getItem('userId'))

  const navigate = useNavigate()

  return (
    <div className='w-full flex p-2 flex-col bg-white gap-3 rounded-2xl h-fit px-3' dir='rtl'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-semibold'> حساب های کاربری </h2>
          {/* <Button className='bg-white border-1 border-red-500 text-red-500' radius='full'> بستن <Cancel01Icon color='red' /> </Button> */}
        </div>
        <ul className='w-full'>
          {usersObj.map((user, index) => {
            return <li className='flex h-[80px] w-full justify-between items-center'>
              <div className='flex gap-5 items-center'>
                <img className='w-[45px] rounded-full h-[45px] bg-gray-500' />
                <div className='flex flex-col gap-2'>
                  <h2 className='font-semibold'> {user.id} </h2>
                  <span className='font-semibold text-sm text-gray-600'> {user.phoneNumber} </span>
                </div>
              </div>
              {activeAccountId === user.id ? <Logout03Icon color='red' className='cursor-pointer' onClick={() => {
                removeItem('token')
                navigate('/login')
              }} size={32} /> : <Login03Icon color='blue' className='cursor-pointer' onClick={() => {
                setItem('token', user.token)
                setItem('userId', user.id)
                navigate('/')
              }} size={32} />}
            </li>
          })}
        </ul>
    </div>
  )
}

export default MultiAcc
