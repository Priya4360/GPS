// next image
import Image from 'next/image'

// next link
import Link from 'next/link'

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link 
        href={'/work'} 
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
      >
        <Image 
          src={'/gps.jpg'}
          width={141}
          height={148}
          alt=''
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] rounded-full'
        />
      </Link>
    </div>
  )
};

export default ProjectsBtn;
