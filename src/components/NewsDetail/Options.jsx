import React, {useState } from 'react'
import { ThumbsUpIcon,ThumbsDownIcon,BookmarkAdd02Icon } from 'hugeicons-react'
import NewsLike from '../../core/services/api/News/NewsLike'
import DeleteNewsLike from '../../core/services/api/News/DeleteNewsLike'
import NewsDisLike from '../../core/services/api/News/NewsDisLike'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = () => {
    const [checkClick, setcheckClick] = useState({like:false,dislike:false,save:false})
    const notifySuccess = (massage) => toast.success(massage,{position:"top-center",theme:"dark"});
    const notifyError = () => toast.warn("شما نمیتوانید رای خود را برگردانید",{position:"top-center",theme:"dark"});

    async function CheckClick(Name){
      if(Name=='dislike'){
        if(checkClick.dislike==true){
          notifyError()
        }else{
          setcheckClick({...checkClick,dislike:true,like:false})
          let message=await NewsDisLike('eed400fe-4e77-ef11-b6da-8f406465b439')
          notifySuccess(message.message)
        }
      }
      else if(Name=='like'){
          if(checkClick.like==true){
            setcheckClick({...checkClick,like:!checkClick.like,dislike:false})
            let message=await DeleteNewsLike('eed400fe-4e77-ef11-b6da-8f406465b439')
            notifySuccess(message.message)
          }else{
            setcheckClick({...checkClick,like:!checkClick.like,dislike:false})
            let message=await NewsLike('eed400fe-4e77-ef11-b6da-8f406465b439')
            notifySuccess(message.message)
          }
         
      }
      else
        setcheckClick({...checkClick,save:!checkClick.save})
    }
  return (
    <div className='flex flex-row gap-2'>
       <div className={`w-[56px] h-[56px] rounded-full border-[#E4E4E4] border-2 ${checkClick.dislike ? "bg-black":""} flex items-center justify-center cursor-pointer hover:scale-110 transition-all`}  onClick={()=>CheckClick('dislike')}>
            <ThumbsDownIcon color={`${checkClick.dislike ? "white":"black"}`} />
        </div>
        <div className={`w-[56px] h-[56px] rounded-full border-[#E4E4E4] ${checkClick.like ? "bg-black":""} border-2 flex items-center justify-center cursor-pointer hover:scale-110 transition-all`}  onClick={()=>CheckClick('like')}>
            <ThumbsUpIcon color={`${checkClick.like ? "white":"black"}`}/>
        </div>
        <div className={`w-[56px] h-[56px] rounded-full border-[#E4E4E4] border-2 ${checkClick.save ? "bg-black":""} flex items-center justify-center cursor-pointer hover:scale-110 transition-all`}  onClick={()=>CheckClick('save')}>
            <BookmarkAdd02Icon color={`${checkClick.save ? "white":"black"}`}/>
        </div>
        <ToastContainer/>
    </div>
    
  )
}

export default Options