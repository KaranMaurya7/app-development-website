import displayImg from '../assets/developmentImage.png';
import { motion } from 'framer-motion';

const animatetext = {
    initial: {
        y: -10, opacity: 0
    }, animate: {
        y: 0, opacity: 1,
        transition: { duration: 0.5 }
    }
}
const animatepara = {
    initial: {
        y: -10, opacity: 0
    }, animate: {
        y: 0, opacity: 1,
        transition: { delay: 0.3, duration: 0.5 }
    }
}
export function Header() {
    return (<>
        <header id='about' className='w-full relative pb-5 z-10 mt-[5.1rem] min-h-[80vh] shadow-md   bg-blue-100'>
            <div className='h-full w-full m-auto lg:w-[90%] pt-16 flex flex-row  flex-wrap items-center'>

                <div className='mx-6 z-10 lg:pl-20 lg:w-[50vw] lg:px-6'>
                    <motion.h1
                        variants={animatetext} initial='initial' animate='animate'
                        className='font-bold text-4xl'>Empowering Your Ideas with Our <br /><span className='text-green-700'> App Development Services </span></motion.h1>
                    <motion.p variants={animatepara} initial='initial' whileInView='animate'
                        className='text-lg mt-4 w-[90%]'>
                        At our agency, we believe in the power of ideas. We are dedicated to transforming your innovative ideas into reality through our top-notch app development services. With a team of experienced developers and creative designers, we specialize in developing apps that are not only functional but also provide an exceptional user experience. Whether you're a startup looking to launch your first app or an established company seeking to improve your digital presence, we're here to help you succeed in the digital world.
                    </motion.p>
                    <button className='mt-4 px-4 py-2 transition-all border-b-black border-2 hover:text-white hover:bg-blue-800 '>Let's Talk</button>
                </div>

                <motion.img initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} className=' w-[30rem]  opacity-20 absolute lg:w-[30%] lg:h-auto lg:relative lg:opacity-100' src={displayImg} alt='display image' />
            </div>
        </header>

    </>)
}