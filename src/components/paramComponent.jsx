import React from "react";
import styles from "../components/param.module.scss";

export const ParamComponent = ({ title, value }) => {
  const copy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.boxValue}>
        <div>
          <p>{value}</p>
        </div>
        <button onClick={copy}>copy</button>
      </div>
    </>
  );
};
