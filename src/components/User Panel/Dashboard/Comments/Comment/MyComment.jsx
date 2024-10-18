import React from 'react'
import MyCommentCom from './MyCommentCourseCom'
import MyCommentNewCom from './MyCommentNewCom'
import MyCommentCourseCom from './MyCommentCourseCom'

const MyComment = ({  comments, commentsNew }) => {
  return (
    <div className='w-full h-[300px] gap-10 justify-between flex p-6 iranSans' dir='rtl'>
       <div className='max-w-3/6 h-[750px] flex flex-col overflow-hidden gap-8 bg-gradient-to-b from-white to-transparent'>
        <span className='text-[14px] font-[700] text-[#787878]'> دوره ها </span>
        {comments.map((item) => {

            return <MyCommentCourseCom
                courseTitle={item.courseTitle}
                insertDate={item.insertDate}
                likeCount={item.likeCount}
                dislikeCount={item.dislikeCount}
                replyCount={item.replyCount}
                id={item.commentId}
                Oid={item.courseId}
                title={item.title}
                describe={item.describe}
            />
        })}
        {comments[0] == undefined && <span className='mx-auto text-[18px] text-gray-400 font-semibold flex items-center'> نظری ثبت نشده است :( </span>}
      </div>
      <div className='h-full border'></div>
      <div className='max-w-3/6 h-[750px] flex flex-col overflow-hidden gap-8 bg-gradient-to-b from-white to-transparent'>
        <span className='text-[14px] font-[700] text-[#787878]'> اخبار و مقالات </span>
        {commentsNew.map((item) => {

            return <MyCommentNewCom
                courseTitle={item.courseTitle}
                insertDate={item.insertDate}
                likeCount={item.likeCount}
                dislikeCount={item.dislikeCount}
                replyCount={item.replyCount}
                id={item.commentId}
                Oid={item.newsId}
                title={item.title}
                describe={item.describe}
            />
        })}
        {commentsNew[0] == undefined && <span className='mx-auto text-[18px] text-gray-400 font-semibold flex items-center'> نظری ثبت نشده است :( </span>}
      </div>
    </div>
  )
}

export default MyComment
