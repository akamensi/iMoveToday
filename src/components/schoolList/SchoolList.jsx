// File: src/components/SchoolList/SchoolList.jsx
import React from "react";
import { useOutletContext } from "react-router-dom";
import SchoolCard from "../../pages/schoolCard/SchoolCard";
import styles from "./SchoolList.module.css";

const SchoolList = () => {
  // Get data from Dashboard's Outlet context
  const { schools, SchoolsLoading, schoolsError } = useOutletContext();

  const renderItem = (item) => <SchoolCard school={item} key={item.id} />;

  if (SchoolsLoading) return <p>Loading schools...</p>;
  if (schoolsError) return <p>Error loading schools: {error.message}</p>;
  if (!schools || schools.length === 0) return <p>No schools available.</p>;

  return (
    <div className={styles.schoolsGrid}>
      {schools.map((school) => renderItem(school))}
    </div>
  );
};

export default SchoolList;
