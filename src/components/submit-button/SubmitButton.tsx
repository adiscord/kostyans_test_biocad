import React, { useContext } from "react";
import { Button } from "@mui/material";
import { inputContext } from "../../context/SequenceContext";

const SubmitButton = ({
  title,
  disabled,
  onClick,
}: {
  title: string;
  disabled: boolean;
  onClick: () => void;
}) => {
  return (
    <Button variant="outlined" onClick={onClick} disabled={disabled}>
      {title}
    </Button>
  );
};

export default SubmitButton;
