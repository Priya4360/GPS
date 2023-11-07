// components
import Circles from '../../components/Circles';

// framer motion 
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import ParticlesContainer from '../../components/ParticlesContainer'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30 py-10 sm:py-16 lg:py-36 flex items-center text-center'>
      <Circles/>
      <div className="container mx-auto ">
        <div className='flex flex-col gap-5 sm:flex-row sm:gap-8 lg:flex-row lg:gap-8 items-center justify-center'>
          <motion.h2 
            variants={fadeIn('left', 0.3)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl h2 xl:mt-8 py-10 md:py-0'>LET'S <br />
            <span className='text-accent'>CONNECT</span><br />
            WITH US!
        </motion.h2>
        </div>
        <div className='flex flex-row xl:flex-row gap-x-8 items-center justify-center py-5'>
          <motion.h3 
            variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='text-xl sm:text-2xl lg:text-3xl h3 xl:mt-8'>YOUR FUTURE<span className='text-accent'> AWAITS!</span>
        </motion.h3>
        </div>
        <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
        <div className='flex flex-col lg:flex-row gap-x-8 items-center justify-center sm:justify-center'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='w-full xl:w-[30vw] text-center flex flex-col lg:text-center mb-4 sm:mb-0 xl:mb-0 py-5'>
            <div className='flex flex-col items-center sm:flex-row sm:items-center'>  
              <div className='px-4 sm:px-0'>
                <p>70092-86672</p> 
                <p>fdkgarg@yahoo.com</p>
              </div>
              <div className='text-lg sm:text-xl lg:text-2xl'>
                <p>WE ARE NOT THE NEXT BIG THING, BUT THE GIANT IN MAKING</p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* image */}
        <div className='w-full h-96 sm:h-72 lg:h-full absolute right-0 bottom-0 overflow-y-auto'>
          <ParticlesContainer/>
        </div>
      </div>
    </div>
  )
};

export default Contact;