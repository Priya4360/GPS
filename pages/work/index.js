// framer motion
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer'

const Work = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='h1'>
            GROWTH <br />{' '}
            <span className='text-accent'>OPPORTUNITIES </span>
            WITH <img src="gps.jpg" alt="" srcset="" />
          </motion.h1>
          {/* subtitle */}
          <div>
            <motion.div 
              variants={fadeIn('down', 0.3)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              <div class="flow-root">  
                  <p class="float-left">PARTNER/INVEST</p> 
                  <p class="float-right">'You provide resources, We provide returns</p>
              </div>
              <br />
              <div class="flow-root">  
                  <p class="float-left">INTERN/JOIN</p> 
                  <p class="float-right">Work culture that you deserve!</p>
              </div>
              <br />
              <div class="flow-root">  
                  <p class="float-left">BENEFICIARY/CLIENT</p> 
                  <p class="float-right">Your business needs Us!</p>
                </div>
            </motion.div>
            <motion.div 
              variants={fadeIn('down', 0.3)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              THE ONLY REAL CORPORATE OPPORTUNITY IN YOUR REGION
            </motion.div>
          </div>
          <motion.div 
              variants={fadeIn('down', 0.3)} 
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

export default Work;

