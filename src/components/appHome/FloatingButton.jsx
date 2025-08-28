// File: src/components/FloatingButton/FloatingButton.jsx
import React from "react";
import styles from "./FloatingButton.module.css";

const FloatingButton = ({ onClick, label = "For You" }) => {
  return (
    <button className={styles.floatingButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default FloatingButton;
