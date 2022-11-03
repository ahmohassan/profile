import React,{useEffect} from 'react'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import styles from '../../styles/Home.module.css'
function hero() {
const sc ='/1.svg'
  const {ref, inView} =useInView({threshold:0.2})
  //
  const animation =useAnimation()
  const animation1 =useAnimation()
  const animation2 =useAnimation()
  const animation3 =useAnimation()
  const animation4 =useAnimation()
  //
  useEffect(()=>{
    if(inView){
      animation.start(
        {
          x:0,
          transition:{
            duration:0.9,
            type:'tween',
            bounce:0.3
          }
        }
      )
    }
    if(inView){
      animation1.start(
        {
          x:0,
          transition:{
            duration:1.4,
            type:'tween',
            bounce:0.3
          }
        }
      )
    }
    if(inView){
      animation2.start(
        {
          x:0,
          transition:{
            duration:1.9,
            type:'tween',
            bounce:0.3
          }
        }
      )
    }
    if(inView){
      animation3.start(
        {
          x:1,
          // y:2,
          transition:{
            duration:2,
            // type:''
            ease :'easeInOut',
            bounce:0.3
          }
        }
      )
    }
    if(inView){
      animation4.start(
        {
          // x:3,
          y:2,
          transition:{
            duration:2.2,
            // type:''
            ease :'easeInOut',
            bounce:0.3
          }
        }
      )
    }
    if(!inView){
      animation.start(
        {
          x:'-20vw'
        }
      )
    }
    if(!inView){
      animation1.start(
        {
          x:'-18vw'
        }
      )
    }
    if(!inView){
      animation2.start(
        {
          x:'-16vw'
        }
      )
    }
    if(!inView){
      animation3.start(
        {
          x:'-14vw'
        }
      )
    }
    if(!inView){
      animation4.start(
        {
          y:'-4vw'
        }
      )
    }
  },[inView])
  return (
    <>
     <section ref={ref}  class={` flex py-16 pt-36 md:p-32 md:m-0 lg:m-0  flex-col-reverse md:flex-wrap justify-center items-center bg-gradient-to-r from-indigo-900 to-gray-900 ${styles.backgroundIMG}`}>
        <div className=" md:flex-auto flex-col mt-10 md:flex-col md:items-start m-4  ">
          <motion.div animate={animation}>
            <h1 className='text-[42px] md:text-[54px] font-bold'>👋Hello There</h1>
          </motion.div>
          <motion.div animate={animation1}>
            <h1 className='text-[36px]   md:text-[42px] font-bold  text-sky-500'><span className='uppercase text-yellow-50'>I'm</span> Ahmed Mohamed </h1>
          </motion.div>
         <motion.div animate={animation2} className='justify-start items-start mb-4 lg:w-[55rem] '>
          <p className='' >
            I'm a Full Stack Developer and mobile-app Developer with 3+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within modern technologies.
          </p>
         </motion.div>
         <motion.div animate={animation3}>
          <button className="bg-indigo-600 py-4 text-lg font-bold px-8 rounded-2xl my-1 hover:bg-white hover:text-indigo-600 hover:shadow-2xl">
            Read More
          </button>
         </motion.div>
        </div>
        <motion.div animate={animation4} className="   ">
        <img src={sc} className="bg-cover"  alt="" srcset="" />
          {/* <img src={images.hero} /> */}
        </motion.div>
     </section>
   
    </>
  )
}

export default hero