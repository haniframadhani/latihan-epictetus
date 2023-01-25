import Link from "next/link";
import { Copy } from "react-feather";

export default function Footer() {
  return (<footer className="text-white text-center text-base pb-16">
    <p>Copyright &copy; 2021 - Design By {<Link href="#" className="hover:underline">Nauval Azhar</Link>}, Develop By {<Link href="#" className="hover:underline">Hanif Ramadhani</Link>}</p>
  </footer>)
}