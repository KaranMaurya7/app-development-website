import mapSvg from '../assets/Group_2111.svg';
import {motion} from 'framer-motion';

const animateLeft ={
    initial:{y:-150,opacity:0.3},
    animate:{y:0, opacity:1, transition:{
        duration:0.5 ,ease: 'easeInOut'
    }}
}
const animateright ={
    initial:{y:150,opacity:0.3},
    animate:{y:0, opacity:1, transition:{
        duration:0.5 ,ease: 'easeInOut'
    }}
}

export function DevelopmentProcess() {
    return (<>
        <section className='w-full border-t-2 m-auto my-16 flex flex-wrap flex-row lg:w-[70vw]'>

            <div className='w-full text-center p-3 m-auto lg:w-[80%]'>
                <h1 className='text-2xl font-bold'>KEY STEPS IN OUR MOBILE APP DEVELOPMENT PROCESS</h1>
                <h3 className='text-lg my-2'>We provide full-cycle mobile app development to fit your business domain and budget requirements.</h3>
            </div>

            <motion.div
            variants={animateLeft} initial='initial' whileInView='animate' viewport={{once:true}}
            className=' p-5 w-[80%]  shadow-xl  hover:shadow-lg m-auto lg:w-[30%]'>
                <ul className='flex flex-col gap-3'>
                    <li className='flex gap-2 items-center'>
                        <img className='w-5 h-5 inline' src='https://cdn-icons-png.flaticon.com/128/1828/1828640.png' alt='check icon' />
                        <p>A shared understanding of project objectives</p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-5 h-5 inline' src='https://cdn-icons-png.flaticon.com/128/1828/1828640.png' alt='check icon' />
                        <p>Business requirements transformed into functional</p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-5 h-5 inline' src='https://cdn-icons-png.flaticon.com/128/1828/1828640.png' alt='check icon' />
                        <p>The initial vision of the architecture of the project</p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-5 h-5 inline' src='https://cdn-icons-png.flaticon.com/128/1828/1828640.png' alt='check icon' />
                        <p>A project plan that includes risks and budgets</p>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <img className='w-5 h-5 inline' src='https://cdn-icons-png.flaticon.com/128/1828/1828640.png' alt='check icon' />
                        <p>A clear product strategy and development roadmap</p>
                    </li>
                </ul>

            </motion.div>

            <motion.img 
            variants={animateright} initial='initial' whileInView='animate' viewport={{once:true}}
             className='w-full px-5 lg:m-auto mt-5 lg:w-[60%]' src={mapSvg} alt='map' />
        </section >

    </>)
} 