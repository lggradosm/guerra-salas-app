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
    <main className='flex relative items-center  flex-col'>
        <Component {...pageProps} />
    </main>
    <Footer />
  </div>
}

export default MyApp
