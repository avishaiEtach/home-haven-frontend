import { CircularProgress, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { useFavoriteModal } from "./hooks/useFavoriteModal";
import "./FavoriteModal.scss";

export const FavoriteModal = () => {
  const { favoriteLength, search, filter, loading, onChange } =
    useFavoriteModal();

  if (favoriteLength === 0) {
    return <div className="favorite-modal-empty-container"></div>;
  }

  return (
    <div className="favorite-modal-main-container">
      <div className="container flex align-center space-between favorite-modal-header-container">
        <div>
          <h1 className="bold favorite-modal-header">favorites</h1>
          <p className="medium favorite-modal-semi-header">
            find your saved and get ready to order them
          </p>
        </div>
        <TextField
          onChange={onChange}
          value={search}
          className="favorite-modal-text-field"
          InputProps={{
            placeholder: "search for your favorite....",
            endAdornment: (
              <InputAdornment position="end">
                <CircularProgress
                  className={`favorite-modal-text-field-progress ${
                    loading ? "show" : "hide"
                  }`}
                  size={20}
                />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="container favorite-modal-products-container">
        {Object.keys(filter).length === 0 ? (
          <div className="bold favorite-modal-no-products-container">
            No Item Was Found!!!
          </div>
        ) : (
          Object.values(filter).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};
