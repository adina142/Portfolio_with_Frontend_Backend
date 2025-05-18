import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Education.module.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [form, setForm] = useState({
    institution: '',
    degree: '',
    fieldOfStudy: '',
    startYear: '',
    endYear: '',
    grade: '',
    description: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  const fetchEducation = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/education`);
      setEducationList(res.data);
    } catch (err) {
      setError('Failed to fetch education records');
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await axios.put(`${API_URL}/api/education/${editingId}`, form);
      } else {
        await axios.post(`${API_URL}/api/education`, form);
      }
      setForm({
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startYear: '',
        endYear: '',
        grade: '',
        description: '',
      });
      setEditingId(null);
      fetchEducation();
    } catch (err) {
      setError('Error saving education');
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/education/${id}`);
      fetchEducation();
    } catch (err) {
      setError('Failed to delete record');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startYear: '',
      endYear: '',
      grade: '',
      description: '',
    });
  };

  return (
    <div className={styles.container}>
      <h2>Education History</h2>
      {error && <div className={styles.error}>{error}</div>}

      <form className={styles.form}>
        <input
          name="institution"
          placeholder="Institution"
          value={form.institution}
          onChange={handleChange}
          required
        />
        <input
          name="degree"
          placeholder="Degree"
          value={form.degree}
          onChange={handleChange}
        />
        <input
          name="fieldOfStudy"
          placeholder="Field of Study"
          value={form.fieldOfStudy}
          onChange={handleChange}
        />
        <input
          name="startYear"
          type="number"
          placeholder="Start Year"
          value={form.startYear}
          onChange={handleChange}
        />
        <input
          name="endYear"
          type="number"
          placeholder="End Year"
          value={form.endYear}
          onChange={handleChange}
        />
        <input
          name="grade"
          placeholder="Grade"
          value={form.grade}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <div className={styles.buttonGroup}>
          <button type="button" onClick={fetchEducation} className={styles.fetchBtn}>
            Fetch Records
          </button>

          {!editingId ? (
            <button type="button" onClick={handleSubmit} className={styles.addBtn}>
              Add Record
            </button>
          ) : (
            <>
              <button type="button" onClick={handleSubmit} className={styles.updateBtn}>
                Update Record
              </button>
              <button type="button" onClick={handleCancel} className={styles.cancelBtn}>
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(editingId)}
                className={styles.deleteBtn}
              >
                Delete Record
              </button>
            </>
          )}
        </div>
      </form>

      <ul className={styles.list}>
        {educationList.map((edu) => (
          <li key={edu._id} className={styles.item}>
            <div>
              <strong>{edu.institution}</strong> ({edu.startYear} - {edu.endYear || 'Present'})
              <br />
              {edu.degree} in {edu.fieldOfStudy}
              <br />
              {edu.grade && <em>Grade: {edu.grade}</em>}
              <p>{edu.description}</p>
            </div>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(edu)}>Edit</button>
              <button onClick={() => handleDelete(edu._id)} className={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
