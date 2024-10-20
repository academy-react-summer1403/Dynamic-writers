import Image from '../../common/image/Image'
const Profile = ({img,name}) => {
  return (
    <div className='flex md:flex-row-reverse flex-col items-end md:items-center gap-4'>
        <Image image={img} />
        <span className='font-[700] text-[20px] text-[#272727] dark:text-white whitespace-nowrap leading-[40px] text-right max-lg:text-[17px] max-sm:text-[20px]'>{name.replace('-', ' ')}</span>
    </div>
  )
}

export default Profile