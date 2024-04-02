import { useState } from "react";
import styles from "./Toast.module.css";
import { Toast } from "./Toast";

export interface ToastConfig {
  title: string;
  position: string;
  icon: string;
}

export const Toasts = () => {
  const [toasts, setToasts] = useState<ToastConfig[]>([]);
  const [configurations, setConfigurations] = useState<ToastConfig>({
    title: "",
    position: "",
    icon: "🔥",
  });

  const handleConfigurations = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setToasts((prev) => {
      return [...prev, configurations];
    });
  };

  return (
    <div>
      <h2>Configurations</h2>
      <form className={styles.configContainer} onSubmit={handleConfigurations}>
        <label className={styles.label} htmlFor='title'>
          Toast Title
        </label>
        <br />
        <input
          name='title'
          className={styles.input}
          type='text'
          placeholder='This is a toast.'
          value={configurations.title}
          onChange={(e) =>
            setConfigurations((prevConfig) => ({
              ...prevConfig,
              title: e.target.value,
            }))
          }
        />
        <label htmlFor='position' className={styles.label}>
          Position
        </label>

        <select
          className={styles.select}
          name='position'
          value={configurations.position}
          onChange={(e) =>
            setConfigurations((prevConfig) => ({
              ...prevConfig,
              position: e.target.value,
            }))
          }
        >
          <option value='top-left'>Top Left</option>
          <option value='top-right'>Top Right</option>
          <option value='bottom-left'>Bottom Left</option>
          <option value='bottom-right'>Bottom Left</option>
        </select>
        <label htmlFor='icon' className={styles.label}>
          Icon
        </label>
        <select
          className={styles.select}
          name='icon'
          value={configurations.icon}
          onChange={(e) =>
            setConfigurations((prevConfig) => ({
              ...prevConfig,
              icon: e.target.value,
            }))
          }
        >
          <option value='🔥'>🔥</option>
          <option value='💯'>💯</option>
          <option value='🚀'>🚀</option>
          <option value='🥰'>🥰</option>
        </select>
        <button className={styles.btn} type='submit'>
          Show Toast
        </button>
      </form>
      {toasts.length > 0 ? <Toast toasts={toasts} close={setToasts} /> : null}
    </div>
  );
};
