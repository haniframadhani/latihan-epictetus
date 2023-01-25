import Image from "next/image"
import Link from "next/link"
import { DateTime } from 'luxon';
import { useState } from "react";

export default function Card({ blog, index, author }) {
  const time = DateTime.fromISO(blog["post-date"]);
  const waktu = time.setLocale('en').toLocaleString(DateTime.DATE_FULL);
  const [hover, setHover] = useState(false);
  const hovering = () => {
    setHover(!hover);
  }
  return (
    <Link href={"#"} className={`flex flex-col ${index === 0 ? 'md:col-span-2 lg:col-span-3 gap-x-5' : ''}`}>
      <div onMouseEnter={hovering} onMouseLeave={hovering} className={`flex flex-col gap-y-4 rounded-xl ${index === 0 ? 'md:flex-row md:col-span-2 lg:col-span-3 gap-x-5' : ''}`}>
        <div className={`aspect-video overflow-hidden rounded-xl bg-red-300 ${index === 0 ? 'basis-8/12' : ''}`}>
          <img className="object-cover" src={blog.image} alt="" />
        </div>
        <div className={`w-full flex flex-col justify-center gap-2 md:gap-4 ${index === 0 ? 'basis-4/12' : ''}`}>
          <p className="text-white/60 text-sm leading-none">{blog.tag} &bull; {waktu}</p>
          <h2 className={`text-2xl capitalize leading-9 ${hover === true ? 'underline' : ''}`}>{blog.title}</h2>
          <div className="text-base line-clamp-3 leading-7 text-white/60" dangerouslySetInnerHTML={{ __html: blog.body }}></div>
          <div className="flex flex-row items-center gap-4">
            <img className="w-12 rounded-full" src={author.image} alt="" />
            <div>
              <h3 className="capitalize text-base leading-7">{author.name}</h3>
              <p className="capitalize text-white/60 text-sm leading-7">{author.title}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}