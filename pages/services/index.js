// components

import Circles from '../../components/Circles';

// framer motion 
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import ParticlesContainer from '../../components/ParticlesContainer'

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className="container mx-auto ">
        <div className='flex flex-row xl:flex-row gap-x-8 items-center justify-center py-5'>
          <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>My Services <span className='text-accent'>.</span>
        </motion.h2>
        </div>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='w-full xl:max-w-[50%] text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 py-5'>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 py-5">
              <li class="py-2 ...">Rental advertisement Hoarding/Led's</li>
              <li class="py-2 ...">Manufacture of heavy duty signage</li>
              <li class="py-2 ...">3D Printing ( Miniature & Industrial )</li>
              <li class="py-2 ...">Ad campaign planning & execution</li>
              <li class="py-2 ...">Projection Mapping</li>
              <li class="py-2 ...">Offset Printing</li>
              <li class="py-2 ...">House and Corporate Name Plates</li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='w-full xl:max-w-[65%] text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 py-5'>
            <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 py-5">
              <li class="py-2 ...">Rental advertisement Hoarding/Led's</li>
              <li class="py-2 ...">Manufacture of heavy duty signage</li>
              <li class="py-2 ...">3D Printing ( Miniature & Industrial )</li>
              <li class="py-2 ...">Ad campaign planning & execution</li>
              <li class="py-2 ...">Projection Mapping</li>
              <li class="py-2 ...">Offset Printing</li>
              <li class="py-2 ...">House and Corporate Name Plates</li>
            </ul>
          </motion.div>
        </div>
        {/* image */}
      <div className='w-full h-full absolute right-0 bottom-0'>
        <ParticlesContainer/>
      </div>
      </div>
    </div>
  )
};

export default Services;
