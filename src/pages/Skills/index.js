// Skills.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Skills.module.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [formSkill, setFormSkill] = useState({ name: '', level: '' });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  const fetchSkills = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/skills`);
      setSkills(res.data);
      setMessage('Fetched successfully');
    } catch (err) {
      console.error(err);
      setMessage('Fetch failed');
    }
  };

  const handleChange = (e) => {
    setFormSkill({ ...formSkill, [e.target.name]: e.target.value });
  };

  const addSkill = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/skills`, formSkill);
      setSkills([...skills, res.data]);
      setFormSkill({ name: '', level: '' });
      setMessage('Skill added');
    } catch (err) {
      console.error(err);
      setMessage('Add failed');
    }
  };

  const updateSkill = async () => {
    if (!editingId) {
      setMessage('No skill selected for update');
      return;
    }
    try {
      await axios.put(`${API_URL}/api/skills/${editingId}`, formSkill);
      setSkills(skills.map(skill => skill._id === editingId ? { ...skill, ...formSkill } : skill));
      setFormSkill({ name: '', level: '' });
      setEditingId(null);
      setMessage('Skill updated');
    } catch (err) {
      console.error(err);
      setMessage('Update failed');
    }
  };

  const deleteSkill = async () => {
    if (!editingId) {
      setMessage('No skill selected for deletion');
      return;
    }
    try {
      await axios.delete(`${API_URL}/api/skills/${editingId}`);
      setSkills(skills.filter(skill => skill._id !== editingId));
      setFormSkill({ name: '', level: '' });
      setEditingId(null);
      setMessage('Skill deleted');
    } catch (err) {
      console.error(err);
      setMessage('Delete failed');
    }
  };

  const handleEdit = (skill) => {
    setFormSkill({ name: skill.name, level: skill.level });
    setEditingId(skill._id);
    setMessage(`Editing ${skill.name}`);
  };

  return (
    <div className={styles.container}>
      <h2>Skills Manager</h2>
      {message && <div className={styles.message}>{message}</div>}

      <div className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Skill name"
          value={formSkill.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="level"
          placeholder="Skill level"
          value={formSkill.level}
          onChange={handleChange}
        />
      </div>

      <div className={styles.buttons}>
        <button onClick={fetchSkills}>Fetch All</button>
        <button onClick={addSkill}>Add</button>
        <button onClick={updateSkill}>Update</button>
        <button onClick={deleteSkill} className={styles.deleteBtn}>Delete</button>
      </div>

      <ul className={styles.list}>
        {skills.map(skill => (
          <li key={skill._id} className={styles.item}>
            <span>{skill.name} - {skill.level}</span>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(skill)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
