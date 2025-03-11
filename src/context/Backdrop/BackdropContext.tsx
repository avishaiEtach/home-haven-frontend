import React, { createContext, useContext, useState, ReactNode, Dispatch } from "react";

// Define the type for the modal context
interface BackdropContextType {
  isBackdropOpen: boolean;
  backdropState: "cart" | "navbar";
  openBackdrop: () => void;
  closeBackdrop: () => void;
  setBackdropState: Dispatch<React.SetStateAction<"cart" | "navbar">>
}

// Create the context with an initial value of undefined
const BackdropContext = createContext<BackdropContextType | undefined>(
  undefined
);

// Define the provider component
export const BackdropProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState<boolean>(false);

  const [backdropState, setBackdropState] = useState<"cart" | "navbar">("cart");

  const openBackdrop = () => setIsBackdropOpen(true);
  const closeBackdrop = () => setIsBackdropOpen(false);

  return (
    <BackdropContext.Provider
      value={{
        isBackdropOpen,
        openBackdrop,
        closeBackdrop,
        backdropState,
        setBackdropState,
      }}
    >
      {children}
    </BackdropContext.Provider>
  );
};

// Create a custom hook to use the BackdropContext
export const useBackdrop = (): BackdropContextType => {
  const context = useContext(BackdropContext);
  if (!context) {
    throw new Error("useBackdrop must be used within a BackdropProvider");
  }
  return context;
};
