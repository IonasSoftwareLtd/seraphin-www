import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";

export const ElevatedImage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isClickable, ...rest } = props;

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <img
        onClick={() => setIsOpen(true)}
        className={`image--elevated image--clickable`}
        {...rest}
      />
      <Dialog
        maxWidth="md"
        open={isOpen}
        onClose={handleClose}
      >
        <img src={props.src} />
      </Dialog>
    </>
  );
};
