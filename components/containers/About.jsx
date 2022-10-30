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
    <section  class="flex  my-12    md:my-32 p-2  flex-col md:flex-row items-center justify-center ">
        <motion.div className='md:w-screen' whileHover={{}} whileInView={{opacity :[0,1.9]}}transitionTo={{duration :1 ,type:'tween',ease:'easeInOut'}}>
            <img src={image} className="  " alt="" srcset="" />
        </motion.div>
        <div className=" flex-col justify-start mr-4 items-start  ">
            <motion.div whileInView={{opacity :[0,2]}}transitionTo={{duration :1.5 ,type:'tween',ease:'easeInOut'}} >
                <h1 className='text-[42px] md:text-[54px] font-bold'>What we doing in our customers?</h1>
                <motion.div whileInView={{opacity :[0,8]}}transitionTo={{duration :6 ,type:'tween',ease:'easeInOut'}}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur repellendus atque possimus commodi quod dolorem pariatur iusto optio, rem molestias eos libero necessitatibus ex fuga perspiciatis delectus. Optio consequatur sed tempore officia porro!
                        Natus voluptas ea sed minima ratione minus sit suscipit eum nihil in cupiditate velit officiis reiciendis odio quos a rem repellat neque quia omnis, soluta architecto temporibus! Corrupti, atque magnam.
                    </p>
                </motion.div>
            </motion.div>
            <motion.div whileInView={{opacity :[0,1.9]}}transitionTo={{duration :9 ,type:'tween',ease:'easeInOut'}} className="flex flex-col md:flex-row p-4  md:justify-around  md:p-5 rounded-lg mt-10  items-start bg-gray-900 shadow-2xl">
                <div className='flex flex-col '>
                    <div className="flex flex-row items-center ">
                        <img src="/favicon.ico" className='h-5 w-5 mr-2' alt="" />
                        <span className='text-2xl font-mono font-bold'>Cerfied</span>
                    </div>   

                     {/*  */}
                     <div className='flex flex-col   pr-5 '>
                        <h1 className='text-[16px] md:text-[14px] my-2 font-bold'>What we doing in our customers?</h1>
                        <p className='text-[8px] md:text-lg mr-4'>
                            Lorem ipsum dolor sit amet consectetur repellendus atque  velit officiis reiciendis odio quos a rem repellat neque quia omnis, soluta architecto temporibus! Corrupti, atque magnam.
                        </p>
                    </div>
                </div>
                
                {/*  */}
                {/*  */}
                <div className='flex-col '>
                    <div className="flex flex-row items-center my-2 ">
                        <div className='text-xl font-bold'>⭐⭐⭐⭐</div>
                        <span className='text-2xl font-mono font-bold'>Cerfied </span>
                    </div>   

                     {/*  */}
                     <div className='flex flex-col  mt-2'>
                        <h1 className='my-2 font-bold'>What we doing in our customers?</h1>
                        <p className='text-[8px] md:text-lg mr-4'>
                            Lorem ipsum dolor repellendus atque  velit officiis reiciendis odio quos a rem repellat neque quia omnis, soluta architecto temporibus! Corrupti, atque magnam.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default About