import React from 'react'
import {motion} from "framer-motion"

const services = () => {
    const data = [
        {
          imageurl :'/mobile.svg',
          name :'Moble App Developement',
          title :'https://themeselection.com/wp-content/webpc-passthru.php?src=https://themeselection.com/wp-content/uploads/edd/2022/03/materio-react-github-banner.png&nocache=1  '
        },
        {
          imageurl :'ui.svg',
          name :'UI/UX',
          title :' '
        },
        {
          imageurl :'web.svg',
          name :'Web Developement',
          title :' '
        },
        
    
      ]
  return (
    <section className='flex flex-col md:p-16  justify-center items-center  bg-primary'>
        {/* <img src={bgimage} alt="" srcset="" /> */}
        <div className="text-center 6m- m-16">
          <h1 className=' text-[2rem] md:mb-2 md:text-[4rem] font-bold'>our services</h1>
          <p className='text-gray-200 my-4 font-thin'>
          Powerful web and mobile design that will out-perform your strongest competitors
          </p>
        </div>
        <motion.div    className='flex flex-wrap  items-center justify-center'>
        {
          data.map((person) =>(
            <motion.div whileInView={{y:-25, transition:{duration:1, type:"keyframes" ,bounce:0.9}}} className='flex m-4  bg-gradient-to-t from-gray-900 to-indigo-800 rounded-xl border-4 border-indigo-700/75  hover:bg-transparent/10 shadow-2xl hover:shadow-indigo-500/80'>
              <div className='flex text-center m-4 md:justify-center flex-col  '>
                <img src={person.imageurl} className="  hover:bg-gradient-to-b hover:from-indigo-900 hover:to-indigo-900/5 bg-gradient-to-t from-gray-900 to-transparent p-5 w-80 h-80 shado-2xl rounded-lg " alt="" srcset="" />
                <h1 className='mt-6 text-2xl font-bold' >{person.name}</h1>
                
                
               
                 
              </div>
            </motion.div>
          ))
        }
        </motion.div>
    </section>
  )
}

export default services