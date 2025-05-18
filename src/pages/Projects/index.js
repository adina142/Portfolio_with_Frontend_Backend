// Projects.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Projects.module.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formProject, setFormProject] = useState({
    title: '',
    description: '',
    link: '',
    techStack: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  // Fetch all projects
  const fetchProjects = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_URL}/api/projects`);
      setProjects(res.data);
    } catch (err) {
      setError('Failed to fetch projects');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setFormProject({ ...formProject, [e.target.name]: e.target.value });
  };

  // Add or update project
  const handleSubmit = async () => {
    setError('');
    const submitData = {
      ...formProject,
      techStack: formProject.techStack.split(',').map(t => t.trim())
    };

    try {
      if (editingId) {
        await axios.put(`${API_URL}/api/projects/${editingId}`, submitData);
      } else {
        const res = await axios.post(`${API_URL}/api/projects`, submitData);
        setProjects([...projects, res.data]);
      }
      setFormProject({ title: '', description: '', link: '', techStack: '' });
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      setError('Failed to save project');
      console.error(err);
    }
  };

  // Edit project
  const handleEdit = (project) => {
    setFormProject({
      title: project.title || '',
      description: project.description || '',
      link: project.link || '',
      techStack: Array.isArray(project.techStack)
        ? project.techStack.join(', ')
        : project.techStack || ''
    });
    setEditingId(project._id);
  };

  // Delete project
  const handleDelete = async (id) => {
    setError('');
    try {
      await axios.delete(`${API_URL}/api/projects/${id}`);
      setProjects(projects.filter(p => p._id !== id));
      if (id === editingId) {
        setEditingId(null);
        setFormProject({ title: '', description: '', link: '', techStack: '' });
      }
    } catch (err) {
      setError('Failed to delete project');
      console.error(err);
    }
  };

  if (loading) return <div className={styles.loading}>Loading projects...</div>;

  return (
    <div className={styles.container}>
      <h2>Projects Manager</h2>
      {error && <div className={styles.error}>{error}</div>}

      <form className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formProject.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formProject.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="link"
          placeholder="GitHub Link"
          value={formProject.link}
          onChange={handleChange}
        />
        <input
          type="text"
          name="techStack"
          placeholder="Tech Stack (comma-separated)"
          value={formProject.techStack}
          onChange={handleChange}
        />

        <div className={styles.buttonGroup}>
          <button type="button" onClick={fetchProjects} className={styles.fetchBtn}>
            Fetch Projects
          </button>

          {!editingId ? (
            <button type="button" onClick={handleSubmit} className={styles.addBtn}>
              Add Project
            </button>
          ) : (
            <>
              <button type="button" onClick={handleSubmit} className={styles.updateBtn}>
                Update Project
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormProject({ title: '', description: '', link: '', techStack: '' });
                }}
                className={styles.cancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(editingId)}
                className={styles.deleteBtn}
              >
                Delete Project
              </button>
            </>
          )}
        </div>
      </form>

      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project._id} className={styles.item}>
            <div>
              <strong>{project.title}</strong>
              <p>{project.description}</p>
              {project.link && (
                <p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </p>
              )}
              {project.techStack && (
                <p>
                  <strong>Tech Stack:</strong>{' '}
                  {Array.isArray(project.techStack)
                    ? project.techStack.join(', ')
                    : project.techStack}
                </p>
              )}
            </div>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(project)}>Edit</button>
              <button
                onClick={() => handleDelete(project._id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
