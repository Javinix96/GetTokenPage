import React from "react";
import { useRegex } from "../hooks/useRegex";
import { ParamComponent } from "./paramComponent";
import styles from "../components/showComponent.module.scss";

export const ShowComponent = () => {
  const { token, type, scope, copyToken } = useRegex(
    window.location?.hash.substring(1)
  );

  return (
    <div className={styles.box}>
      <ParamComponent title="Token" value={token} />
      <ParamComponent title="Token type" value={type} />
      <ParamComponent title="Scope" value={scope} />
      <div className={styles.ButtonContainer}>
        <button className={styles.button} onClick={copyToken}>
          {"Copiar Token".toUpperCase()}
        </button>
        <button className={styles.button}>
          {"Copiar link completo".toUpperCase()}
        </button>
      </div>
    </div>
  );
};
