import { http } from "../http";

interface Filter {
  originOfManufacture: string[];
  price: number[];
  categories: string[];
}

export const productsServices = {
  getProducts,
  getProductsById,
  getReviewsByProductId,
};

async function getProducts(
  sort: {},
  filter: {} | Filter,
  page = 1,
  limit = 16
): Promise<{ rows: Product[]; amount: number }> {
  return await http.post(`/products`, { sort, filter, page, limit });
}

async function getProductsById(id: string): Promise<Product> {
  return await http.get(`/getProductById/${id}`);
}

async function getReviewsByProductId(id: string): Promise<Review[]> {
  return await http.get(`/getReviewsByProductId/${id}`);
}
