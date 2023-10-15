
export function Footer() {
    return (<>
        <footer className='w-full p-4 text-white bg-blue-900 ' >
            <div className='gap-3 flex flex-col md:flex-row md:justify-evenly'>

                <div>
                    <h1 className='w-full cursor-pointer text-lg'>Services</h1>
                    <ul className=' hidden text-sm md:flex flex-col gap-1 mt-3'>
                        <li><a href='#'>Product Development</a></li>
                        <li><a href='#'>Mobile Developmentt</a></li>
                        <li><a href='#'>Web Development</a></li>
                        <li><a href='#'>IT Consulting</a></li>
                        <li><a href='#'> UI/UX Design</a></li>
                        <li><a href='#'>QA & Testing</a></li>
                        <li><a href='#'> DevOps Solutions</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='w-full marker:cursor-pointer text-lg'>Industries</h1>
                    <ul className=' hidden text-sm md:flex flex-col gap-1 mt-3'>
                        <li><a href='#'>Mobile Banking</a></li>
                        <li><a href='#'> Hospitals</a></li>
                        <li><a href='#'>Telehealth Apps</a></li>
                        <li><a href='#'> Message and VoIP</a></li>
                        <li><a href='#'> mCommerce</a></li>
                        <li><a href='#'>Booking</a></li>
                        <li><a href='#'>Insurance</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='w-full cursor-pointer text-lg'>Company</h1>
                    <ul className=' hidden text-sm md:flex flex-col gap-1 mt-3'>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Team</a></li>
                        <li><a href='#'>Clienst</a></li>
                        <li><a href='#'> Case Study</a></li>
                        <li><a href='#'> Blog</a></li>
                        <li><a href='#'>News</a></li>
                        <li><a href='#'>Insights</a></li>
                    </ul>
                </div>
                <div className=' mt-10  lg:mt-0'>
                    <h1 className='w-full mb-3 cursor-pointer text-lg'>Contacts</h1>
                    <h2 className='w-full font-semibold text-gray-200 cursor-pointer'>info@appdevelopmet.net</h2>
                    <h2 className='w-full text-gray-200 cursor-pointer'>+91 9874563210</h2>
                    <h2 className='w-full text-gray-200 cursor-pointer'>+91 8520147963</h2>
                </div>



            </div>
            <div className=' w-[50%] md:w-[20%] m-auto  mt-10 flex flex-row gap-5'>
                <img className='w-8 cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/145/145807.png' alt='icon' />
                <img className='w-8 cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/3670/3670124.png' alt='icon' />
                <img className='w-8 cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png' alt='icon' />
                <img className='w-8 cursor-pointer' src='https://cdn-icons-png.flaticon.com/128/3955/3955024.png' alt='icon' />
            </div>
        </footer>

    </>)
} 