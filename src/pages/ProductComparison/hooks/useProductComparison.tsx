import { Box, IconButton, Skeleton, Tooltip } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { getNumberAndCurrency } from "../../../assets/util";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setCompare } from "../../../store/userActions.actions";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import { useNavigate } from "react-router-dom";
import { routesPath } from "../../../routes";
import { productsServices } from "../../../services/products.services";

interface ProductCardTableProps {
  product: Product;
}

interface AttributeRowProps {
  title: string;
  keys: string[];
  dataKey: keyof Product;
}

export const useProductComparison = () => {
  const { compare } = useSelector((state: RootState) => state.userActionModel);
  const [productsToComparison, setProductsToComparison] = useState<Product[]>(
    []
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const memoizedCompare = useMemo(() => [...compare], [compare]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (memoizedCompare.length > 0) {
      setIsLoaded(true);
    }
  }, [memoizedCompare]);

  useEffect(() => {
    if (!isLoaded) return;
    if (memoizedCompare.length === 0) {
      navigate(routesPath.shop);
    } else {
      getProductsToComparison();
    }
  }, [memoizedCompare, isLoaded, navigate]);

  const getProductsToComparison = async () => {
    let productsToComparisonJsonArray = [];
    for (let i = 0; i < compare.length; i++) {
      const product = await productsServices.getProductsById(compare[i]);
      productsToComparisonJsonArray.push(product);
    }
    setProductsToComparison(productsToComparisonJsonArray);
  };

  const removeProductFromComparison = (compare: string[], product: Product) => {
    const key = product._id;
    const compareCopy = compare.slice();
    const isAlreadyInCompare = compare.includes(key);
    if (isAlreadyInCompare) {
      compareCopy.splice(compare.indexOf(key), 1);
      dispatch(setCompare([...compareCopy]));
    }
  };

  const calculateDiscountedPrice = (
    price: number,
    discount: number
  ): number => {
    if (discount < 0 || discount > 100) {
      throw new Error("Discount should be between 0 and 100.");
    }

    const discountAmount = (price * discount) / 100;
    const newPrice = price - discountAmount;

    return newPrice;
  };

  const capitalizeWordsFromCamelCase = (input: string): string => {
    return input
      .replace(/([A-Z])/g, " $1") // Add a space before uppercase letters
      .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
      .trim(); // Remove any leading or trailing spaces
  };

  const ProductCard = ({ product }: ProductCardTableProps) => (
    <td>
      <div className="flex column g10 product-comparison-product-card-main-container">
        <div className="flex align-center justify-center product-comparison-product-card-container">
          <div className="product-comparison-product-card-image-container">
            <img src={product.mainImage} alt={product.shortName} />
          </div>
        </div>
        <div className="product-comparison-product-card-main-container">
          <div className="flex g20 align-center product-comparison-product-card-header-container">
            <h1 className="bold">{product.shortName}</h1>
            <Tooltip title="remove product" arrow placement="top">
              <IconButton
                onClick={() => removeProductFromComparison(compare, product)}
              >
                <HighlightOffIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="flex g10">
            <span className="product-comparison-product-card-price">
              {getNumberAndCurrency(
                calculateDiscountedPrice(product.price, product.discount)
              )}
            </span>
          </div>
        </div>
      </div>
    </td>
  );

  const getUnit = (
    dataKey: keyof Product,
    key: string,
    value: string | undefined
  ) => {
    if (!value) return null; // No unit if value is missing

    if (
      (dataKey === "dimensions" || dataKey === "productDetails") &&
      (key === "weight" || key === "maximumLoadCapacity")
    ) {
      return "KG";
    }

    if (dataKey === "dimensions") {
      return "cm";
    }

    return null;
  };

  const AttributeRow = ({ title, keys, dataKey }: AttributeRowProps) => (
    <tr data-cell={title}>
      <td>
        <div className="flex g20 column product-comparison-attribute-row-header-container">
          <h2 className="bold">{title}</h2>
          {keys.map((key, index) => (
            <p key={index}>{capitalizeWordsFromCamelCase(key)}</p>
          ))}
        </div>
      </td>
      {productsToComparison.map((product, index) => (
        <td key={index}>
          <div className="flex g20 column product-comparison-attribute-row-header-container">
            <h2 className="bold">&nbsp;</h2>
            {keys.map((key, index) => {
              const dataGroup = product[dataKey] as Record<string, any>; // Type assertion
              const value = dataGroup[key];

              if (typeof value === "boolean") {
                return value ? (
                  <div
                    data-cell={capitalizeWordsFromCamelCase(key)}
                    className="product-comparison-attribute-row-icon"
                  >
                    <CheckCircleOutlineIcon color="success" key={index} />
                  </div>
                ) : (
                  <div
                    data-cell={capitalizeWordsFromCamelCase(key)}
                    className="product-comparison-attribute-row-icon"
                  >
                    <DoNotDisturbAltIcon color="error" key={index} />
                  </div>
                );
              } else if (Array.isArray(value)) {
                return (
                  <div key={index} className="flex g10">
                    {value.map((color, index) => (
                      <div
                        key={index}
                        className="product-additional-information-color"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                );
              } else {
                return (
                  <div className="flex g5">
                    <p
                      data-cell={capitalizeWordsFromCamelCase(key)}
                      key={index}
                    >
                      {value ? value : "N/A"}
                    </p>
                    {getUnit(dataKey, key, value) && (
                      <span>{getUnit(dataKey, key, value)}</span>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </td>
      ))}
    </tr>
  );

  const ProductComparisonLoader = () => {
    return (
      <div className="container product-comparison-loader-main-container">
        <Box component="div" className="flex g30 justify-center align-center">
          <Box
            component="div"
            className="flex g10 column product-comparison-loader-box-container"
          >
            <Skeleton variant="rounded" />
            <Skeleton variant="rounded" />
            <Skeleton variant="rounded" />
            <Skeleton variant="rounded" />
          </Box>
          <Box
            component="div"
            className="flex g10 column product-comparison-loader-box-container"
          >
            <Skeleton variant="rounded" />
            <Skeleton variant="rounded" />
            <Skeleton variant="rounded" />
            <Skeleton variant="rounded" />
          </Box>
        </Box>
      </div>
    );
  };

  return {
    productsToComparison,
    ProductCard,
    AttributeRow,
    ProductComparisonLoader,
  };
};
