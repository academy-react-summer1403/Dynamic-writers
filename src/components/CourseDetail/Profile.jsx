import Image from '../../common/image/Image'
const Profile = ({img,name}) => {
  return (
    <div className='flex flex-row-reverse gap-4'>
        <Image image={img} />
        <span className='font-[700] text-[20px] text-[#272727] leading-[40px] text-right dark:text-white max-lg:text-[17px] max-sm:text-[20px]'>{name}</span>
    </div>
  )
}

export default Profile