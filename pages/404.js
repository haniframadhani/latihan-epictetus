import Head from "next/head";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>404 Not Found | Epictetus</title>
        <meta name="description" content="personal blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white text-center grid place-content-center h-screen">
        <h1 className="text-7xl capitalize">404 not found</h1>
        <p className="text-lg">you might be lost. let's get back to <Link href={"/"} className="hover:underline">home</Link></p>
      </div>
    </>
  )
}