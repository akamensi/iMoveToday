import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPorpertyById } from '../../services/apiProperties'; 
import styles from './PropertyDetails.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const PropertyDetails = () => {
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => { 
        const fetchOneProperty = async () => { 
          try { 
            setLoading(true); 
            const data = await getPorpertyById(id); 
            console.log("Fetched property:", data);
            setProperty(data); 
          } catch (err) { 
            console.error(err.message); 
          } finally { 
            setLoading(false); 
          } 
        }; 
        fetchOneProperty(); 
      }, [id]);

      // Destructure property data
      const { 
        name, address, city, type, bedrooms, bathrooms, 
        description, images, listing_type, location, geolocation,
        pool, equipped_kitchen, garden, furnished, parking, gym
      } = property || {};

      if (loading) {
        return <div className={styles.loading}>Loading property details...</div>;
      }

      if (!property) {
        return <div className={styles.error}>Property not found</div>;
      }
    
    // Create a list of available amenities for easier rendering
    const amenities = [
        { name: 'Pool', available: pool, icon: 'fas fa-swimming-pool' },
        { name: 'Equipped Kitchen', available: equipped_kitchen, icon: 'fas fa-utensils' },
        { name: 'Garden', available: garden, icon: 'fas fa-leaf' },
        { name: 'Furnished', available: furnished, icon: 'fas fa-couch' },
        { name: 'Parking', available: parking, icon: 'fas fa-car' },
        { name: 'Gym', available: gym, icon: 'fas fa-dumbbell' }
    ].filter(amenity => amenity.available);

  return (
    <div>
      <Header />
      <div className={styles.propertyDetailsContainer}>
        <div className={styles.heroSection}>
          <img 
            src={images && images.length > 0 ? images[0] : "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=80"} 
            alt={name} 
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.propertyBasicInfo}>
              <span className={styles.listingType}>{listing_type}</span>
              <h1 className={styles.propertyName}>{name}</h1>
              <div className={styles.propertyLocation}>
                <i className="fas fa-map-marker-alt"></i>
                <span>{address}, {city}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.mainContent}>
            <div className={styles.detailCard}>
              <h2 className={styles.sectionTitle}>Property Overview</h2>
              <p className={styles.description}>{description}</p>
              
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{bedrooms || 'N/A'}</div>
                  <div className={styles.statLabel}>Bedrooms</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{bathrooms || 'N/A'}</div>
                  <div className={styles.statLabel}>Bathrooms</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{type || 'N/A'}</div>
                  <div className={styles.statLabel}>Type</div>
                </div>
              </div>
            </div>
            
            {amenities.length > 0 && (
                <div className={styles.detailCard}>
                    <h2 className={styles.sectionTitle}>Amenities & Features</h2>
                    <div className={styles.amenitiesGrid}>
                        {amenities.map(amenity => (
                            <div key={amenity.name} className={styles.amenityItem}>
                                <i className={amenity.icon}></i>
                                <span>{amenity.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {images && images.length > 1 && (
              <div className={styles.detailCard}>
                <h2 className={styles.sectionTitle}>Gallery</h2>
                <div className={styles.galleryGrid}>
                  {images.slice(1).map((image, index) => (
                    <div key={index} className={styles.galleryItem}>
                      <img src={image} alt={`${name} - Image ${index + 2}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.actionCard}>
              <h3 className={styles.sectionTitle}>Interested?</h3>
              <button className={styles.actionButton}>
                <i className="fas fa-phone"></i>
                Call Agent
              </button>
              <button className={styles.secondaryButton}>
                <i className="fas fa-envelope"></i>
                Send Inquiry
              </button>
            </div>
            
            <div className={styles.actionCard}>
              <h3 className={styles.sectionTitle}>Location</h3>
              <p className={styles.locationText}><strong>Area:</strong> {location}</p>
              <p className={styles.locationText}><strong>City:</strong> {city}</p>
              <div className={styles.mapContainer}>
                {geolocation ? (
                  <p>Map would be displayed here for: {geolocation}</p>
                ) : (
                  <p>Location information not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PropertyDetails;