import Head from 'next/head'
import NAvbar from '../components/navbar'
import HeroSection from '../components/Hero/hero'
import About from '../components/containers/About'
import Projects from '../components/containers/projects'
import Services from '../components/containers/services'
import Contact from '../components/containers/contact'
export default function Home() {
  return (
    <div className="bg-[URL('/bgWhite.png')]">
      <Head>
        <title>Ahmanur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/log.svg" />
      </Head>
      <NAvbar/>
        <HeroSection/>
        <About/>
        <Projects/>
        <Services/>
        <Contact/>
      {/* <main className="flex justify-center items-center text-2xl font-mono font-bold" >
        <h1>Somalia</h1>
      </main> */}

    </div>
  )
}
