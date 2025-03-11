import { TextFieldProps } from "@mui/material";
import { MyCustomGlobal } from "./classes";

declare global {
  interface Routes {
    path: string;
    component: () => JSX.Element;
    label?: string;
  }
  interface Dictionary<T = any> {
    [key: string]: T;
  }

  interface InputProps {
    value?: React.InputHTMLAttributes<unknown>["value"];
    onChange?: React.InputHTMLAttributes<
      HTMLInputElement | HTMLTextAreaElement
    >["onChange"];
    name?: string;
    variant?: TextFieldProps["variant"];
    label?: string;
    type?: React.InputHTMLAttributes<unknown>["type"];
    required?: React.InputHTMLAttributes<unknown>["required"];
    className?: React.InputHTMLAttributes<unknown>["className"];
    placeholder?: React.InputHTMLAttributes<unknown>["placeholder"];
    IconEnd?: IconType | React.ComponentType<SvgIconProps>;
    IconStart?: IconType | React.ComponentType<SvgIconProps>;
  }

  interface ButtonProps {
    text: string;
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    variant?: ButtonOwnProps["variant"];
    type?: React.ButtonHTMLAttributes<unknown>["type"];
    className?: React.ButtonHTMLAttributes<unknown>["className"];
    loading?: boolean;
    disabled?: ButtonOwnProps["disabled"];
    specialButton?: "file" | "loading";
  }

  interface User {
    _id: string;
    username: string;
    email: string;
    gender: string;
    profilePic: string;
  }
  interface Product {
    _id: string;
    productName: string;
    shortName: string;
    mainImage: string;
    productImages: { [key: string]: string[] };
    price: number;
    rating: number;
    discount: number;
    createdAt: string;
    general: General;
    productDetails: ProductDetails;
    dimensions: Dimensions;
    warranty: Warranty;
  }

  interface TokenInfo {
    token: string;
    cart: {
      [key: string]: {
        productName: string;
        productCount: number;
        productImage: string;
        productPrice: number;
      };
    };
    favorite: { [key: string]: Product };
    compare: string[];
  }

  interface Room {
    roomName: string;
    title: string;
    roomImage: string;
    images: string[];
  }

  interface Review {
    user: string;
    productId: mongoose.Types.ObjectId;
    rating: number;
    comment: string;
    date: string;
  }
}

export interface General {
  salesPackage: string;
  modelNumber: string;
  secondaryMaterial: string;
  configuration: string;
  upholsteryMaterial: string;
  upholsteryColor: string;
}

export interface ProductDetails {
  fillingMaterial: string;
  finishType: string;
  adjustableHeadrest: boolean;
  maximumLoadCapacity: number;
  originOfManufacture: string;
  productDescription: string;
  colors: string[];
  productFullDescription: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
  weight: number;
  seatHeight: number;
  legHeight: number;
}

export interface Warranty {
  warrantySummary: string;
  warrantyServiceType: string;
  coveredInWarranty: string;
  notCoveredInWarranty: string;
  domesticWarranty: string;
}
