export interface Product {
  _id: string;
  product_name: string;
  price: number;
  description: string;
  slug: string;
  thumbnail: string;
}

export interface ProductsResponse {
  statusCode: number;
  message: string;
  data: Product;
}
