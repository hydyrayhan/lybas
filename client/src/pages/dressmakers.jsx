import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Dressmaker from '../components/Dressmaker';
import Breadcrumb from '../components/Breadcrumb';
import { AxiosCustom } from '../common/AxiosInstance';

function Dressmakers() {
  const [data, setData] = useState([])
  const [limit, setLimit] = useState(20);
  const [sort, setSort] = useState({
    welayat: [],
  });

  const getData = async () => {
    const resDressmakers = await AxiosCustom(`/seller?limit=${limit}&welayat=${sort.welayat}`)
    setData(resDressmakers.data.sellers);
  }
  useEffect(() => {
    getData();
  }, [sort])

  return (
    <div className='dressmakers container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{ text: 'dressmakers', link: '/dressmakers' }} />
      <div className="dressmakers_content flex">
        <div className="dressmakers_sidebar w-1/5 mr-10">
          <Sidebar sort={sort} setSort={setSort} dressmakers={true}/>
        </div>
        <div className="dressmakers_dressmakers w-4/5 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            data?.length>0 && data.map((dressmaker, index) => (
              <Dressmaker key={index} data={dressmaker} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Dressmakers;
