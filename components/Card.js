import Image from "next/image"
export default function Card({ angka }) {
  return (
    <div className={`flex flex-col gap-y-4 ${angka === 1 ? 'md:flex-row md:col-span-2 lg:col-span-3 gap-x-5' : ''}`}>
      <div className={`aspect-video overflow-hidden rounded-xl bg-red-300 ${angka === 1 ? 'basis-8/12' : ''}`}>
        <img className="object-cover" src="https://images.unsplash.com/photo-1669220929620-0525acdc2e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
      </div>
      <div className={`w-full flex flex-col justify-center gap-2 md:gap-4 ${angka === 1 ? 'basis-4/12' : ''}`}>
        <p className="text-white/60 text-sm leading-none">tag &bull; 2 juni 2022</p>
        <h2 className="text-2xl capitalize leading-9">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
        <p className="text-base line-clamp-3 leading-7 text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde deserunt perferendis dolore aperiam quaerat fuga, exercitationem, voluptates, veniam quis accusamus commodi. Repudiandae placeat quam maxime numquam exercitationem possimus eius quia impedit. Voluptates esse nam nesciunt iste quae tenetur, recusandae repellendus illo aspernatur ratione neque repudiandae, dicta eos iure nobis magni. Quam debitis sunt labore neque voluptatem, obcaecati, eum consectetur dignissimos soluta fuga ab enim, doloremque officia autem qui. Quod quis eum non eveniet accusamus sunt excepturi explicabo, id fugit facilis dolores doloribus quia consectetur, a quos hic eaque quo itaque iste iusto blanditiis at. Maiores dignissimos quam optio eveniet officia?</p>
        <div className="flex flex-row items-center gap-4">
          <img className="w-12 rounded-full" src="https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
          <div>
            <h3 className="capitalize text-base leading-7">hanif ramadhani</h3>
            <p className="capitalize text-white/60 text-sm leading-7">traveler</p>
          </div>
        </div>
      </div>
    </div>
  )
}