// components
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import ParticlesContainer from '../../components/ParticlesContainer'

const About = () => {
  return (
    <div className='h-full bg-primary/30 py-32 text-center'>
      <Circles/>  
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='h2'>
            GROW <span className='text-accent'>WITH</span>{/*<img className='w-20 h-20 {display:inline}' src="gps.jpg" alt="" srcset="" />*/}
          </motion.h2>
          <motion.h3 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='max-w-full mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            ONE AND ONLY GOVERNMENT RECOGNISED ADTECH STARTUP IN INDIA
          </motion.h3>
          <motion.h4 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='max-w-full mx-auto xl:mx-0 mb-6 xl:mb-2 px-2 xl:px-0'
          >
            ABOUT COMPANY
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
          </motion.h4>
          <motion.p 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='max-w-full mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            WE ARE AN ADVERTISEMENT AND SIGNAGE COMPANY AIMING TO PROVIDE MODERN YET ECONOMICAL SOLUTIONS TO SMALL AND MEDIUM BUSINESS HOUSES, RELYING ON AND RESEARCHING IN ADVERTISEMENT TECHNOLOGY AT ITS CORE, WHILE ALSO SIMULTANEOUSLY AIDING IN SUSTAINABLE DEVELOPMENT AND ELIMINATING NEGATIVE ENVIRONMENTAL IMPACT OF THE
          </motion.p>
          <motion.h4 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='max-w-full mx-auto xl:mx-0 mb-6 xl:mb-2 px-2 xl:px-0'
          >
            VISION / MISSION
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
          </motion.h4>
          
          <motion.p 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='max-w-full mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0'
          >
             WE ENVISION A FUTURE IN WHICH THE SIGNAGES ARE SO WELL BLENDED IN THE ENCASING ENVIRONMENT SUCH THAT THEY BE A SINGLE ENTICING BEING TO THE NAKED EYE. BY BEING SO EYE-CATCHY THESE SIGNAGES AND ADVERTISEMENTS WILL SERVETE BEST PURPOSE NOT ONLY THE BUSINESS'S INVESTING IN THEM BUT ALSO COMPLEMENTING TO THE BEAUTIFICATION OF THE REAL ESTATE THEY UTILIZE. ALSO THESE UNITS WILL NOT ONLY SERVE THE PRIMARY PURPOSE OF THE ADVERTISEMENTS AND SIGNAGES THAT IS TO ADVERTISE OR INFORMATIONAL USAGE, BUT WILL BE A SOURCE OF THE GO ENTERTAINEMENT TO THE MODERN SOCIETY AND ALSO ELIMINATES THE ENVIRONMENTAL DEGRADATION BY TRADITIONAL UNITS.
          </motion.p>
          <motion.p 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'  
            className='max-w-full mx-auto xl:mx-0 mb-6 xl:mb-2 px-2 xl:px-0'
          >
            ALL THINGS SAID OUR VISION DOES NOT LIMITS TO THE ABOVE WORDS BUT WE BELIEVE THIS INDUSTRY IS THE ROOT THAT HAS THE POTENTIAL TO
          </motion.p>
        </div>
        {/* image */}
        <div className='w-full h-full absolute right-0 bottom-0'>
          <ParticlesContainer/>
        </div>
      </div>
    </div>
  )
};

export default About;
