// framer motion
import {motion} from 'framer-motion'
import Circles from '../../components/Circles';

// variants
import {fadeIn} from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer'

const Journey = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <Circles/>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-center h-full container mx-auto'>
          {/* title */}
          <motion.h1 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='text-2xl sm:text-5xl lg:text-4xl xl:text-7xl h1'>
            JOURNEY <br />{' '}
            <span className='text-accent'>BEGAN</span>
          </motion.h1>
          {/* subtitle */}
          <div>
            <motion.div 
              variants={fadeIn('left', 0.3)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-30 mb-10 xl:mb-0'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                  <motion.h2 
                    variants={fadeIn('left', 0.3)} 
                    initial="hidden" 
                    animate="show" 
                    exit="hidden" 
                    className='text-xl sm:text-xl lg:text-xl xl:text-2xl h3 xl:mt-6 py-2 md:py-3 xl:mr-6'>14th OF SEPTEMBER,2021<br />
                    <span className='text-accent'>RADHE RADHE GPS Pvt. got incorporated</span><br />
                  </motion.h2>
                  <motion.h2 
                    variants={fadeIn('left', 0.3)} 
                    initial="hidden" 
                    animate="show" 
                    exit="hidden" 
                    className='text-xl sm:text-xl lg:text-xl xl:text-2xl h3 xl:mt-6 py-2 md:py-3 xl:mr-6'>17TH OF APRIL,2022<br />
                    <span className='text-accent'>Recognised as a Startup by DPIIT</span><br />
                  </motion.h2>
                  <motion.h2 
                    variants={fadeIn('left', 0.3)} 
                    initial="hidden" 
                    animate="show" 
                    exit="hidden" 
                    className='text-xl sm:text-xl lg:text-xl xl:text-2xl h3 xl:mt-6 py-2 md:py-3 xl:mr-6'>1ST OF MARCH,2023<br />
                    <span className='text-accent'>Had officially launched our 1st Digital Signage Project @Pelican_Plaza, NH-54, Faridkot</span><br />
                  </motion.h2>
                </div>
            </motion.div>
          </div>
          <div className='flex flex-col xl:flex-row gap-x-8 items-center xl:text-center'>
              <motion.div 
                variants={fadeIn('right', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-base sm:text-lg lg:text-xl flex items-center overflow-y-auto max-h-[54vh] bg-black rounded-lg lg:py-2 lg:px-2'>
                Started developing various prototypes of low cost digital signage units that would be economically viable to all business houses irrespective of their scale.
                <img className='w-20 h-20 rounded-md' src="gps.jpg" alt="" srcset="" />
              </motion.div>
              <motion.div 
                variants={fadeIn('right', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-base sm:text-lg lg:text-xl px-20 bg-black rounded-lg lg:py-2 lg:px-2'>
                In the meanwhile working in the traditional industry to better understand and solve the hurdles to development in the industry.
              </motion.div>
          </div>
          <div>
            <motion.div 
                variants={fadeIn('right', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:text-center mb-10 xl:mb-16 text-base sm:text-lg lg:text-x'>
                THE RESEARCH, EXPLORATION AND THE REVOLUTION CONTINUES...
              </motion.div>
          </div>
          <motion.div 
              variants={fadeIn('right', 0.3)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='max-w-sm xl:max-w-xl mx-auto xl:text-center mb-5 xl:mb-16 text-base sm:text-lg lg:text-xl'>
              7 0 0 9 2 - 8 6 6 7 3
            </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-full h-96 sm:h-72 lg:h-full absolute right-0 bottom-0'>
        <ParticlesContainer/>
      </div>
    </div>
  );
};

export default Journey;
