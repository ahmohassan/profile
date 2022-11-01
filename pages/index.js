import Head from 'next/head'
import NAvbar from '../components/navbar'
import HeroSection from '../components/Hero/hero'
import About from '../components/containers/About'
import Projects from '../components/containers/projects'
export default function Home() {
  return (
    <div className="bg-[URL('/bgWhite.png')]">
      <Head>
        <title>ahmakafi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NAvbar/>
        <HeroSection/>
        <About/>
        <Projects/>
      {/* <main className="flex justify-center items-center text-2xl font-mono font-bold" >
        <h1>Somalia</h1>
      </main> */}

    </div>
  )
}
