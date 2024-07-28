import React from 'react'
import AdminLayout from '../../../components/Admin/AdminLayout'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <AdminLayout>
        <div className="h-screen w-full">
            <div className='w-full bg-red-500 p-4 rounded-md flex justify-between items-center'> 
                <p className='text-lg font-bold text-white'>Add Post</p>
                <button className='border-1 border p-2 rounded-md text-white font-bold cursor-pointer'><Link to="/admin/create-post">CREATE</Link></button>
            </div>
        </div>   
    </AdminLayout>
  )
}

export default Blog
