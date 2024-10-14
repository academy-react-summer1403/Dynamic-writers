import { BookBookmark01Icon, FileBookmarkIcon, Logout03Icon, Money02Icon, Money03Icon, UserSettings01Icon } from 'hugeicons-react'
import React from 'react'
import { Link } from 'react-router-dom'

const MoreSitePanel = () => {
  return (
    <div className='flex flex-col gap-6 p-4 bg-white rounded-2xl absolute bottom-20 left-0' dir='rtl' style={{width: '221px', height: '248px'}}>
      <Link to='/layoutPanel/favCourse' className='w-full h-fit font-semibold text-base flex gap-4 justify-end flex-row-reverse'> علاقه‌مندی دوره <BookBookmark01Icon /> </Link>
      <Link to='/layoutPanel/favNews' className='w-full h-fit font-semibold text-base flex gap-4 justify-end flex-row-reverse'> علاقه‌مندی مقاله <FileBookmarkIcon /> </Link>
      <Link to='' className='w-full h-fit font-semibold text-base flex gap-4 justify-end flex-row-reverse'> پرداخت ها <Money02Icon /> </Link>
      <Link to='' className='w-full h-fit font-semibold text-base flex gap-4 justify-end flex-row-reverse'> حساب های کاربری <UserSettings01Icon /> </Link>
      <Link to='/login' onClick={() => removeItem('token')} className='w-full h-fit font-semibold text-base text-red-500 flex gap-4 justify-end flex-row-reverse'> خروج از حساب <Logout03Icon /> </Link>
    </div>
  )
}

export default MoreSitePanel
