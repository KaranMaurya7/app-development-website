import { motion } from 'framer-motion'


const animateMenu = {
  initial: {
    x: -'500', 
  },
  animate: {
    x: 0, 
    transition: { duration: 0.4, opacity: 1 },

  },
  exit: { x: -'500', opacity: 0 }
}
export function BurgerMenu({burgerMenu, setBurgerMenu}) {
    return (<>
        <motion.section
            variants={animateMenu} initial='initial' animate='animate' exit='exit'
            className='w-screen z-40 h-screen position fixed top-0 bottom-0 left-0 right-0 bg-blue-200 lg:hidden'>

            <nav className='w-full h-20 flex items-center border-b-2 justify-between '>
                <h1 className='ml-3 font-bold text-xl cursor-pointer text-green-900'>APP Development</h1>
                <img onClick={() => setBurgerMenu(!burgerMenu)} className='w-10 h-10 mr-3 cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/3416/3416079.png' alt='burger icon' />
            </nav>

            <section className='mt-10'>

                <ul onClick={() => setBurgerMenu(!burgerMenu)} className='flex flex-col text-center gap-10 text-xl '>
                    <li className=' transition-all hover:scale-110 font-bold '>
                        <a href='#about'>About</a>
                    </li>
                    <li className=' transition-all hover:scale-110 font-bold  '>
                        <a href='#services'>Services</a>
                    </li>
                    <li className=' transition-all hover:scale-110 font-bold '>
                        <a href='#hire'>Hire</a>
                    </li>
                    <li className=' transition-all hover:scale-110 font-bold  '>
                        <a href='#clients'>Clients</a>
                    </li>
                    <li className='transition-all hover:scale-110 font-bold  '>
                        <a href='#contact'>Contact Us</a>
                    </li>

                </ul>

            </section>
        </motion.section>
    </>)
}