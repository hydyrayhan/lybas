import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import Breadcrumb from '../components/Breadcrumb'
import { AxiosCustom } from '../common/AxiosInstance';

function Blogs() {
  const [data,setData] = useState([]);
  const [limit,setLimit] = useState(20);
  useEffect(() => {
    const getData = async () => {
      const resBlogs = await AxiosCustom(`/blogs?limit=${limit}`);
      setData(resBlogs.data.data);
    }
    getData();
  }, [])
  return (
    <div className='blogpage container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: 'blog', link: '/blog' }} />
      <div className="blogpage_blogs grid gap-5 grid-cols-2">
        {
          data?.length>0 && data.map((blog,index)=>(
            <Blog key={index} data={blog}/>
          ))
        }
      </div>
    </div>
  )
}

export default Blogs