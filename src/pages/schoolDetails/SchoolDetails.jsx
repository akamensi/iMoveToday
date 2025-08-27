import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSchoolById } from '../../services/apiSchools';
import styles from './SchoolDetails.module.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const SchoolDetails = () => {
    const [school, setSchool] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => { 
        const fetchOneSchool = async () => { 
          try { 
            setLoading(true); 
            const data = await getSchoolById(id); 
            console.log("Fetched school:", data);
            setSchool(data); 
          } catch (err) { 
            console.error(err.message); 
          } finally { 
            setLoading(false); 
          } 
        }; 
        fetchOneSchool(); 
      }, [id]);

      const { name, location, type, curriculum, images, grades, 
              fees_range, rating, transport, canteen, contact, 
              website, geolocation } = school || {};

      if (loading) {
        return <div className={styles.loading}>Loading school details...</div>;
      }

      if (!school) {
        return <div className={styles.error}>School not found</div>;
      }

  return (
    <div  >
    <div className={styles.schoolDetailsContainer}>
      <div className={styles.heroSection}>
        <img 
          src={images && images.length > 0 ? images[0] : "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"} 
          alt={name} 
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.schoolBasicInfo}>
            <h1 className={styles.schoolName}>{name}</h1>
            <div className={styles.schoolLocation}>
              <i className="fas fa-map-marker-alt"></i>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.mainContent}>
          <div className={styles.detailCard}>
            <h2 className={styles.sectionTitle}>School Overview</h2>
            <p>Welcome to {name}, a {type} institution located in {location}. We offer {curriculum} curriculum for grades {grades}.</p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>{rating || 'N/A'}</div>
                <div className={styles.statLabel}>Rating</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>{fees_range || 'N/A'}</div>
                <div className={styles.statLabel}>Fees Range</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>{grades || 'N/A'}</div>
                <div className={styles.statLabel}>Grades</div>
              </div>
            </div>
          </div>
          
          <div className={styles.detailCard}>
            <h2 className={styles.sectionTitle}>School Details</h2>
            <div className={styles.detailGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>School Type</span>
                <span className={styles.detailValue}>{type}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Curriculum</span>
                <span className={styles.detailValue}>{curriculum}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Grades Offered</span>
                <span className={styles.detailValue}>{grades}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Transport</span>
                <span className={styles.detailValue}>{transport ? 'Available' : 'Not Available'}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Canteen</span>
                <span className={styles.detailValue}>{canteen ? 'Available' : 'Not Available'}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Fees Range</span>
                <span className={styles.detailValue}>{fees_range}</span>
              </div>
            </div>
          </div>
          
          {images && images.length > 1 && (
            <div className={styles.detailCard}>
              <h2 className={styles.sectionTitle}>Gallery</h2>
              <div className={styles.galleryGrid}>
                {images.slice(1).map((image, index) => (
                  <div key={index} className={styles.galleryItem}>
                    <img src={image} alt={`${name} - Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.sidebar}>
          <div className={styles.actionCard}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            <div className={styles.contactInfo}>
              {contact && (
                <div className={styles.contactItem}>
                  <i className="fas fa-phone"></i>
                  <span>{contact}</span>
                </div>
              )}
              {website && (
                <div className={styles.contactItem}>
                  <i className="fas fa-globe"></i>
                  <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                </div>
              )}
              {geolocation && (
                <div className={styles.contactItem}>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{geolocation}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className={styles.actionCard}>
            <h3 className={styles.sectionTitle}>Quick Actions</h3>
            <a href={`tel:${contact}`} className={styles.actionButton}>
              <i className="fas fa-phone"></i>
              Call School
            </a>
            <a href={website} target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
              <i className="fas fa-globe"></i>
              Visit Website
            </a>
            <button className={styles.secondaryButton}>
              <i className="fas fa-download"></i>
              Download Brochure
            </button>
          </div>
          
          <div className={styles.actionCard}>
            <h3 className={styles.sectionTitle}>Location</h3>
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
    </div>
  )
}

export default SchoolDetails;