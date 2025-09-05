import Pagination from "@/components/Pagination";
import { Product } from "@/types/product.type";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Product Page',
  description: '...',
};

const ProductsPage = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const page = Number(searchParams.page) || 1;

  const fetchProducts = async () => {
    const response = await fetch(
      `https://backend-api-yt68.onrender.com/api/v1/products?page=${page}`,
      {
        cache: "force-cache",
        next: { revalidate: 20 },
      }
    );
    return response.json();
  };
  
  const products = await fetchProducts();

  const productList: Product[] = products.data.products;
  const { totalRecords, limit } = products.data;

  return (
    <>
      <b>Products Page</b>
      <div>
        {productList.map((product: Product) => (
          <Link href={`/products/${product._id}`} key={product._id} className="border-b py-2">
            <p>{product.product_name}</p>
            <p>{product.price} đ</p>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalRecords={totalRecords}
        limit={limit}
      />
    </>
  );
};

export default ProductsPage;
