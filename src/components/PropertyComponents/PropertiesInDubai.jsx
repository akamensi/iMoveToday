import React, { useRef } from "react";
import styles from "./PropertiesInDubai.module.css"; // Use its own CSS module
import TopGemsCard from "./TopGemsCard";
import useProperties from "../../../hooks/useProperties";

export default function PropertiesInDubai() {
  // Use the generic useProperties hook and pass the city filter
  const { properties, loading, error } = useProperties({ city: "Dubai" });
  const scrollRef = useRef(null);

  // Scroll by width of one card
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Ensure there's a firstChild before accessing offsetWidth
      const cardWidth = scrollRef.current.firstChild
        ? scrollRef.current.firstChild.offsetWidth + 20 // 20px gap
        : 300 + 20; // Fallback width if no cards are rendered yet

      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <p className={styles.loading}>Loading properties in Dubai...</p>;
  if (error) return <p className={styles.error}>Error loading properties in Dubai.</p>;

  return (
    <div className={styles.propertiesInDubaiContainer}>
      <div className={styles.horizontalScrollContainer} ref={scrollRef}>
        {properties.length > 0 ? (
          properties.map((property) => (
            <TopGemsCard key={property.id} property={property} />
          ))
        ) : (
          <p className={styles.noProperties}>No properties found in Dubai.</p>
        )}
      </div>
      {/* Show arrows only if there are properties to scroll */}
      {properties.length > 0 && (
        <>
          <div className={styles.arrowLeft} onClick={() => scroll("left")} />
          <div className={styles.arrowRight} onClick={() => scroll("right")} />
        </>
      )}
    </div>
  );
}