import React, { useEffect, useState } from 'react'
import { getNewsList } from '../../../core/services/api/newsTop'
import NewsTop from './newsTop'
import { Button, Card } from '@nextui-org/react'

const BoxFifth = () => {

    const [news, setNews] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    const [newsTop, setNewsTop] = useState([])
  
    const getNews = async () => {

        const response = await getNewsList()
        setNews(response)
        setNewsTop(response.news.slice(0,4))
    
    }

    const [viewBetter, setViewBetter] = useState(false);

    useEffect(() => {
        getNews()

        if(window.innerWidth > 768){
            setViewBetter(true)
        }
        else if(window.innerWidth <= 768) {
            setViewBetter(true)
        }

    }, [])

    useEffect(() => {
        if(newsTop.length > 0){
          setIsLoaded(true)
        }
  
    }, [newsTop])
  
  


    return (
        <>
       <Card classNames={{base: 'shadow-none'}} className='bg-transparent my-10 w-full flex-wrap mx-auto flex gap-5 justify-center md:justify-between items-center flex-row overflow-hidden md:overflow-visible' 
       style={viewBetter ? {height: 'fit-content'} : {height: '800px'}}>
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
                        currentImageAddressTumb={item.currentImageAddressTumb}
                        isLoaded={isLoaded}
                    /> 
                )
            })}
        </Card>

            {/* <Button onClick={() => {viewBetter ? setViewBetter(false) : setViewBetter(true)}} className='text-white bg-blue-500 w-32 rounded-full mx-auto mb-20 md:hidden'>

                {viewBetter ? "نمایش کمتر" : "نمایش بیشتر"}

            </Button> */}
        </>    
  )
}

export default BoxFifth
