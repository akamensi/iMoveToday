import React from 'react';
import styles from './PropertyCard.module.css';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

const PropertyCard = ({ property }) => {
  const { name, city, type, image, listing_type } = property;
  
  return (
    <div className={styles.propertyCard}>
      <div className={styles.cardImage}>
        <img 
          src={image || '/placeholder-property.jpg'} 
          alt={name}
          className={styles.propertyImage}
        />
        <div className={styles.imageOverlay}></div>
        <div className={styles.listingTypeBadge}>
          {listing_type}
        </div>
        <div className={styles.cardHeader}>
          <h3 className={styles.propertyName}>{name}</h3>
        </div>
      </div>
      
      <div className={styles.cardDetails}>
        <div className={styles.detailItem}>
          <span className={styles.detailText}>City: {city}</span>
        </div>
        
        <div className={styles.detailItem}>
          <span className={styles.detailText}>Type: {type}</span>
        </div>
        
        <div className={styles.actionRow}>
          <Link to={`/property-details/${property.id}`}>
            <button className={styles.viewButton}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;