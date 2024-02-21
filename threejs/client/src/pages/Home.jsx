import { motion , AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import CustomButton from '../components/CustomButton';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <h1 className='logo'>Shirtzerr</h1>
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div className='hidden  sm:block' {...headTextAnimation}>
              <h2 className='intro-header head-text' >
                Make it <br className='xl:block hidden'/> HAPPEN
              </h2>
            </motion.div>
            <motion.div {...headContainerAnimation} className='flex flex-col gap-1'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                 Create your unique and exclusive shirt with our brand-new 3D customization tool.  <strong>Unleash your imagination</strong> and define your own style
              </p>
              <CustomButton
                type='filled'
                title='Customize'
                handleClick={() => state.intro = false}
                customStyle='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home