import { motion } from 'framer-motion';

const animatetext = {
    initial: {
        y: -10, opacity: 0
    }, animate: {
        y: 0, opacity: 1,
        transition: { delay: 0.2, duration: 0.5 }
    }
}
const animateright = {
    initial: { y: 150, opacity: 0.3 },
    animate: {
        y: 0, opacity: 1, transition: {
            duration: 0.5, ease: 'easeInOut'
        }
    }
}
export function Contact() {
    return (<>
        <section id = 'contact' className='scroll-smooth w-full border-t-2 m-auto my-16  flex flex-wrap flex-row lg:w-[70vw]'>

            <div className='w-full text-center p-3 m-auto lg:w-[80%]'>
                <h1 className='text-2xl font-bold'>MOVE YOUR MOBILE PROJECT AT YOUR CONVENIENT PACE</h1>
                <h3 className='text-lg my-3'>Just know that with our App Development Services, you can move as fast as that</h3>
            </div>

            <motion.div
                variants={animatetext} initial='initial' whileInView='animate' viewport={{once:true}}
                className='px-12 py-2   w-full'>
                <ul className='list-disc flex flex-col gap-4'>
                    <li>
                        <span className='text-blue-800 font-bold'>Up to 1 hour</span> to get an initial response to your request and know a sales manager assigned to your company.
                    </li>
                    <li>
                        <span className='text-blue-800 font-bold'>2-4 days</span> to get CVs of developers with the required skills and choose the best time for interviews.
                    </li>
                    <li>
                        <span className='text-blue-800 font-bold'>1-2 weeks</span> to assemble a full project team and set off.
                    </li>
                    <li>
                        <span className='text-blue-800 font-bold'>2-3 months</span> to get an MVP ready and launched.
                    </li>
                    <li>
                        <span className='text-blue-800 font-bold'>3-10 months</span>  to get a full-fledged mobile app.
                    </li>
                    <li>
                        <span className='text-blue-800 font-bold'>Lifetime</span>  to evolve your app following volatile market trends and user needs.
                    </li>

                </ul>
            </motion.div>


            <div className=' w-full  py-3 m-auto  '>
                <h3 className='w-full px-6 font-semibold text-left '>Let us know your business needs and plans, and our team will reply shortly to start the conversation.</h3>

                < motion.form
                    variants={animateright} initial='initial' whileInView='animate' viewport={{once:true}}
                    className='w-[98%] m-auto mt-3 p-3 py-6  flex flex-row flex-wrap gap-6 bg-gray-100 rounded-sm shadow-lg'>
                    <input className='w-full border-[2px] border-gray-300 p-2 lg:w-[23%] active:border-violet-700 ' type='name' name='name' placeholder='Full Name' required />

                    <input className='w-full border-[2px] border-gray-300  p-2 lg:w-[23%]' type='text' name='company' placeholder='Company' required />

                    <input className='w-full border-[2px] border-gray-300  p-2 lg:w-[23%]' type='email' name='email' placeholder='Email' required />

                    <input className='w-full border-[2px] border-gray-300  p-2 lg:w-[23%]' type='number' name='phone' placeholder='Phone' required />

                    <textarea className='w-[99%] min-h-[8rem] border-[2px] border-gray-300  p-2 ' type='message' name='message' placeholder='Tell us about Your Project (optional)' />

                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop your ideas</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">pdf (MAX. 10MB)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>

                    <button type='submit' className='m-auto text-white rounded-lg bg-blue-500 px-4 py-2 '>Submit</button>

                </motion.form>
            </div>
        </section>
    </>)
}