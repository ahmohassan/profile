import React from 'react'
import {motion} from 'framer-motion'
function hero() {
const sc ='/1.svg'
  return (
    <>
     <section class="flex py-16 md:p-32 md:m-0 lg:m-0 sm:m-2 flex-col md:flex-row justify-center items-center bg-gradient-to-r from-indigo-900 to-violet-500">
        <div className=" md:flex-auto flex-col mt-10 md:flex-col md:items-start m-4 ">
          <motion.div 
            whileInView={{opacity:1}}
            whileHover={{scale:0.95}}

            transition={{duration:0.9,type: 'tween'}}
          >
            <h1 className='text-[42px] md:text-[54px] font-bold'>👋Hello There</h1>
          </motion.div>
          <motion.div transition={{duration:0.6 ,type:'keyframes'}}>
            <h1 className='text-[36px]   md:text-[42px] font-bold  text-indigo-600'><span className='uppercase text-yellow-50'>I'm</span> Ahmed Mohamed </h1>
          </motion.div>
         <div className='justify-start items-start mb-4'>
          <p className='' >
            I'm a Full Stack Developer and mobile-app Developer with 3+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies.
          </p>
         </div>
         <button className="bg-indigo-600 py-4 text-lg font-bold px-8 rounded-2xl my-5 hover:bg-white hover:text-indigo-600 hover:shadow-2xl">
          Read More
         </button>
        </div>
        <div className="   ">
        <img src={sc} className="bg-cover"  alt="" srcset="" />
          {/* <img src={images.hero} /> */}
        </div>
     </section>
   
    </>
  )
}

export default hero