
import React, { useState } from 'react';
import { ThumbsUpIcon, ThumbsDownIcon, BookmarkAdd02Icon } from 'hugeicons-react';
import CourseDisLike from '../../core/services/api/Course/CourseDisLike';
import CourseLike from '../../core/services/api/Course/CourseLike';
import DeleteCourseLike from '../../core/services/api/Course/DeleteCourseLike';
import DeleteFavoriteCourse from '../../core/services/api/Course/DeleteFavoriteCourse';
import AddFavoriteCourse from '../../core/services/api/Course/AddFavoriteCourse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ Course }) => {
    const [checkClick, setcheckClick] = useState({
        like: Course.currentUserLike,
        dislike: Course.currentUserDissLike,
        save: Course.isUserFavorite,
    });

    const notifySuccess = (message) => {
        if (message) {
            toast.dismiss();
            toast.success(message, { position: 'top-center', theme: 'dark' });
        } else {
            toast.error('An unexpected error occurred!', { position: 'top-center', theme: 'dark' });
        }
    };

    const notifyError = () => {
        toast.dismiss();
        toast.warn('شما نمیتوانید رای خود را برگردانید', { position: 'top-center', theme: 'dark' });
    };

    async function CheckClick(Name) {
        try {
            if (Name === 'dislike') {
                if (checkClick.dislike === '1') {
                    notifyError();
                } else {
                    setcheckClick({ ...checkClick, dislike: '1', like: '0' });
                    let response = await CourseDisLike(Course.courseId);
                    // notifySuccess(response?.message);
                }
            } else if (Name === 'like') {
                if (checkClick.like === '1') {
                    setcheckClick({ ...checkClick, like: '0', dislike: '0' });
                    let response = await DeleteCourseLike(Course.courseId);
                    // notifySuccess(response?.message);
                } else {
                    setcheckClick({ ...checkClick, like: '1', dislike: '0' });
                    let response = await CourseLike(Course.courseId);
                    // notifySuccess(response?.message);
                }
            } else {
                if (checkClick.save === true) {
                    setcheckClick({ ...checkClick, save: !checkClick.save });
                    let response = await DeleteFavoriteCourse(Course.courseId);
                    // notifySuccess(response?.message);
                } else {
                    setcheckClick({ ...checkClick, save: !checkClick.save });
                    let response = await AddFavoriteCourse(Course.courseId);
                    // notifySuccess(response?.message);
                }
            }
        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred!');
        }
    }

    return (
        <div className="flex flex-row gap-2">
            <div
                className={`w-[56px] h-[56px] rounded-[100%] border-[#E4E4E4] border-2 ${
                    checkClick.dislike === '1' ? 'bg-black' : ''
                } flex items-center justify-center cursor-pointer hover:scale-110 transition-all max-lg:w-[46px] h-[46px] max-sm:w-[56px] h-[56px]`}
                onClick={() => CheckClick('dislike')}
            >
                <ThumbsDownIcon
                    className={`${
                        checkClick.dislike === '1' ? ' text-white dark:text-red-500' : 'text-black dark:text-white'
                    }`}
                />
            </div>
            <div
                className={`w-[56px] h-[56px] rounded-[100%] border-[#E4E4E4] ${
                    checkClick.like === '1' ? 'bg-black' : ''
                } border-2 flex items-center justify-center cursor-pointer hover:scale-110 transition-all max-lg:w-[46px] h-[46px] max-sm:w-[56px] h-[56px]`}
                onClick={() => CheckClick('like')}
            >
                <ThumbsUpIcon
                    className={`${
                        checkClick.like === '1' ? 'text-white dark:text-red-500 ' : 'text-black dark:text-white'
                    }`}
                />
            </div>
            <div
                className={`w-[56px] h-[56px] rounded-[100%] border-[#E4E4E4] border-2 ${
                    checkClick.save ? 'bg-black' : ''
                } flex items-center justify-center cursor-pointer hover:scale-110 transition-all max-lg:w-[46px] h-[46px] max-sm:w-[56px] h-[56px]`}
                onClick={() => CheckClick('save')}
            >
                <BookmarkAdd02Icon
                    className={`${
                        checkClick.save ? 'text-white dark:text-red-500 ' : 'text-black dark:text-white'
                    }`}
                />
            </div>
        </div>
    );
};

export default Options;
