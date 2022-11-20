import React,{useEffect} from 'react'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
const About = () => {
    const image ="/Developer activity.svg"
    const {_ref, inView} =useInView({threshold:0.2})
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
    <section id='About'  class="flex  my-2     md:my-36 p-2  flex-wrap md:flex-row items-center justify-center ">
        <motion.div className='md:flex-1 md:m-1 mt-16' whileHover={{}} whileInView={{opacity :[0,1.9]}}transitionTo={{duration :1 ,type:'tween',ease:'easeInOut'}}>
            <img src={image} className="bg-cover bg-indigo mt-10 p-1  " alt="" srcset="" />
        </motion.div>
        <div className="flex-1 flex-col justify-start  m-4 items-start  ">
            <motion.div whileInView={{y:-20, transition:{duration:1, type:"keyframes" ,bounce:0.9}}} >
                <h1 className='text-[24px] md:text-[42px] mt-24 mb-3 font-bold'>Solving customer problems gives developers a morale boost</h1>
                <motion.div whileInView={{y:-10, transition:{duration:2.5, type:"keyframes" ,bounce:0.9}}}>
                    <p>
                      At times, it can be frustrating having to deal with customers. However, many developers report getting a boost in morale when dealing with end users. They can see close up how customers are using their products and get real feedback from those who use products on a daily basis. Seeing how their work is being used gives them motivation to ‘do better’. 
                    </p>
                </motion.div>
            </motion.div>
            <motion.div whileInView={{y:-25, transition:{duration:3, type:"keyframes" ,bounce:0.9}}} className="flex flex-col md:flex-row p-4  md:justify-around  md:p-5 rounded-lg mt-10  items-start  shadow-2xl  shadow-black/100 bg-gradient-to-b  from-indigo-900 to-gray-900 backdrop:filter backdrop-blur-2xl hover:shadow-sm hover:shadow-black/75">
                <div className='flex flex-col '>
                    <div className="flex flex-row items-center ">
                        <img src="/certification.png" className='w-8 mr-2' alt="" />
                        <span className='text-2xl font-mono font-bold'>Cerfied</span>
                    </div>   

                     {/*  */}
                     <div className='flex flex-col   pr-5 '>
                        {/* <h1 className='text-[16px] md:text-[14px] my-2 font-bold'>What we doing in our customers?</h1> */}
                        <p className='text-[8px] mt-4 md:text-lg mr-4'>
                           Providing direct customer support gives developers the opportunity to understand their products as customers see them. As a product matures, developers can begin to feel disengaged from it in its entirety. That’s because developers often work in silos, focusing only on the features they’re building individually.
                        </p>
                    </div>
                </div>
                
                {/*  */}
                {/*  */}
                <div className='flex-col '>
                    <div className="flex flex-row items-center my-2 ">
                        <div className='text-xl font-bold'>⭐⭐⭐⭐</div>
                        {/* <span className='text-2xl font-mono font-bold'>Cerfied </span> */}
                    </div>   

                     {/*  */}
                     <div className='flex flex-col  mt-2'>
                        {/* <h1 className='my-2 font-bold'>What we doing in our customers?</h1> */}
                        <p className='text-[8px] md:text-lg mr-4'>
                        All software companies share the same aim; to provide the highest quality of service possible. And that goes further than just developing the best software. When it comes to providing the best customer service, companies need to implement the best technology, such as MDM systems.                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default About