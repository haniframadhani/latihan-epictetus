import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Epictetus</title>
        <meta name="description" content="personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`h-screen`}>
        <h1 className='text-3xl text-white'>Hello World</h1>
      </div>
    </>
  )
}
