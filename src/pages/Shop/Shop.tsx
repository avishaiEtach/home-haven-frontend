import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ShopFillerBanner } from "../../components/ShopFillerBanner/ShopFillerBanner";
import { ShopProducts } from "../../components/ShopProducts/ShopProducts";
import { Modal } from "../../components/Modal/Modal";
import { FilterModal } from "../../components/FilterModal/FilterModal";
import { useShop } from "./hooks/useShop";
import { Pagination } from "../../components/Pagination/Pagination";

export const Shop = () => {
  const params = useShop();
  return (
    <>
      <div>
        <PageHeader pageName="Shop" breadcrumbsArray={[]} />
        <ShopFillerBanner {...params} />
        <ShopProducts {...params} />
        <Pagination
          page={params.currentPage}
          count={params.pagesAmount}
          onChange={(ev, page: number) => params.setCurrentPage(page)}
        />
      </div>
      <Modal id="filterModal">
        <FilterModal {...params} />
      </Modal>
    </>
  );
};
