import React, { useRef } from "react";
import { useTopGemsProperties } from "../../../hooks/useTopGemsProperties";
import TopGemsCard from "./TopGemsCard";
import styles from "./OurTopGems.module.css";

export default function OurTopGems() {
  const { properties, loading, error } = useTopGemsProperties();
  const scrollRef = useRef(null);

  // Scroll by width of one card
  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 20; // 20px gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <p className={styles.loading}>Loading top gems...</p>;
  if (error) return <p className={styles.error}>Error loading properties.</p>;

  return (
    <div className={styles.ourTopGemsContainer}>
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
