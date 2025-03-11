import { PaginationItem, PaginationRenderItemParams } from "@mui/material";
import React from "react";

export const usePagination = () => {
  const onClickItem = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: PaginationRenderItemParams
  ) => {
    item.onClick(ev);
    window.scrollTo(0, 0);
  };

  const RenderItem = (item: PaginationRenderItemParams) => {
    if (item.type === "next" || item.type === "previous") {
      return (
        <PaginationItem
          {...item}
          className="pagination-button controller"
          onClick={(ev) => {
            onClickItem(ev, item);
          }}
          slots={{
            next: () => <span>{item.type}</span>,
            previous: () => <span>{item.type}</span>,
          }}
        />
      );
    }
    return (
      <PaginationItem
        {...item}
        className="pagination-button"
        onClick={(ev) => {
          onClickItem(ev, item);
        }}
      />
    );
  };

  return { RenderItem };
};
