import Link from "next/link";
import { Copy } from "react-feather";

export default function Footer() {
  return (<footer className="text-white text-center text-base pb-16">
    <p>Copyright &copy; 2021 - Design By {<Link href="https://github.com/nauvalazhar" className="hover:underline" target={'_blank'}>Nauval Azhar</Link>}, Developed By {<Link href="https://github.com/haniframadhani" className="hover:underline" target={'_blank'}>Hanif Ramadhani</Link>}</p>
  </footer>)
}