import React from "react";
import "./ProductComparison.scss";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Link, useNavigate } from "react-router-dom";
import { routesPath } from "../../routes";
import {
  dimensions,
  general,
  productDetails,
  warranty,
} from "../../assets/constants";
import { useProductComparison } from "./hooks/useProductComparison";

export const ProductComparison = () => {
  const {
    productsToComparison,
    ProductCard,
    AttributeRow,
    ProductComparisonLoader,
  } = useProductComparison();

  if (!productsToComparison.length) {
    return <ProductComparisonLoader />;
  }

  return (
    <div className="container">
      <PageHeader breadcrumbsArray={[]} pageName="Product Comparison" />
      <table className="product-comparison-table">
        <tbody>
          {/* Product Images and Prices */}
          <tr>
            <td>
              <div className="flex column product-comparison-table-link-container">
                <h1 className="bold">Go to Shop page for more Products</h1>
                <Link to={routesPath.shop}>View More</Link>
              </div>
            </td>
            {productsToComparison.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </tr>

          {/* Attribute Sections */}
          <AttributeRow title="General" keys={general} dataKey="general" />
          <AttributeRow
            title="Product"
            keys={productDetails}
            dataKey="productDetails"
          />
          <AttributeRow
            title="Dimensions"
            keys={dimensions}
            dataKey="dimensions"
          />
          <AttributeRow title="Warranty" keys={warranty} dataKey="warranty" />
        </tbody>
      </table>
    </div>
  );
};
