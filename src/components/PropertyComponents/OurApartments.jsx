import React, { useRef } from "react";

import TopGemsCard from "./TopGemsCard"; // reuse same card component
import styles from "./OurApartments.module.css";
import useProperties from "../../../hooks/useProperties";

export default function OurApartments() {
  const { properties, loading, error } = useProperties({ propertyType: "apartment" });
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 20;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <p className={styles.loading}>Loading apartments...</p>;
  if (error) return <p className={styles.error}>Error loading apartments.</p>;

  return (
    <div className={styles.ourApartmentsContainer}>
      <div className={styles.horizontalScrollContainer} ref={scrollRef}>
        {properties.map((property) => (
          <TopGemsCard key={property.id} property={property} />
        ))}
      </div>
      <div className={styles.arrowLeft} onClick={() => scroll("left")} />
      <div className={styles.arrowRight} onClick={() => scroll("right")} />
    </div>
  );
}
