// components

import Circles from '../../components/Circles';

// framer motion 
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import ParticlesContainer from '../../components/ParticlesContainer'

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-10 sm:py-16 lg:py-36 flex items-center justify-center text-center'>
      <Circles/>
      <div className="container mx-auto ">
        <div className='flex flex-col gap-5 sm:flex-row sm:gap-8 lg:flex-row lg:gap-8 items-center justify-center'>
          <motion.h2 
            variants={fadeIn('up', 0.3)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl h2 xl:mt-8'>My <span className='text-accent'>Services.</span>
        </motion.h2>
        </div>
        <div className='flex flex-col lg:flex-row gap-x-8 items-center justify-center'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='w-full xl:w-[50%] text-center flex flex-col lg:text-left mb-4 xl:mb-0 py-5 overflow-y-auto max-h-[50vh]'>
            <ul class='max-w-md space-y-1 text-white list-disc list-inside dark:text-white py-5'>
              <li className='py-2'>Rental advertisement Hoarding/Led's</li>
              <li className='py-2'>Manufacture of heavy duty signage</li>
              <li className='py-2'>3D Printing ( Miniature & Industrial )</li>
              <li className='py-2'>Ad campaign planning & execution</li>
              <li className='py-2'>Projection Mapping</li>
              <li className='py-2'>Offset Printing</li>
              <li className='py-2'>House and Corporate Name Plates</li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='w-full xl:w-[50%] text-center flex flex-col lg:text-left mb-4 xl:mb-0 py-5 overflow-y-auto max-h-[50vh]'>
            <ul class='max-w-md space-y-1 text-white list-disc list-inside dark:text-white py-5'>
              <li className='py-2'>Rental advertisement Hoarding/Led's</li>
              <li className='py-2'>Manufacture of heavy duty signage</li>
              <li className='py-2'>3D Printing ( Miniature & Industrial )</li>
              <li className='py-2'>Ad campaign planning & execution</li>
              <li className='py-2'>Projection Mapping</li>
              <li className='py-2'>Offset Printing</li>
              <li className='py-2'>House and Corporate Name Plates</li>
            </ul>
          </motion.div>
        </div>
        {/* image */}
      <div className='w-full h-96 sm:h-72 lg:h-full absolute right-0 bottom-0'>
        <ParticlesContainer/>
      </div>
      </div>
    </div>
  )
};

export default Services;
