import React from "react";
import "./ProductAdditionalInformation.scss";

interface ProductAdditionalInformationProps {
  product: Product | null;
}

export const ProductAdditionalInformation = ({
  product,
}: ProductAdditionalInformationProps) => {
  return (
    <div className="product-additional-information-container">
      <div>
        <label className="semi-bold">General</label>
        <ul>
          <li>
            <span className="medium">sales package:</span>
            <span>{product?.general.salesPackage}</span>
          </li>
          <li>
            <span className="medium">model number:</span>
            <span>{product?.general.modelNumber}</span>
          </li>
          <li>
            <span className="medium">secondary material:</span>
            <span>{product?.general.secondaryMaterial}</span>
          </li>
          <li>
            <span className="medium">configuration:</span>
            <span>{product?.general.configuration}</span>
          </li>
          <li>
            <span className="medium">upholstery material:</span>
            <span>{product?.general.upholsteryMaterial}</span>
          </li>
        </ul>
      </div>
      <div>
        <label className="semi-bold">Product</label>
        <ul>
          <li>
            <span className="medium">filling material:</span>
            <span>{product?.productDetails.fillingMaterial}</span>
          </li>
          <li>
            <div className="flex align-center">
              <span className="medium">colors:</span>
              <span className="product-additional-information-colors-container">
                {product?.productDetails.colors.map((color) => (
                  <fieldset
                    className="product-additional-information-color"
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ))}
              </span>
            </div>
          </li>
          <li>
            <span className="medium">maximum load capacity:</span>
            <span>{product?.productDetails.maximumLoadCapacity} KG</span>
          </li>
          <li>
            <span className="medium">origin of manufacture:</span>
            <span>{product?.productDetails.originOfManufacture}</span>
          </li>
        </ul>
      </div>
      <div>
        <label className="semi-bold">Dimensions</label>
        <ul>
          <li>
            <span className="medium">width:</span>
            <span>{product?.dimensions.width} cm</span>
          </li>
          <li>
            <span className="medium">height:</span>
            <span>{product?.dimensions.height} cm</span>
          </li>
          <li>
            <span className="medium">depth:</span>
            <span>{product?.dimensions.depth} cm</span>
          </li>
          <li>
            <span className="medium">weight:</span>
            <span>{product?.dimensions.weight} KG</span>
          </li>
          <li>
            <span className="medium">seat height:</span>
            <span>{product?.dimensions.seatHeight} cm</span>
          </li>
          <li>
            <span className="medium">leg height:</span>
            <span>{product?.dimensions.legHeight} cm</span>
          </li>
        </ul>
      </div>
      <div>
        <label className="semi-bold">Warranty</label>
        <ul>
          <li>
            <span className="medium">warranty summary:</span>
            <span>{product?.warranty.warrantySummary}</span>
          </li>
          <li>
            <span className="medium">warranty service type:</span>
            <span>{product?.warranty.warrantyServiceType}</span>
          </li>
          <li>
            <span className="medium">covered in warranty:</span>
            <span>{product?.warranty.coveredInWarranty}</span>
          </li>
          <li>
            <span className="medium">not covered in warranty:</span>
            <span>{product?.warranty.notCoveredInWarranty}</span>
          </li>
          <li>
            <span className="medium">domestic warranty:</span>
            <span>{product?.warranty.domesticWarranty}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
