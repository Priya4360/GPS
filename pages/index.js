// components
import ProjectsBtn from '../components/ProjectsBtn'
import Socials from '../components/Socials';

// framer motion
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../variants';
import ParticlesContainer from '../components/ParticlesContainer'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
        <div className='container mx-auto'>
          <div className='text-center flex flex-col lg:flex-row justify-between xl:pt-40 sm:pt-20 xl:text-left h-full container mx-auto'>
            RADHE RADHE GPS PRIVATE LIMITED
            <Socials/>
          </div>
        </div>
      </header>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-20 lg:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl h1'>
            GROWTH <br />{' '}
            <span className='text-accent'>PROGRAMME</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
            variants={fadeIn('down', 0.3)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='text-sm sm:text-base lg:text-lg xl:text-xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 sm:mb-10 lg:mb-16'>
            #startupindia
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn/>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='hidden xl:flex'
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-full h-80 md:h-96 lg:h-full absolute right-0 bottom-0'>
        <ParticlesContainer/>
        {/* avatar img */}
        <motion.div  
          variants={fadeIn('up', 0.5)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          transition={{duration: 1, ease:'easeInOut'}}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        >
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
