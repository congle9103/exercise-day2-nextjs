import { Product, ProductsResponse } from "@/types/product.type";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 10;

const fetchProduct = async (id: string): Promise<ProductsResponse> => {
  const response = await fetch(
    `https://backend-api-yt68.onrender.com/api/v1/products/${id}`,
    {
        cache: "force-cache",
        next: { revalidate: 20 },
      }
  );
  return response.json();
};

export async function generateStaticParams() {
  const response = await fetch(
    `https://backend-api-yt68.onrender.com/api/v1/products`
  );
  const productAllResponse = await response.json();
  const productList: Product[] = productAllResponse.data.products;
  console.log("productAllResponse", productAllResponse);
  return productList.map((p) => ({
    id: String(p._id), //chuyen number to string
  }))
}

console.log('generateStaticParams',await generateStaticParams());


type Props = {
  params: Promise<{ id: string }>;
}

//dynamic metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id

  const product = await fetchProduct(id);
 
  return {
    title: product.data.product_name,
    description: product.data.description,
  }
}

const ProductPageDetail = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params; // lấy id từ URL
  const product = await fetchProduct(id);

  if (!product.data) {
    notFound();
  }

  console.log("product", product);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Chi tiết sản phẩm</h1>
      <h2 className="font-bold text-xl mt-2">
        {product.data.product_name}
      </h2>
      <p className="mt-1">
        <strong>Giá:</strong> {product.data.price} đ
      </p>
      <p className="text-sm text-gray-400 mt-2">ID: {id}</p>
      <Image
        src={`/${product.data.thumbnail}`}
        alt={product.data.product_name}
        width={300}
        height={300}
      />
    </div>
  );
};

export default ProductPageDetail;
