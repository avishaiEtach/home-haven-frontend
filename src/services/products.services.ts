import { messages } from "../assets/constants";
import { http } from "../http";
import { eventBusServices } from "./error.services";

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
  try {
    return await http.post(`/products`, { sort, filter, page, limit });
  } catch {
    eventBusServices.eventBus.emit("error", messages.error_not_get_products);
    return { rows: [], amount: 1 };
  }
}

async function getProductsById(id: string): Promise<Product | null> {
  try {
    return await http.get(`/getProductById/${id}`);
  } catch {
    eventBusServices.eventBus.emit("error", messages.error_not_get_product);
    return null;
  }
}

async function getReviewsByProductId(id: string): Promise<Review[]> {
  try {
    return await http.get(`/getReviewsByProductId/${id}`);
  } catch {
    eventBusServices.eventBus.emit("error", messages.error_not_get_reviews);
    return [];
  }
}
