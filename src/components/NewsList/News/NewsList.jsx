import React, { useEffect, useState } from 'react'
import SortNews from './Sort/SortNews'
import FilterNews from './Filter/FilterNews'
import { Pagination } from '@nextui-org/react'
import NewsItem from './NewsItem/NewsItem'
import { getNewsList } from '../../../core/services/api/news'
import jMoment from 'moment-jalaali'
import { getNewsCount } from '../../../core/services/api/NewsCount'
import { useNavigate, useSearchParams } from 'react-router-dom'
import NewsItemsRes from '../Responsive/NewsList/NewsItemsRes'

const NewsList = () => {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [news, setNews] = useState([])
  const [pages, setPages] = useState(0)
  const pageNum = searchParams.get('PageNumber') || 1

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(windowWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  useEffect(() => {

    if(pageNum) {
      getNews(pageNum)
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
        
        <div className='flex flex-col gap-5 w-9/12 items-end'>

            {windowWidth}

            <SortNews />

            <div className='flex flex-col gap-8'>

              {windowWidth < 768 ? 
              
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
                />

              })

              :

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
                />

              })

              }

            </div>

            <Pagination onChange={(pageNumber) => navigate(`?PageNumber=${pageNumber}`)} isCompact showControls total={pages} initialPage={1} />

        </div>


        <FilterNews />


      </div>
    </div>
  )
}

export default NewsList
