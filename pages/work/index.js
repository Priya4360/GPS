// framer motion
import {motion} from 'framer-motion'
import Circles from '../../components/Circles';

// variants
import {fadeIn} from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer'

const Work = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <Circles/>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-24 xl:text-left h-full container mx-auto'>
          {/* title */}
          <div className='container max-h-full max-w-full flex flex-col items-center justify-center'>
            <motion.h1 
              variants={fadeIn('down', 0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl h1'>
              GROWTH <br />{' '}
              <span className='text-accent'>OPPORTUNITIES </span> <br />
              WITH
              <img className='lg:h-40 lg:w-40 sm:h-20 sm:w-20 rounded-full inline sm:px-2 lg:px-6' src='gps.jpg' alt='' srcSet='' />
            </motion.h1>
            {/* subtitle */}
            <div>
              <motion.div 
                variants={fadeIn('down', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 sm:mb-10 lg:mb-16'>
                <div className='flow-root'>  
                  <p className='float-left'>PARTNER/INVEST</p> 
                  <p className='float-right'>'You provide resources, We provide returns</p>
                </div>
                <br />
                <div className='flow-root'>  
                  <p className='float-left'>INTERN/JOIN</p> 
                  <p className='float-right'>Work culture that you deserve!</p>
                </div>
                <br />
                <div className='flow-root'>  
                  <p className='float-left'>BENEFICIARY/CLIENT</p> 
                  <p className='float-right'>Your business needs Us!</p>
                  </div>
              </motion.div>
              <motion.div 
                variants={fadeIn('down', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 sm:mb-10 lg:mb-16'>
                THE ONLY REAL CORPORATE OPPORTUNITY IN YOUR REGION
              </motion.div>
            </div>
            <motion.div 
                variants={fadeIn('down', 0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 sm:mb-10 lg:mb-16'>
                7 0 0 9 2 - 8 6 6 7 3
              </motion.div>
          </div>
          </div>
      </div>
      {/* image */}
      <div className='w-full h-96 sm:h-72 lg:h-full absolute right-0 bottom-0'>
        <ParticlesContainer/>
      </div>
    </div>
  );
};

export default Work;

