'use client'

import { Brand } from "@/types/brand.type";
import { useEffect, useState } from "react";

const BrandsPage = () => {

  const [brands ,setBrands] = useState<[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const response = await fetch(`https://backend-api-yt68.onrender.com/api/v1/brands`);
      const data = await response.json();
      const listBrands = data.data;
      setBrands(listBrands);
    };
    fetchBrands();
  }, []);
  
  console.log('brands', brands);
  

  return (
    <>
    <b>Brands Page</b>
    <div>{brands.map((brand: Brand) => (
      <div key={brand._id}>{brand.brand_name}</div>
    ))}</div>
    </>
  )
}

export default BrandsPage