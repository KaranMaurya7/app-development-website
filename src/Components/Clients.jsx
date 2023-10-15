import { useEffect, useState } from 'react'
import person from '../assets/Person.png'
import { commnetsdata } from '../data/commentsData'
import { AnimatePresence, motion } from 'framer-motion';

const animate = {
    initial: { x: -10, opacity: 0 },
    animate: { x: 0, opacity: 1, transiition: { delay: 1, duration: 0.5 } }
}


export function Clients() {

    const [initial, setInitial] = useState(0)
    const [item, setItem] = useState({})

    const handleAdd = () => {

        if (initial >= commnetsdata.length - 1) {
            setInitial(0);
            return;
        }
        setInitial(initial + 1);

    }
    const handleMinus = () => {

        if (initial <= 0) {
            console.log(commnetsdata.length - 1)
            setInitial(commnetsdata.length - 1);
            return;
        }
        setInitial(initial - 1);

    }

    useEffect(() => {

        setItem(commnetsdata[initial]);

    }, [initial, item])

    return (<>
        <section id='clients' className='w-full border-t-2 m-auto my-8 flex flex-wrap flex-col lg:w-[70vw]'>
            <div className='w-full text-center p-3 m-auto lg:w-[80%]'>
                <h1 className='text-2xl font-bold '>OUR CLIENTS SAY</h1>
            </div>

            <div className='flex flex-row items-center justify-evenly'>

                <img onClick={handleMinus} className='w-10 h-10' src='https://cdn-icons-png.flaticon.com/128/318/318276.png' alt='next button' />

                <div className="w-[80%] h-[35rem] rounded-md p-5 m-auto border-[5px] border-blue-500 flex flex-col items-center lg:h-[30rem] lg:p-8 ">
                    <img className='w-28 h-28 rounded-full' src={person} alt='image of commenter' />

                    <motion.h1 variants={animate} initial='initial' whileInView='animate' viewport={{ once: true }}
                        className='mt-4'>{item.name}</motion.h1>
                    <motion.h1 variants={animate} initial='initial' whileInView='animate' viewport={{ once: true }}
                    >{item.position}</motion.h1>
                    <motion.p variants={animate} initial='initial' whileInView='animate' viewport={{ once: true }}
                        className='mt-4 text-lg text-justify lg:text-2xl'>
                        {item.body}
                    </motion.p>

                </div>

                <img onClick={handleAdd} className='w-10 h-10' src='https://cdn-icons-png.flaticon.com/128/318/318275.png' alt='next button' />
            </div>
        </section>
    </>)
}