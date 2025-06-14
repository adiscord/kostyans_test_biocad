import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

type ToastProps = {
  message?: string;
  open: boolean;
  onClose: () => void;
};

const Toast = ({ message, open, onClose }: ToastProps) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={1000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={(props) => <Slide {...props} direction="down" />}
      slotProps={{
        transition: {
          timeout: 250,
        },
      }}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        {message || "Скопировано!"}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
