import React from 'react'
import Image from 'next/image'
import user from "@/assets/user.png";

function BlogTableItem({ authorImg, title, category, date, author , mongoId, deleteBlog}) {
  return (
    <tr className='bg-white border-b'>
      <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        <Image
          src={authorImg || user}
          alt="Author"
          width={50}
          height={50}
          className='rounded-full'
        />
      </th>
      <td className='px-6 py-4'>
        {title || "No Title"}
      </td>
      <td className='px-6 py-4'>
        {category || "No Category"}
      </td>
      <td className='px-6 py-4'>
        {date ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }) : "No Date"}
      </td>
      <td className='px-6 py-4'>
        <button className='text-blue-600 hover:text-blue-900 font-medium text-sm'>Edit</button>
        <button onClick={()=>deleteBlog(mongoId)} className='text-red-600 hover:text-red-900 font-medium text-sm ml-4'>Delete</button>
      </td>
    </tr>
  )
}

export default BlogTableItem;
