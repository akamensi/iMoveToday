// File: src/components/SchoolCard/SchoolCard.jsx
import React from 'react';
import styles from './SchoolCard.module.css';
import { Link } from 'react-router';

const SchoolCard = ({ school }) => {
  const { name, location, type, curriculum, image } = school;
  
  return (
    <div className={styles.schoolCard}>
      <div className={styles.cardImage}>
        <img 
          src={image || '/placeholder-school.jpg'} 
          alt={name}
          className={styles.schoolImage}
        />
        <div className={styles.imageOverlay}></div>
        <div className={styles.cardHeader}>
          <h3 className={styles.schoolName}>{name}</h3>
        </div>
      </div>
      
      <div className={styles.cardDetails}>
        <div className={styles.detailItem}>
          <span className={styles.detailText}>City: {location}</span>
        </div>
        
        <div className={styles.detailItem}>
          <span className={styles.detailText}>Type: {type}</span>
        </div>
        
        <div className={styles.detailItem}>
          <span className={styles.detailText}>Education System: {curriculum}</span>
        </div>
        
        <div className={styles.actionRow}>
          <Link to={`/school-details/${school.id}`} >
          <button className={styles.viewButton}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;