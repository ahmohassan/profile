import React,{useState ,useRef} from 'react'
import emailjs from 'emailjs-com';
const contact = () => {
  
  const sendEmail = async (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_bwv27u2', 'gmailjs_nqjfiwx', e.target, '6OpBivL2uHwgqvwWx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  const contactData =[
    {
        image : '/phone.png',
        url: 'tel:252617237048',
        title :'Phone',
        
    },
    {
        image : '/github.png',
        url: 'https://github.com/ahmohassan',
        title :'GitHub',

    },
    {
        image : '/whatsapp.png',
        url: 'https://wa.link/czo3k2',
        title :'WhatsApp',

    }
  ]
  const form = useRef();
  return (
    <section id='contact' className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-indigo-800">
        <h2 className="m-8 mt-24 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        {/* <div className='flx-col m-4  '> */}
            <div className='flex flex-wrap justify-center md:flex-row items-center '>
                {
                    contactData.map((data)=>(
                        <a href={data.url}>
                        <div className='flex m-4 p-4 w-80 md:w-80 items-center flex-col text-center bg-primary rounded-xl  border-indigo-700/75  hover:bg-transparent/50 hover:shadow-2xl hover:shadow-indigo-500/80'>
                            <img src={data.image} className='md:w-32 w-16 ' h alt="" />
                            <p className='text-lg mt-4 font-bold'>{data.title}</p>
                        </div>
                        </a>
                    ))
                }
            </div>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h1 className='text-center font-bold text-[2rem] md:text-[4rem] sm:text-[2rem]'>Get in Touch</h1>
            <p className="mt-8 lg:m-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please fill out the contact form below to get in touch with me, and I will do my best to respond to you as soon as I can</p>
            <form ref={form} method='post' onSubmit={sendEmail} action="#" className="space-y-8">
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input   name='email' type="emails" id="emails" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>
            <div>
                <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject"  name='subject'   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6"  name='message'  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
                <button  className="bg-indigo-600 py-4 text-lg font-bold px-8 rounded-2xl my-1 hover:bg-white hover:text-indigo-600 hover:shadow-2xl">Send message</button>
            </form>
        </div>
    </section>
  )
}

export default contact