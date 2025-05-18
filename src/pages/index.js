import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@mui/material/Button';
import styles from './Experience.module.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  // Fetch experiences from API
  const fetchExperiences = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/experience`);
      setExperiences(res.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch experiences');
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await axios.put(`${API_URL}/api/experience/${editingId}`, form);
      } else {
        await axios.post(`${API_URL}/api/experience`, form);
      }
      setForm({
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      });
      setEditingId(null);
      fetchExperiences();
      setError('');
    } catch (err) {
      setError('Error saving experience');
    }
  };

  const handleEdit = (item) => {
    setForm({
      title: item.title || '',
      company: item.company || '',
      location: item.location || '',
      startDate: item.startDate ? item.startDate.split('T')[0] : '',
      endDate: item.endDate ? item.endDate.split('T')[0] : '',
      description: item.description || '',
    });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/experience/${id}`);
      fetchExperiences();
      setError('');
    } catch (err) {
      setError('Failed to delete experience');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          <WorkIcon className={styles.icon} /> Experience
        </h2>
        <div className={styles.buttons}>
          <Button variant="outlined" onClick={fetchExperiences}>Fetch</Button>
          {!editingId && (
            <Button variant="contained" onClick={handleSubmit}>Add</Button>
          )}
          {editingId && (
            <>
              <Button variant="contained" onClick={handleSubmit}>Update</Button>
              <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
              <Button variant="outlined" color="error" onClick={() => handleDelete(editingId)}>Delete</Button>
            </>
          )}
        </div>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        <input
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <input
          name="startDate"
          type="date"
          placeholder="Start Date"
          value={form.startDate}
          onChange={handleChange}
          required
        />
        <input
          name="endDate"
          type="date"
          placeholder="End Date"
          value={form.endDate}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={4}
        />
      </form>

      {experiences.length === 0 ? (
        <p className={styles.noData}>No experience available.</p>
      ) : (
        <div className={styles.list}>
          {experiences.map(exp => (
            <div key={exp._id} className={styles.card}>
              <h3>{exp.title}</h3>
              <p className={styles.company}>
                {exp.company} — {exp.location}
              </p>
              <p className={styles.dates}>
                {new Date(exp.startDate).toLocaleDateString()} -{" "}
                {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Present"}
              </p>
              <p>{exp.description}</p>
              <div className={styles.cardButtons}>
                <Button size="small" variant="outlined" onClick={() => handleEdit(exp)}>Edit</Button>
                <Button size="small" color="error" variant="outlined" onClick={() => handleDelete(exp._id)}>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;
