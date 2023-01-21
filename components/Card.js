import Image from "next/image"
import Link from "next/link"

export default function Card({ blog }) {
  return (
    <Link href={"#"} className={`flex flex-col ${blog["id-post"] === 1 ? 'md:col-span-2 lg:col-span-3 gap-x-5' : ''}`}>
      <div className={`flex flex-col gap-y-4 ${blog["id-post"] === 1 ? 'md:flex-row md:col-span-2 lg:col-span-3 gap-x-5' : ''}`}>
        <div className={`aspect-video overflow-hidden rounded-xl bg-red-300 ${blog["id-post"] === 1 ? 'basis-8/12' : ''}`}>
          <img className="object-cover" src="https://images.unsplash.com/photo-1669220929620-0525acdc2e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
        <div className={`w-full flex flex-col justify-center gap-2 md:gap-4 ${blog["id-post"] === 1 ? 'basis-4/12' : ''}`}>
          <p className="text-white/60 text-sm leading-none">{blog.tag} &bull; {blog["post-date"]}</p>
          <h2 className="text-2xl capitalize leading-9">{blog.title}</h2>
          <div className="text-base line-clamp-3 leading-7 text-white/60" dangerouslySetInnerHTML={{ __html: blog.body }}></div>
          <div className="flex flex-row items-center gap-4">
            <img className="w-12 rounded-full" src={blog["profile-image"]} alt="" />
            <div>
              <h3 className="capitalize text-base leading-7">{blog["name"]}</h3>
              <p className="capitalize text-white/60 text-sm leading-7">{blog["author-title"]}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}