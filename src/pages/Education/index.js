import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Education.module.css';

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/education`)
      .then(res => setEducations(res.data))
      .catch(err => console.error("Error fetching education:", err));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Education</h2>
      {educations.length === 0 ? (
        <p className={styles.message}>No education records found.</p>
      ) : (
        <ul className={styles.educationList}>
          {educations.map((edu, index) => (
            <li key={index} className={styles.educationItem}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Education;
