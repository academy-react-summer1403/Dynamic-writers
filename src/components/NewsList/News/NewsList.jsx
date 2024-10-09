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
import FilterResNews from '../Responsive/Filter/FilterResNews'
import SearchRes from '../Responsive/Search/SearchRes'

const NewsList = () => {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [news, setNews] = useState([])
  const [pages, setPages] = useState(0)
  const [partCount, setPartCount] = useState([])

  const pageNum = searchParams.get('PageNumber') || 1
  const rowsPage = searchParams.get('RowsOfPage') || 8
  const query = searchParams.get('Query') || ''

  const [closeFilter, setCloseFilter] = useState(false)
  const [closeSearchBol, setCloseSearchBol] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {

    if(windowWidth < 768) {

      navigate('?RowsOfPage=3')

    }

  }, [windowWidth])

  useEffect(() => {

    if(pageNum || rowsPage || query) {
      getNews()
    }

  }, [pageNum, rowsPage, query])

  const getNews = async () => {

    const response = await getNewsList(pageNum, rowsPage, query)
    const newsCount = await getNewsCount()
    setPages(Number(newsCount % 8))
    setNews(response)

    const partCounts = response.map((part) => part.newsCatregoryName)
    const uniqueArray = [...new Set(partCounts)]
    setPartCount(uniqueArray)
    console.log(partCount)
    
  }
  
  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set(key, value)
    navigate(`?${newParams.toString()}`)
  }

  const closeFil = () => {

    setCloseFilter(false)
  }

  const closeSearch = () => {

    setCloseSearchBol(false)
  }

  useEffect(() => {

    getNews()
  }, [])

  return (
    <div className='w-dvw my-10'>

      {closeFilter && <FilterResNews closeFil={closeFil} />}

      <div className='flex flex-row-reverse border-3 rounded-3xl w-11/12 h-fit mx-auto p-3 justify-between'>
        
        <div className='flex flex-col gap-5 md:w-9/12 w-full items-end'>

            <SortNews />

            <div className='flex justify-between items-center md:hidden w-full'>

              <Button onClick={() => setCloseFilter(true)} className='rounded-full bg-blue-500 text-white'> ترتیب و فیلتر </Button>

              {!closeSearchBol && <Search01Icon onClick={() => setCloseSearchBol(true)} className='size-6 cursor-pointer' />}
              {closeSearchBol && <SearchRes closeSearch={closeSearch}/>}

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

            <Pagination onChange={(pageNumber) => updateParams('PageNumber', pageNumber)} isCompact showControls total={pages} initialPage={1} />

        </div>


        <FilterNews updateParams={updateParams} partCount={partCount} />


      </div>
    </div>
  )
}

export default NewsList
