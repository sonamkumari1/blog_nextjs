'use client'

import React from 'react'
import SubsTableItem from '../../../components/AdminComponents/SubsTableItem'
import { useEffect, useState } from 'react'
import axios from 'axios'

function page() {

  const [emails, setEmails]=useState([]);
  const fetchEmails=async()=>{
    const response=await axios.get('/api/email')
    setEmails(response.data.emails);
  }

  const deleteEmail=async(id)=>{
    const response=await axios.delete('/api/email',{
      data:{
        id
      }
    })
    if(response.data.success){
      setEmails(emails.filter((item)=>item._id!==id))
    }
  }
  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Subscription</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
       <table className='w-full text-sm text-gray-500'>
        <thead className='text-xs text-left text-gray-700 uppercase bg-gray-200'>
          <tr>
            <th scope="col" className='px-6 py-3'>Email</th>
            <th scope="col" className='px-6 py-3'>Date</th>
            <th scope="col" className='px-6 py-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            emails.map((item, index) => (
              <SubsTableItem key={index} email={item.email} date={item.date} deleteSubs={deleteEmail} />
            ))
          }
        </tbody>
       </table>
      </div>
    </div>
  )
}

export default page
