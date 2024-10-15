import React, {useState,useEffect } from 'react'
import { ThumbsUpIcon,ThumbsDownIcon,BookmarkAdd02Icon } from 'hugeicons-react'
import NewsLike from '../../core/services/api/News/NewsLike'
import DeleteNewsLike from '../../core/services/api/News/DeleteNewsLike'
import NewsDisLike from '../../core/services/api/News/NewsDisLike'
import AddFavoriteNews from '../../core/services/api/News/AddFavoriteNews'
import DeleteFavoriteNews from '../../core/services/api/News/DeleteFavoriteNews'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({News}) => {
    const [checkClick, setcheckClick] = useState({like:News.detailsNewsDto.currentUserIsLike,dislike:News.detailsNewsDto.currentUserIsDissLike,save:News.detailsNewsDto.isCurrentUserFavorite})
    const notifySuccess = (massage) => toast.success(massage,{position:"top-center",theme:"dark"});
    const notifyError = () => toast.warn("شما نمیتوانید رای خود را برگردانید",{position:"top-center",theme:"dark"});

    async function CheckClick(Name){
      if(Name=='dislike'){
        if(checkClick.dislike==true){
          notifyError()
        }else{
          setcheckClick({...checkClick,dislike:true,like:false})
          let message=await NewsDisLike(News.detailsNewsDto.id)
          notifySuccess(message.message)
        }
      }
      else if(Name=='like'){
          if(checkClick.like==true){
            setcheckClick({...checkClick,like:!checkClick.like,dislike:false})
            let message=await DeleteNewsLike(News.detailsNewsDto.id)
            notifySuccess(message.message)
          }else{
            setcheckClick({...checkClick,like:!checkClick.like,dislike:false})
            let message=await NewsLike(News.detailsNewsDto.id)
            notifySuccess(message.message)
          }
         
      }
      else{
        if(checkClick.save==true){
          setcheckClick({...checkClick,save:!checkClick.save})
          let message=await DeleteFavoriteNews(News.detailsNewsDto.id)
          notifySuccess(message.message)
        }else{
          setcheckClick({...checkClick,save:!checkClick.save})
          let message=await AddFavoriteNews(News.detailsNewsDto.id)
          notifySuccess(message.message)
        }
      }
    }
    
  return (
    <div className='flex flex-row gap-2'>
       <div className={`w-[52px] h-[52px] rounded-[100%] border-[#E4E4E4] border-2 ${checkClick.dislike ? "bg-black":""} flex items-center justify-center cursor-pointer hover:scale-110 transition-all max-lg:w-[46px] h-[46px] max-sm:w-[56px] h-[56px]`}  onClick={()=>CheckClick('dislike')}>
            <ThumbsDownIcon color={`${checkClick.dislike ? "white":"black"}`} />
        </div>
        <div className={`w-[52px] h-[52px] rounded-[100%] border-[#E4E4E4] ${checkClick.like ? "bg-black":""} border-2 flex items-center justify-center cursor-pointer hover:scale-110 transition-all max-lg:w-[46px] h-[46px] max-sm:w-[56px] h-[56px]`}  onClick={()=>CheckClick('like')}>
            <ThumbsUpIcon color={`${checkClick.like ? "white":"black"}`}/>
        </div>
        <div className={`w-[52px] h-[52px] rounded-[100%] border-[#E4E4E4] border-2 ${checkClick.save ? "bg-black":""} flex items-center justify-center cursor-pointer hover:scale-110 transition-all max-lg:w-[46px] h-[46px] max-sm:w-[56px] h-[56px]`}  onClick={()=>CheckClick('save')}>
            <BookmarkAdd02Icon color={`${checkClick.save ? "white":"black"}`}/>
        </div>
        <ToastContainer/>
    </div>
    
  )
}

export default Options