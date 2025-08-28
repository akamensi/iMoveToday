import React from "react";
import styles from "./SchoolCard.module.css"; // Dedicated CSS for school cards

export default function SchoolCard({ school }) {
  // Assuming 'school' object has fields like name, address, rating, type, images
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        {school?.images && school.images.length > 0 ? (
          <img
            src={school.images[0]} // Display the first image
            alt={school?.name}
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.noImage}>No Image Available</div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{school?.name}</h3>
        <p className={styles.cardText}>{school?.address}</p>
        {school?.type && <p className={styles.cardText}>Type: {school.type}</p>}
        {school?.rating && <p className={styles.rating}>⭐ {school.rating}</p>}
      </div>
    </div>
  );
}