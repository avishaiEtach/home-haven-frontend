import Cookies from "js-cookie";
import { maxCartItemCount } from "../assets/constants";

export function addToCart(product: Product, cart: any, count = 1): any {
  return async (dispatch: any) => {
    if (cart[product._id]) {
      if (cart[product._id].productCount > maxCartItemCount) return;
      cart = {
        ...cart,
        [product._id]: {
          ...cart[product._id],
          productCount: cart[product._id].productCount + count,
        },
      };
    } else {
      cart = {
        ...cart,
        [product._id]: {
          productName: product.shortName,
          productCount: count,
          productImage: product.mainImage,
          productPrice: calculateDiscountedPrice(
            product.price,
            product.discount
          ),
        },
      };
    }
    dispatch({ type: "ADD_To_CART", cart });
  };
}

export function changeCartItemCount(
  productId: string,
  cart: any,
  type: "dis" | "inc"
): any {
  return async (dispatch: any) => {
    const productCount =
      type === "dis"
        ? cart[productId].productCount - 1
        : cart[productId].productCount + 1;
    cart = {
      ...cart,
      [productId]: {
        ...cart[productId],
        productCount: productCount,
      },
    };
    dispatch({ type: "ADD_To_CART", cart });
  };
}

export function deleteCartItem(productId: string, oldCart: any): any {
  return async (dispatch: any) => {
    delete oldCart[productId];
    dispatch({ type: "ADD_To_CART", cart: { ...oldCart } });
  };
}

const calculateDiscountedPrice = (price: number, discount: number): number => {
  if (discount < 0 || discount > 100) {
    throw new Error("Discount should be between 0 and 100.");
  }

  const discountAmount = (price * discount) / 100;
  const newPrice = price - discountAmount;

  return newPrice;
};

export function setCart(cart: any): any {
  return async (dispatch: any) => {
    dispatch({ type: "SET_CART", cart });
  };
}

export function addToFavorite(
  product: Product,
  oldFavorite: any,
  status: boolean
): any {
  return async (dispatch: any) => {
    if (!oldFavorite[product._id] && status) {
      oldFavorite = { ...oldFavorite, [product._id]: product };
    } else if (oldFavorite[product._id] && !status) {
      delete oldFavorite[product._id];
    }
    dispatch({ type: "ADD_To_FAVORITE", favorite: { ...oldFavorite } });
  };
}

export function setFavorite(favorite: any): any {
  return async (dispatch: any) => {
    dispatch({ type: "SET_FAVORITE", favorite });
  };
}

export function addCompare(key: string, compare: string[]): any {
  const isAlreadyInCompare = compare.includes(key);

  if (compare.length < 2) {
    if (!isAlreadyInCompare) {
      compare.push(key); // Add item if not already in compare
    } else {
      compare.splice(compare.indexOf(key), 1); // Remove item if it's already in compare
    }
  } else if (isAlreadyInCompare) {
    compare.splice(compare.indexOf(key), 1); // Remove item if compare is full
  }

  return async (dispatch: any) => {
    dispatch({ type: "ADD_COMPARE", compare });
  };
}

export function setCompare(compare: string[]): any {
  return async (dispatch: any) => {
    dispatch({ type: "SET_COMPARE", compare });
  };
}
