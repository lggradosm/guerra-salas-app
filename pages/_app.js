import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <div className=''>
    <Head>
        <title>Notaría Guerra Salas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar />
    
    <main className=' flex relative items-center  flex-col '>
      <div className='w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] '>
        <Component {...pageProps} />
      </div>
      
    </main>
    <Footer />
  </div>
}

export default MyApp
