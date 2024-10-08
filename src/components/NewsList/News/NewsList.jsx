import React, { useEffect, useState } from 'react'
import SortNews from './Sort/SortNews'
import FilterNews from './Filter/FilterNews'
import { Pagination } from '@nextui-org/react'
import NewsItem from './NewsItem/NewsItem'
import { getNewsList } from '../../../core/services/api/news'
import jMoment from 'moment-jalaali'

const NewsList = () => {

  const [news, setNews] = useState([])

  const getNews = async () => {

    const response = await getNewsList()
    setNews(response.news)
    
  }

  useEffect(() => {

    getNews()
  }, [])

  return (
    <div className='w-dvw'>
      <div className='flex flex-row-reverse border-3 rounded-3xl w-11/12 h-fit mx-auto p-3 justify-between'>
        
        <div className='flex flex-col gap-5 w-9/12 items-end'>

            <SortNews />

            <div className='flex flex-col gap-8'>

              {news.map((item, index) => {

                return <NewsItem 
                  key={index}
                  title={item.title}
                  miniDescribe = {item.miniDescribe}
                  currentView = {item.currentView}
                  currentImageAddressTumb={item.currentImageAddressTumb}
                  insertDate={jMoment((item.insertDate).format('jYYYY / jM / jD'))}
                  addUserFullName={item.addUserFullName}
                  id={item.id}
                  newsCatregoryId={item.newsCatregoryId}
                  currentLikeCount={item.currentLikeCount}
                  newsCatregoryName={item.newsCatregoryName}
                  currentDissLikeCount={item.currentDissLikeCount}
                  keyword={item.keyword}
                />

              })}

            </div>

            <Pagination isCompact showControls total={10} initialPage={1} />

        </div>


        <FilterNews />


      </div>
    </div>
  )
}

export default NewsList
