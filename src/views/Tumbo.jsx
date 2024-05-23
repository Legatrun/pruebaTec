import { Button } from "antd";
import { useState } from "react";
import { NewPokemon } from "./NewPokemon";

export const Tumbo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Create New Pokemon</Button>
      {open && <NewPokemon open={open} onClose={handleClose} />}
    </>
  );
};
