import React from 'react'
import {motion,useAnimation} from 'framer-motion'
import Link from 'next/Link'
const projects = () => {
  
  const data = [
    {
      imageurl :'https://themeselection.com/wp-content/webpc-passthru.php?src=https://themeselection.com/wp-content/uploads/edd/2022/03/materio-react-github-banner.png&nocache=1',
      name :'MATERIO ADMIN PAGE',
      title :'https://themeselection.com/wp-content/webpc-passthru.php?src=https://themeselection.com/wp-content/uploads/edd/2022/03/materio-react-github-banner.png&nocache=1  '
    },
    {
      imageurl :'https://s3.amazonaws.com/creativetim_bucket/products/581/original/vision-ui-dashboard-free-react.png?1641889248',
      name :'REACT UI/UX',
      title :' '
    },
    {
      imageurl :'https://s3.amazonaws.com/creativetim_bucket/products/500/original/soft-ui-dashboard-material-ui.jpg?1632195046',
      name :'REACT PROJECT',
      title :' '
    },
    {
      imageurl :'https://cdn.dribbble.com/users/1615584/screenshots/14831159/media/c0b0c2abf82b899687c9d7a8595e7294.jpg?compress=1&resize=1000x750&vertical=top',
      name :'CUSTOME PAGE',
      title :' '
    },
    {
      imageurl :'https://cdn.dribbble.com/users/1615584/screenshots/16587671/media/70d795dc4e102d8414a85fc7dae5a208.jpg?compress=1&resize=1000x750&vertical=top',
      name :'CUSTOME PAGE',
      title :' '
    },
    {
      imageurl :'https://assets.materialup.com/uploads/086a195b-6ad4-4e41-98d0-1b9656552524/preview.png',
      name :'CUSTOME PAGE',
      title :' '
    },
    {
      imageurl :'https://www.creative-tim.com/blog/content/images/wordpress/2020/07/made-with-react-1-1024x638.png',
      name :'CUSTOME PAGE',
      title :' '
    },

  ]
  const bgimage ='/bgWhite.png'
  return (
    <section className='flex flex-col p-8  justify-center items-center  bg-gradient-to-l md:bg-gradient-to-r from-gray-900 to-indigo-800 '>
        {/* <img src={bgimage} alt="" srcset="" /> */}
        <div className="text-center 6m- m-16">
          <p className='text-gray-200 font-bold'>My projects</p>
          <h1 className=' text-[4rem] font-bold'>Lastest projects</h1>
        </div>
        <motion.div    className='flex flex-wrap  items-center justify-center'>
        {
          data.map((person) =>(
            <motion.div whileInView={{y:-25, transition:{duration:1, type:"keyframes" ,bounce:0.9}}} className='flex m-4  bg-primary rounded-xl border-b-4  border-l-4 border-indigo-700/75  hover:bg-transparent/50 hover:shadow-2xl hover:shadow-indigo-500/80'>
              <div className='flex text-center m-4 md:justify-center flex-col  '>
                <img src={person.imageurl} className=" bg-cover w-80 shado-2xl rounded-lg " alt="" srcset="" />
                <h1 className='mt-6 text-2xl font-bold' >{person.name}</h1>
                
                
               
                 <Link  className='bg-gray-900 hover:bg-white hover:text-gray-900 hover:shadow-lg rounded-lg m-4 py-2 px-5 font-bold ' href={person.imageurl} >👀 View Details</Link>
              </div>
            </motion.div>
          ))
        }
        </motion.div>
    </section>
  )
}

export default projects