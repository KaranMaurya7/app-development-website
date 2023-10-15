import { developAppData } from '../data/developApps.data';
import { motion } from 'framer-motion'

import { andrioddevelopers, crossPlatformDevelopers, iosdevelopers, webdevelopers } from '../data/developersdata';

const fadeIn = {
    initial: { opacity: 0, y: 100 },
    animate: (i) => ({
      opacity: 1, y: 0, tranistion: {
        delay: 0.05 * i
      }
    }),
    hover:{
      y: -5
    }
  }
export function Services(){
    return(<>
      <section id='services' className='w-full border-t-2 m-auto my-8 flex flex-wrap flex-col lg:w-[70vw]'>
        <div className='w-full text-center p-3 m-auto lg:w-[80%]'>
          <h1 className='text-2xl font-bold '> APPLICATIONS WE DEVELOP</h1>
          <h3 className='text-lg my-2'>At our company, we specialize in providing top-notch app development services. Our team of experienced developers is dedicated to creating innovative and user-friendly applications tailored to your business needs. We provide professional development of the following app types: </h3>
        </div>

        <div className='w-full p-2 flex flex-row flex-wrap gap-4'>

          {developAppData.map((item, i) =>
            <motion.div key={i}
              className='min-w-[17rem] rounded-sm cursor-pointer m-auto border-2  hover:shadow-lg  p-5 w-1/3/ h-[8rem]'

              variants={fadeIn} initial='initial' whileHover= 'hover' whileInView='animate' viewport={{ once: true }} custom={i}
            >

              <div className='w-full h-[80%] flex justify-center items-center'>
                <img className='w-10' src={item.iconCdn} alt='pic' />
              </div>
              <h2 className='text-center font-semibold  text-gray-900'>{item.title}</h2>
            </motion.div>
          )}

        </div>

      </section>

      <section id='hire' className='w-full  border-t-2 m-auto my-8 flex flex-wrap flex-col lg:w-[70vw]'>
        <div className='w-full  text-center p-3 m-auto lg:w-[80%]'>
          <h1 className='text-2xl font-bold '> DEVELOPMENTS SERVICES WE PROVIDE</h1>
        </div>
        <div className='w-full rounded-md shadow-lg p-10 bg-blue-100 gap-4 m-auto flex flex-wrap flex-row items-center justify-evenly'>
          <div className='w-full mt-4 md:w-1/3  '>
            <h1 className='w-full border-b-[1px] border-black marker:cursor-pointer font-semibold text-lg'>iOS App Development</h1>
            <ul className=' ml-3 text-sm md:flex flex-col gap-3 mt-3'>
              {
                iosdevelopers.map((item, i) => <li className='my-1'  key= {`'IOS' + ${i}`}><a href='#'>{item.developer}</a></li>)
              }


            </ul>
          </div>
          <div className='w-full mt-4 md:w-1/3  '>
            <h1 className='w-full border-b-[1px] border-black marker:cursor-pointer font-semibold text-lg'>Andriod App Development</h1>
            <ul className=' ml-3 text-sm md:flex flex-col gap-3 mt-3'>
              {
                andrioddevelopers.map((item, i) => <li className='my-1'  key= {`'AND' + ${i}`}><a href='#'>{item.developer}</a></li>)
              }


            </ul>
          </div>
          <div className='w-full mt-4 md:w-1/3  '>
            <h1 className='w-full border-b-[1px] border-black marker:cursor-pointer font-semibold text-lg'>Cross-Platform App Development</h1>
            <ul className=' ml-3 text-sm md:flex flex-col gap-3 mt-3'>
              {
                crossPlatformDevelopers.map((item, i) => <li className='my-1'   key= {`'CROSS' + ${i}`}><a href='#'>{item.developer}</a></li>)
              }


            </ul>
          </div>
          <div className='w-full mt-4 md:w-1/3 '>
            <h1 className='w-full border-b-[1px] border-black marker:cursor-pointer font-semibold text-lg'>Progressive Web Development</h1>
            <ul className=' ml-3 text-sm md:flex flex-col gap-3 mt-3'>
              {
                webdevelopers.map((item, i) => <li className='my-1'   key= {`'WEB' + ${i}`}><a href='#'>{item.developer}</a></li>)
              }


            </ul>
          </div>
        </div>
      </section>
    </>)
} 