import '../styles/globals.css'
import { Patrick_Hand } from '@next/font/google'

const patrick_hand = Patrick_Hand({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }) {

  return <div className={`${patrick_hand.className} bg-gradient-to-b from-charcoal to-eerie-black`}>
    <Component {...pageProps} />
  </div>
}
