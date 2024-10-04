import React, { useEffect, useState } from 'react'
import { getNewsList } from '../../../core/services/api/newsTop'
import NewsTop from './newsTop'

const BoxFifth = () => {

    const [news, setNews] = useState([])

    const [newsTop, setNewsTop] = useState([])
  
    const getNews = async () => {

        const response = await getNewsList()
    
        setNews(response)

        setNewsTop(response.news.slice(3,7))

        // console.log(newsTop)
    
    }
    
    useEffect(() => {
        getNews()
    }, [])

    return (
       <div className=' my-10 w-5/6 mx-auto flex flex-col gap-5 justify-center md:flex-row border'>
            {newsTop.map((item, index) => {
                return (
                    <NewsTop 
                        key={index}
                        id={item.id}
                        title={item.title}
                        newsCatregoryName={item.newsCatregoryName}
                        miniDescribe={item.miniDescribe}
                        currentDissLikeCount={item.currentDissLikeCount}
                        currentLikeCount={item.currentLikeCount}
                        addUserFullName={item.addUserFullName}
                        currentView={item.currentView}
                        image={item}
                    /> 
                )
            })}
        </div>
  )
}

export default BoxFifth
