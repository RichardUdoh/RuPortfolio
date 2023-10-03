import '../styles/globals.css'
import Layout from '../components/Layout' //Components-layout
import Transition from '../components/Transition' // Components Transitions
import {useRouter} from 'next/router'   // router
import {AnimatePresence, motion} from 'framer-motion'   // framer-motion

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  
  <Layout>
    <AnimatePresence mode='wait'>  
      <motion.div key={router.route} className='h-full'>
        <Transition/>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>

  </Layout> 
)}

export default MyApp
