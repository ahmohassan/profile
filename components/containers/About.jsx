import React from 'react'

const About = () => {
    const image ="/Developer activity.svg"
  return (
    <section class="flex gap-5 my-12   md:m-0 p-2  flex-col md:flex-row items-center justify-center ">
        <div className=' md:w-screem '>
            <img src={image} className="w-screen md:h-[52rem] rounded-lg " alt="" srcset="" />
        </div>
        <div className=" flex-col justify-start items-start bg-cover h-64">
            <div>
                <h1 className='text-[42px] md:text-[54px] font-bold'>What we doing in our customers?</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur repellendus atque possimus commodi quod dolorem pariatur iusto optio, rem molestias eos libero necessitatibus ex fuga perspiciatis delectus. Optio consequatur sed tempore officia porro!
                    Natus voluptas ea sed minima ratione minus sit suscipit eum nihil in cupiditate velit officiis reiciendis odio quos a rem repellat neque quia omnis, soluta architecto temporibus! Corrupti, atque magnam.
                </p>
            </div>
            <div className="flex flex-col md:flex-row p-4  md:justify-around  md:p-5 rounded-lg my-10  items-start bg-gray-900 shadow-2xl">
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
            </div>
        </div>
    </section>
  )
}

export default About