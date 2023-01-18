import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card';

export default function Home() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (
    <>
      <Head>
        <title>Epictetus</title>
        <meta name="description" content="personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-10 sm:px-20 md:px-28 lg:px-44 scroll-smooth py-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-14">
        {arr.map(e => {
          return <Card angka={e}></Card>
        })}
      </div>
    </>
  )
}
