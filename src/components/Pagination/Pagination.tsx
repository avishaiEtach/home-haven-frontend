import React from "react";
import PaginationMui, { PaginationProps } from "@mui/material/Pagination";
import { usePagination } from "./hooks/usePagination";
import "./Pagination.scss";

export const Pagination = ({
  page,
  count,
  onChange,
  shape = "rounded",
}: PaginationProps) => {
  const { RenderItem } = usePagination();
  return (
    <PaginationMui
      className="pagination-container"
      page={page}
      count={count}
      shape={shape}
      renderItem={RenderItem}
      onChange={onChange}
    />
  );
};
