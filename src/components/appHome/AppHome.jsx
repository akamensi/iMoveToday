// File: src/components/appHome/AppHome.jsx
import { useState } from "react";
import styles from "./AppHome.module.css";
import OurTopGems from "../PropertyComponents/OurTopGems";
import OurApartments from "../PropertyComponents/OurApartments";
import PropertiesInDubai from "../PropertyComponents/PropertiesInDubai";
import OurTopSchools from "../schoolComponent/OurTopSchools";
import AmericanCurriculumSchools from "../schoolComponent/AmericanCurriculumSchools";
import { useTopRatedSchools } from "../../../hooks/useSchoolFilter";
import MapPanel from "../map/MapPanel";
import FloatingButton from "./FloatingButton";

const AppHome = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const { schools, loading, error } = useTopRatedSchools();

  // Existing modal state for "For You" button
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // Toggle Map Panel
  const toggleMap = () => {
    setIsMapOpen(!isMapOpen);
  };

  return (
    <div className={styles.appHome}>
      {/* Existing "For You" floating button */}
      <FloatingButton onClick={openModal} label="For You" />

      {/* New Map floating button */}
      <button className={styles.mapFloatingButton} onClick={toggleMap}>
        Map
      </button>

      {/* Map Panel */}
      <MapPanel schools={schools} isOpen={isMapOpen} />

      {/* Existing AppHome Sections */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our top gems</h2>
        <OurTopGems />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Apartments</h2>
        <OurApartments />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Properties in Dubai</h2>
        <PropertiesInDubai />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Top Rated Schools</h2>
        <OurTopSchools />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>American Curriculum Schools</h2>
        <AmericanCurriculumSchools />
      </section>

      {/* Optional Modal for "For You" button */}
      {isModalOpen && <MultiStepForm closeModal={closeModal} />}
    </div>
  );
};

export default AppHome;
