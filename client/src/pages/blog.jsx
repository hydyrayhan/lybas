import React from 'react'
import Blog from '../components/Blog'
import Breadcrumb from '../components/Breadcrumb'

function blog() {
  return (
    <div className='blogpage container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb />
      <div className="blogpage_blogs grid gap-5 grid-cols-2">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  )
}

export default blog