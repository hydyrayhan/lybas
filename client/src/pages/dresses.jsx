import React, { useEffect, useState } from 'react';

import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/Breadcrumb';
import Dress from '../components/Dress';
import { AxiosCustom, AxiosUser } from '../common/AxiosInstance';

function Dresses() {
  const [data, setData] = useState([]);
  const [categories,setCategories] = useState([]);
  const [dressmakers,setDressmakers] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [colors, setColors] = useState([]);
  const [limit,setLimit] = useState(20);
  const [sort, setSort] = useState({
    category: [],
    price: {},
    size: [],
    material: [],
    welayat: [],
    color:[],
  });

  useEffect(()=>{
    getData();
  },[sort])

  const getData = async () => {
    try {
      if(localStorage.getItem('lybas-user-token')){
        var res = await AxiosUser(`/products?limit=${limit}&sort=${JSON.stringify(sort)}`);
      }else{
        var res = await AxiosCustom(`/products?limit=${limit}&sort=${JSON.stringify(sort)}`);
      }
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getCategories = async () => {
    try {
      const res = await AxiosCustom(`/categories?limit=10000`);
      setCategories(res.data.categories)
    } catch (error) {
      console.log(error);
    }
  }
  const getDressmakers = async () => {
    try {
      const res = await AxiosCustom(`/seller?limit=10000`);
      setDressmakers(res.data.sellers)
    } catch (error) {
      console.log(error);
    }
  }
  const getSizes = async () => {
    try {
      const res = await AxiosCustom(`/sizes?limit=1000`);
      setSizes(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getMaterials = async () => {
    try {
      const res = await AxiosCustom(`/materials?limit=1000`);
      setMaterials(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const getColors = async () => {
    try {
      const res = await AxiosCustom(`/colors?limit=${''}`);
      setColors(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
    getCategories();
    getDressmakers();
    getSizes();
    getMaterials();
    getColors();
  }, [])

  return (
    <div className='dresses container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Breadcrumb page1={{text:'dresses',link:'/dresses'}}/>
      <div className="dresses_main flex justify-between">
        <div className="dresses_main_left w-0 md:w-2/5 lg:w-1/5">
          <Sidebar sort={sort} setSort={setSort} categories={categories} dressmakersData={dressmakers} sizes={sizes} materials={materials} colors={colors}/>
        </div>
        <div className="dresses_right w-full md:w-3/5 lg:w-4/5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:ml-5 lg:ml-[30px]">
          {
            data?.length>0 && data.map((dress, index) => (
              <Dress key={index} data={dress} hover='small' />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Dresses;
