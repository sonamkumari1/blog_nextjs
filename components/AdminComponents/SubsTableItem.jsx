import React from 'react'

function SubsTableItem({email, date, mongoId, deleteSubs}) {

    const emailDate=new Date(date)
  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{email?email:"No Email"}</th>
        <td className='px-6 py-4'>{emailDate.toLocaleDateString("en-US")}</td>
        <td className='px-6 py-4'>x</td> 
    </tr>
  )
}

export default SubsTableItem
