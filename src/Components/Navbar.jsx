import { BurgerMenu } from './burgerMenu';
import { AnimatePresence } from "framer-motion";

export function Navbar({ burgerMenu, setBurgerMenu }) {
  return (<>
    <nav className='w-full fixed top-0 z-20 h-20 transition-all shadow-lg  bg-white '>

      <div className='w-full flex h-full m-auto  items-center justify-between lg:w-[90%]' >


        <h1 className='ml-3 pl-0 lg:pl-20 font-bold text-xl cursor-pointer text-green-900'>APP Development</h1>
        <img onClick={() => setBurgerMenu(!burgerMenu)} className='w-10 h-10 mr-3 cursor-pointer lg:hidden' src='https://cdn-icons-png.flaticon.com/128/9046/9046112.png' alt='burger icon' />

        <div className='hidden h-7 lg:w-[50%] lg:block'>

          <ul className='flex flex-row text-center justify-evenly text-lg '>
            <li className=' transition-all hover:border-b-2 hover:border-green-700 '>
              <a href='#about'>About</a>
            </li>
            <li className=' transition-all  hover:border-b-2 hover:border-green-700  '>
              <a href='#services'>Services</a>
            </li>
            <li className=' transition-all hover:border-b-2 hover:border-green-700  '>
              <a href='#hire'>Hire </a>
            </li>
            <li className=' transition-all  hover:border-b-2 hover:border-green-700 '>
              <a href='#clients'>Clients</a>
            </li>
            <li className='transition-all hover:border-b-2 rounded-md bg-green-500 text-white px-[0.5rem] py-[0.3rem]  -mt-1 hover:bg-green-600 '>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    <AnimatePresence>
      {burgerMenu &&
        <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      }
    </AnimatePresence>

  </>)
}