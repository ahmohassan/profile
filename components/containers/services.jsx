import React from 'react'
import {motion,useAnimation} from 'framer-motion'
const services = () => {
  const data = [
    {
      imageurl :'/profile.png',
      name :'Ahmed',
      title :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, praesentium. Cum, perferendis repellendus quae, sit natus accusantium atque a dolore voluptatibus delectus temporibus blanditiis est inventore? Sint obcaecati at atque? '
    },
    {
      imageurl :'/profile.png',
      name :'Ahmed',
      title :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, praesentium. Cum, perferendis repellendus quae, sit natus accusantium atque a dolore voluptatibus delectus temporibus blanditiis est inventore? Sint obcaecati at atque? '
    },
    {
      imageurl :'/profile.png',
      name :'Ahmed',
      title :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, praesentium. Cum, perferendis repellendus quae, sit natus accusantium atque a dolore voluptatibus delectus temporibus blanditiis est inventore? Sint obcaecati at atque? '
    },
    {
      imageurl :'/profile.png',
      name :'Ahmed',
      title :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, praesentium. Cum, perferendis repellendus quae, sit natus accusantium atque a dolore voluptatibus delectus temporibus blanditiis est inventore? Sint obcaecati at atque? '
    },
    {
      imageurl :'/profile.png',
      name :'Ahmed',
      title :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, praesentium. Cum, perferendis repellendus quae, sit natus accusantium atque a dolore voluptatibus delectus temporibus blanditiis est inventore? Sint obcaecati at atque? '
    },
    {
      imageurl :'/profile.png',
      name :'Ahmed',
      title :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, praesentium. Cum, perferendis repellendus quae, sit natus accusantium atque a dolore voluptatibus delectus temporibus blanditiis est inventore? Sint obcaecati at atque? '
    },
  ]
  const bgimage ='/bgWhite.png'
  return (
    <section className='flex flex-wrap justify-center  bg-yellow-600  '>
        {/* <img src={bgimage} alt="" srcset="" /> */}
        {
          data.map((person) =>(
            <motion.div className='flex  w-96  bg-indigo-900 rounded-md m-4'>
              <div className='flex  md:items-center md:justify-center flex-col justify-center items-center m-5'>
                <img src={person.imageurl} className="md:w-32 md:h-32 w-16 h-16 bg-black shado-2xl rounded-full m-2" alt="" srcset="" />
                <h1>{person.name}</h1>
                <p>{person.title}</p>
              </div>
            </motion.div>
          ))
        }
    </section>
  )
}

export default services