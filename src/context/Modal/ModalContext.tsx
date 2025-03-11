import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the modal context
interface ModalContextType {
  modals: { [key: string]: boolean };
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  isModalOpen: (id: string) => boolean;
}

// Create the context with an initial value of undefined
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define the provider component
export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});

  const openModal = (id: string) => {
    setModals((prev) => ({ ...prev, [id]: true }));
  };

  const closeModal = (id: string) => {
    setModals((prev) => ({ ...prev, [id]: false }));
  };

  const isModalOpen = (id: string) => !!modals[id];

  return (
    <ModalContext.Provider
      value={{ modals, openModal, closeModal, isModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Create a custom hook to use the ModalContext
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
