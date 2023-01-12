import Head from 'next/head'
import Image from 'next/image'
// import { Patrick_Hand } from '@next/font/google'
import Navbar from '../components/Navbar'

// const patrick_hand = Patrick_Hand({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Epictetus</title>
        <meta name="description" content="personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className={`h-[10000px] w-full`}>
        <h1 className='text-3xl text-white'>Hello World</h1>
      </div>
      {/* <div className={patrick_hand.className}></div> */}
    </>
  )
}
