import { toast , ToastContainer } from "react-toastify";

type AllowedStrings = "error" | "info" | "success" | "warn";

export const showToast = (typeString: AllowedStrings, toastMessage: string) => {
  return toast[typeString](toastMessage, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
