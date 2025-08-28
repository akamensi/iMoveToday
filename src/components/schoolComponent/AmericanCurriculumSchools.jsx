import React, { useRef } from "react";
import SchoolCard from "./SchoolCard"; // Reuse the existing SchoolCard component
import { useTopRatedSchools } from "../../../hooks/useSchoolFilter";
import styles from "./AmericanCurriculumSchools.module.css";


export default function AmericanCurriculumSchools() {
  const { schools, loading, error } = useTopRatedSchools();
  const scrollRef = useRef(null);

  // Scroll by width of one card
  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild
        ? scrollRef.current.firstChild.offsetWidth + 20 // 20px gap
        : 300 + 20; // Fallback width

      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  if (loading) return <p className={styles.loading}>Loading American curriculum schools...</p>;
  if (error) return <p className={styles.error}>Error loading schools.</p>;

  return (
    <div className={styles.americanCurriculumSchoolsContainer}>
      <div className={styles.horizontalScrollContainer} ref={scrollRef}>
        {schools.length > 0 ? (
          schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))
        ) : (
          <p className={styles.noSchools}>No American curriculum schools found.</p>
        )}
      </div>
      {/* Show arrows only if there are schools to scroll */}
      {schools.length > 0 && (
        <>
          <div className={styles.arrowLeft} onClick={() => scroll("left")} />
          <div className={styles.arrowRight} onClick={() => scroll("right")} />
        </>
      )}
    </div>
  );
}