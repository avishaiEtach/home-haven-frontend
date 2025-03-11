import React from "react";
import ModalMui, { ModalProps } from "@mui/material/Modal";
import { useModal } from "../../context/Modal/ModalContext";
import { Backdrop, Box, Fade, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalMuiProps {
  children: ModalProps["children"];
  id: string;
}

export const Modal = ({ children, id }: ModalMuiProps) => {
  const { isModalOpen, closeModal } = useModal();
  return (
    <ModalMui
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalOpen(id)}
      onClose={() => closeModal(id)}
      closeAfterTransition={true}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isModalOpen(id)}>
        <Box component={"div"} className="modal">
          <IconButton
            onClick={() => closeModal(id)}
            className="modal-close-button"
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Fade>
    </ModalMui>
  );
};
