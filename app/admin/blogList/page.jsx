'use client'

import React, { useEffect, useState } from 'react'
import BlogTableItem from '../../../components/AdminComponents/BlogTableItem'
import axios from 'axios'

function Page() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete("/api/blog", {
        params: { id },
      });
      if (response.data.success) {
        fetchBlogs(); // Refresh the blog list after successful deletion
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };
  

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className='text-2xl font-semibold'>All Blog List</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 sticky top-0'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left'>Author</th>
              <th scope='col' className='px-6 py-3 text-left'>Title</th>
              <th scope='col' className='px-6 py-3 text-left'>Category</th>
              <th scope='col' className='px-6 py-3 text-left'>Date</th>
              <th scope='col' className='px-6 py-3 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              blogs.map((item, index) => (
                <BlogTableItem
                  key={index}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  category={item.category}
                  date={item.date}
                  authorImg={item.authorImg}
                  deleteBlog={deleteBlog}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
