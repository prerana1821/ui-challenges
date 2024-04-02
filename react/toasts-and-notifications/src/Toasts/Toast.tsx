import { positionOptions } from "../constant";
import styles from "./Toast.module.css";
import { ToastConfig } from "./Toasts";

export const Toast = ({
  toasts,
  close,
}: {
  toasts: ToastConfig[];
  close: React.Dispatch<React.SetStateAction<ToastConfig[]>>;
}) => {
  const getPositionStyle = (value: string, index: number) => {
    let pos = positionOptions.find((el) => el.value === value);

    return {
      ...pos?.style,
      marginTop: pos?.view === "top" ? index * 60 + "px" : "",
      marginBottom: pos?.view === "bottom" ? index * 60 + "px" : "",
    };
  };

  return (
    <>
      {toasts.map((toast, index) => {
        return (
          <div
            className={styles.toastContainer}
            style={getPositionStyle(toast.position, index)}
          >
            <span className={styles.iconContentContainer}>{toast.icon}</span>
            <p>{toast.title}</p>
            <button
              className={styles.close}
              onClick={() =>
                close((prev: ToastConfig[]) => {
                  return prev.filter((_, ind) => ind !== index);
                })
              }
            >
              Close
            </button>
          </div>
        );
      })}
    </>
  );
};
