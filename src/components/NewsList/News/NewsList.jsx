import React, { useEffect, useState } from 'react'
import SortNews from './Sort/SortNews'
import FilterNews from './Filter/FilterNews'
import { Button, Pagination } from '@nextui-org/react'
import NewsItem from './NewsItem/NewsItem'
import { getNewsList } from '../../../core/services/api/news'
import jMoment from 'moment-jalaali'
import { getNewsCount } from '../../../core/services/api/NewsCount'
import { useNavigate, useSearchParams } from 'react-router-dom'
import NewsItemsRes from '../Responsive/NewsList/NewsItemsRes'
import { Search01Icon } from 'hugeicons-react'

const NewsList = () => {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [news, setNews] = useState([])
  const [pages, setPages] = useState(0)
  const pageNum = searchParams.get('PageNumber') || 1

  useEffect(() => {

    if(pageNum) {
      getNews()
    }

  }, [pageNum])

  const getNews = async () => {

    const response = await getNewsList(pageNum)
    const newsCount = await getNewsCount()
    setPages(Number(newsCount % 8))
    setNews(response)
    
  }

  useEffect(() => {

    getNews()
  }, [])

  return (
    <div className='w-dvw'>
      <div className='flex flex-row-reverse border-3 rounded-3xl w-11/12 h-fit mx-auto p-3 justify-between'>
        
        <div className='flex flex-col gap-5 md:w-9/12 w-full items-end'>

            <SortNews />

            <div className='flex justify-between items-center md:hidden w-full'>

              <Button className='rounded-full bg-blue-500 text-white'> ترتیب و فیلتر </Button>

              <Search01Icon className='size-6 cursor-pointer' />

            </div>

            <div className='flex flex-col gap-8'>

              {window.innerWidth < 1058 &&
              
              news.map((item,index) => {

                return <NewsItemsRes
                  key={index}
                  title={item.title}
                  miniDescribe = {item.miniDescribe}
                  currentView = {item.currentView}
                  currentImageAddressTumb={item.currentImageAddressTumb}
                  insertDate={(jMoment(item.insertDate).format('jYYYY / jM / jD'))}
                  addUserFullName={(item.addUserFullName).replace('-', ' ')}
                  id={item.id}
                  newsCatregoryId={item.newsCatregoryId}
                  currentLikeCount={item.currentLikeCount}
                  newsCatregoryName={item.newsCatregoryName}
                  currentDissLikeCount={item.currentDissLikeCount}
                  keyword={item.keyword}
                  addUserProfileImage={item.addUserProfileImage}
                />

              })}

              {window.innerWidth > 1058 &&
              
              news.map((item,index) => {

                return <NewsItem
                  key={index}
                  title={item.title}
                  miniDescribe = {item.miniDescribe}
                  currentView = {item.currentView}
                  currentImageAddressTumb={item.currentImageAddressTumb}
                  insertDate={(jMoment(item.insertDate).format('jYYYY / jM / jD'))}
                  addUserFullName={(item.addUserFullName).replace('-', ' ')}
                  id={item.id}
                  newsCatregoryId={item.newsCatregoryId}
                  currentLikeCount={item.currentLikeCount}
                  newsCatregoryName={item.newsCatregoryName}
                  currentDissLikeCount={item.currentDissLikeCount}
                  keyword={item.keyword}
                  addUserProfileImage={item.addUserProfileImage}
                />

              })}

            </div>

            <Pagination onChange={(pageNumber) => navigate(`?PageNumber=${pageNumber}`)} isCompact showControls total={pages} initialPage={1} />

        </div>


        <FilterNews />


      </div>
    </div>
  )
}

export default NewsList
