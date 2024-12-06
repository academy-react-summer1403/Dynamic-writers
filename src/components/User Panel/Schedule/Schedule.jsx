import React, { useEffect, useState } from 'react'
import { GetScheduleList } from '../../../core/services/api/Schedule/GetScheduleList'
import { getItem } from '../../../core/services/common/storage'
import { Select, SelectItem, Card, CardBody } from '@nextui-org/react'
import { DateTime } from 'luxon'
import jMoment from 'jalali-moment'
import { Calendar02Icon, GreenHouseIcon, IdIcon, StartUp01Icon, Time02Icon, Time04Icon, UserStatusIcon } from 'hugeicons-react'
import { motion } from 'framer-motion'
import { GetSession } from '../../../core/services/api/Schedule/GetSession'

const Schedule = () => {
  const [schedule, setSchedule] = useState([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [timeFrame, setTimeFrame] = useState('day')
  const [sessionTitles, setSessionTitles] = useState({})
  const userId = getItem('userId')

  const getScheduleList = async () => {
    if (startDate && endDate) {
      const response = await GetScheduleList(startDate, endDate, userId)
      if (response) {
        setSchedule(response)
      }
    }
  }

  const getSessionTitle = async (id) => {
    const response = await GetSession(id)
    if (response && response.sessionTitle) {
      setSessionTitles((prevTitles) => ({
        ...prevTitles,
        [id]: response.sessionTitle,
      }))
    }
  }

  const calculateDates = (timeFrame) => {
    const now = DateTime.now()

    if (timeFrame === 'day') {
      setStartDate(now.startOf('day').toISO({ includeOffset: false }))
      setEndDate(now.endOf('day').toISO({ includeOffset: false }))
    } else if (timeFrame === 'week') {
      setStartDate(now.startOf('week').toISO({ includeOffset: false }))
      setEndDate(now.endOf('week').toISO({ includeOffset: false }))
    } else if (timeFrame === 'month') {
      setStartDate(now.startOf('month').toISO({ includeOffset: false }))
      setEndDate(now.endOf('month').toISO({ includeOffset: false }))
    } else if (timeFrame === 'year') {
      setStartDate(now.startOf('year').toISO({ includeOffset: false }))
      setEndDate(now.endOf('year').toISO({ includeOffset: false }))
    }
  }

  useEffect(() => {
    calculateDates(timeFrame)
  }, [timeFrame])

  useEffect(() => {
    if (startDate && endDate) {
      getScheduleList()
    }
  }, [startDate, endDate])

  useEffect(() => {
    if (schedule.length > 0) {
      schedule.forEach((item) => {
        getSessionTitle(item.id)
      })
    }
  }, [schedule])

  const isToday = (startDate) => {
    const today = DateTime.now().toISODate()
    const classDate = DateTime.fromISO(startDate).toISODate()

    return today === classDate
  }

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}} className='iranSans my-2'>
      <h3 className='text-2xl font-bold my-8'> زمان بندی کلاس ها </h3>

      <div className='flex flex-col gap-4 w-[289px]'>
        <div className='flex items-center gap-2'>
          <Time02Icon />
          <span className='text-base font-semibold'> زمان بندی </span>
        </div>
        <div className='relative flex flex-col gap-3'>
          <Select value={timeFrame} placeholder='روز' defaultSelectedKeys='day' className='w-[200px] iranSans' classNames={{trigger: 'bg-white dark:bg-slate-700'}}>
            <SelectItem value="day" key='day' onClick={() => setTimeFrame('day')}>روز</SelectItem>
            <SelectItem value="week" key='week' onClick={() => setTimeFrame('week')}>هفته</SelectItem>
            <SelectItem value="month" key='month' onClick={() => setTimeFrame('month')}>ماه</SelectItem>
            <SelectItem value="year" key='year' onClick={() => setTimeFrame('year')}> سال </SelectItem>
          </Select>
        </div>
      </div>

      <div className='mt-[20px] flex justify-start w-full flex-wrap gap-5'>
        {schedule && schedule.length > 0 ? (
          schedule.map((item) => (
            <Card
              className={`w-[280px] shadow-none dark:bg-slate-700 ${isToday(item.startDate) ? 'border-3 border-blue-500' : ''}`}
              key={item.id}
            >
              <CardBody className={`flex flex-col gap-4 `}>
                <div className='text-right flex items-center gap-2'>
                  <IdIcon />
                  <span className='max-w-[200px]'>{sessionTitles[item.id] || 'عنوان کلاس'}</span>
                </div>
                <div className='text-right flex items-center gap-2'>
                  <StartUp01Icon />
                  <span className='flex gap-2'>
                    {jMoment(item.startDate).locale('fa').format('jD jMMMM jYYYY')}
                    <p className={`text-sm dark:text-gray-400 ${isToday(item.startDate) ? 'text-blue-500' : 'text-gray-600'}`}> {isToday(item.startDate) ? <div className={`bg-blue-500 text-white px-2 py-0.5 rounded-full text-sm`}> امروز </div> : '(شروع)'} </p>
                  </span>
                </div>
                <div className='text-right flex items-center gap-2'>
                  <Time04Icon />
                  <span className='flex gap-2'> {item.startTime}:00 تا {item.endTime}:00 </span>
                </div>
                <div className='text-right flex items-center gap-2'>
                  <Calendar02Icon />
                  <span className='flex gap-2'> {`شماره هفته ${item.weekNumber}`} </span>
                </div>
                <div className='text-right flex items-center gap-2'>
                  <UserStatusIcon />
                  <span className='flex gap-2'> {`حضور و غیاب شده:`}
                    <div className={`${item.lockToRaise ? 'bg-green-400' : 'bg-red-400'} text-white px-2 py-0.5 rounded-full text-sm`}>
                      {item.lockToRaise ? 'بله' : 'خیر'}
                    </div>
                  </span>
                </div>
                <div className='text-right flex items-center gap-2'>
                  <GreenHouseIcon />
                  <span className='flex gap-2'>
                    <div className={`${item.forming ? 'bg-green-400' : 'bg-red-400'} text-white px-2 py-0.5 rounded-full text-sm`}>
                      {item.forming ? 'تشکیل شده' : 'تشکیل نشده'}
                    </div>
                  </span>
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <div>هیچ داده‌ای موجود نیست</div>
        )}
      </div>
    </motion.div>
  )
}

export default Schedule
