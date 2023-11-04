// components
import Circles from '../../components/Circles';

// framer motion 
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import ParticlesContainer from '../../components/ParticlesContainer'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className="container mx-auto ">
        <div className='flex flex-row xl:flex-row gap-x-8 items-center justify-center py-5'>
          <motion.h2 variants={fadeIn('left', 0.3)} initial="hidden" animate="show" exit="hidden" className='h2 xl:mt-8'>LET'S <br />
          <span className='text-accent'>CONNECT</span><br />
          WITH US!
        </motion.h2>
        </div>
        <div className='flex flex-row xl:flex-row gap-x-8 items-center justify-center py-5'>
          <motion.h3 variants={fadeIn('right', 0.3)} initial="hidden" animate="show" exit="hidden" className='h3 xl:mt-8'>YOUR FUTURE<span className='text-accent'> AWAITS!</span>
        </motion.h3>
        </div>
        <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-full dark:bg-gray-700"></hr>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='w-full xl:max-w-full text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 py-5'>
              <div className='flex items-center'>  
                <div className='px-10'>
                  <p>70092-86672</p> 
                  <p>fdkgarg@yahoo.com</p>
                </div>
                <div className='px-10'>
                  <p>WE ARE NOT THE NEXT BIG THING, BUT THE GIANT IN MAKING</p>
                </div>
              </div>
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

export default Contact;