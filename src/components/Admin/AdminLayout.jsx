/* eslint-disable react/prop-types */
import React from 'react'
import Navbar from "./Navbar"

const AdminLayout = (props) => {
  return (
    <div className='flex w-full h-screen'>
      <Navbar/>
      <div className="div ml-3 w-full mr-3 mt-3">
          {props.children}
      </div>
    </div>
  )
}

export default AdminLayout
