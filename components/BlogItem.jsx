import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function BlogItem({ title, desc, img, category, id }) {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black'>
      <Link href={`/blogs/${id}`} className='flex justify-center items-center'>
      {img && (
        <Image
          src={img}
          alt={title}
          width={400}
          height={250}
          className='border-b border-black w-full h-auto'
        />
      )}
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{desc}</p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
          Read more <FaArrowRightLong className="ml-2 mt-1" size={12} />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem
