import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Dashboard.module.css';
import SchoolCard from '../../pages/schoolCard/SchoolCard';
import useSchools from '../../../hooks/useSchools';
import useProperties from "../../../hooks/useProperties";

const Dashboard = () => {
  const { schools, loading: SchoolsLoading, error: schoolsError, refetch: refetchSchools } = useSchools();
  const { properties, loading, error, refetch: fetchProperties } = useProperties();

  const renderItem = (item) => {
    return <SchoolCard school={item} key={item.id} />;
  };

  console.log("Fetched properties:", JSON.stringify(properties, null, 2));
  console.log("Schools:", schools);

  return (
    <div className={styles.dashboard}>
      <Outlet />

      {SchoolsLoading ? (
        <p>Loading schools...</p>
      ) : schoolsError ? (
        <p>Error loading schools: {schoolsError.message}</p>
      ) : (
        <div className={styles.schoolsGrid}>
          {schools && schools.length > 0 ? (
            schools.map((school) => renderItem(school))
          ) : (
            <p>No schools available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
