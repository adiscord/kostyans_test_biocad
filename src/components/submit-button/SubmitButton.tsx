import { Button } from "@mui/material";

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
