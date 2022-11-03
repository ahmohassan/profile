import React from 'react'

const navbar = () => {
  return (
    <div className='sticky  top-0 z-50'>
        <nav className=' bg-transparent px-5 blo py-4 shadow-2xl  sm:px-2.5 backdrop:filter backdrop-blur-xl dark:bg-transparent dark:shadow-2xl '>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href='/' className='flex items-center'>
                <img src="https://flowbite.com/docs/images/logo.svg" className="my-1 mr-1 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className=' text-xl font-semibold whitespace-nowrap dark:text-white font-mono'>NUUN</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id='navbar-default'>
                    <ul className="flex flex-col p-4 mt-4 bg-transparent rounded-md border border-gray-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                    {
                        ['home','about','works','skills','contact'].map(
                            (item)=>(
                                <li className='app__flex' key={`link${item}`}>
                                <div></div>
                                 <a href={`#${item}`} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" rel="noopener noreferrer">{item}</a>
                                </li>
                            )
                            )
                    }
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navbar