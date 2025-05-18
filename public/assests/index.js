import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext'; // Import the context
import { Typography, Card, CardContent, Grid, CardMedia } from '@mui/material'; // Added CardMedia for images
import styles from './Projects.module.css';

const Projects = () => {
  const { setPageTitle } = usePageTitle(); // Use the correct setter

  useEffect(() => {
    setPageTitle('Projects - My Portfolio'); // Set a descriptive page title
  }, [setPageTitle]);

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.pageTitle}>Projects</Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card className={styles.card}>
            <CardMedia
              component="img"
              height="140"
              image="assests/doc.png" // Replace with the actual image path
              alt="TELEDOC"
            />
            <CardContent>
              <Typography variant="h6">Portfolio Website</Typography>
              <Typography variant="body2" color="textSecondary">
              TeleDoc is an Android-based telemedicine application developed using Java in Android Studio. It provides a seamless platform for patients to connect with doctors for remote consultations, medical advice, and health monitoring. The app integrates real-time communication and secure data handling to enhance virtual healthcare services.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={styles.card}>
            <CardMedia
              component="img"
              height="140"
              image="assests/vim.png" // Replace with the actual image path
              alt="VIM-LIKE TEXT EDITOR"
            />
            <CardContent>
              <Typography variant="h6">Weather App</Typography>
              <Typography variant="body2" color="textSecondary">
              This command-line text editor replicates Vim's functionality, built using data structures like arrays, linked lists, and stacks. It enables users to navigate, edit, and manipulate text efficiently with features such as insert, delete, undo/redo, and search functionality. Designed for speed and efficiency, it provides an interactive experience similar to Vim.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={styles.card}>
            <CardMedia
              component="img"
              height="140"
              image="assests/chess.jpg" // Replace with the actual image path
              alt="CHESS GAME"
            />
            <CardContent>
              <Typography variant="h6">Task Manager</Typography>
              <Typography variant="body2" color="textSecondary">
              This Chess Game was developed as a **Programming Fundamentals (PF)** project, implementing key programming concepts such as loops, conditionals, functions, arrays, and object-oriented programming (OOP). It follows standard chess rules and allows two players to compete in a **console-based environment**, featuring move validation, piece capturing, and check/checkmate detection.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className={styles.card}>
            <CardMedia
              component="img"
              height="140"
              image="assests/db.png" // Replace with the actual image path
              alt="DISTRIBUTED BACKUP SYSTEM"
            />
            <CardContent>
              <Typography variant="h6">E-Commerce App</Typography>
              <Typography variant="body2" color="textSecondary">
              Designed and implemented a fault-tolerant database backup system across multiple nodes in a distributed computing environment. The system ensures data consistency, redundancy, and automated backup scheduling, enabling efficient recovery in case of failures. Technologies involved include distributed file management, backup versioning, and incremental data capture.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
