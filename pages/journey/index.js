// framer motion
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer'

const Journey = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='h1'>
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
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
                <div className='flex '>
                  <div className='px-2'>  
                  <p class="float-left"> 14TH OF SEPTEMBER,2021 <br /> Radhe Radhe GPS Pvt. Ltd. got Incorporated </p> 
                  </div>
                  <div className='px-2'>  
                    <p class="float-middle"> 17TH OF APRIL,2022 <br /> Recognised as a Startup by DPIIT </p> 
                  </div>
                  <div className='px-2'>  
                    <p class="float-right">1ST OF MARCH,2023 <br /> Had officially launched our 1st Digital Signage Project @Pelican_Plaza, NH-54, Faridkot </p> 
                  </div>
                </div>
            </motion.div>
          </div>
          <div className='flex'>
            <motion.div 
                variants={fadeIn('right', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 flex'>
                Started developing various prototypes of low cost digital signage units that would be economically viable to all business houses irrespective of their scale.
                <img className='w-20 h-20' src="gps.jpg" alt="" srcset="" />
              </motion.div>
              <motion.div 
                variants={fadeIn('right', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 px-20'>
                In the meanwhile working in the traditional industry to better understand and solve the hurdles to development in the industry.
              </motion.div>
          </div>
          <div>
            <motion.div 
                variants={fadeIn('right', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
                THE RESEARCH, EXPLORATION AND THE REVOLUTION CONTINUES...
              </motion.div>
          </div>
          <motion.div 
              variants={fadeIn('right', 0.3)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              7 0 0 9 2 - 8 6 6 7 3
            </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-full h-full absolute right-0 bottom-0'>
        <ParticlesContainer/>
      </div>
    </div>
  );
};

export default Journey;
