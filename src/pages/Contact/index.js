import React, { useState } from 'react';
import { 
  Typography, 
  TextField, 
  Button, 
  Container,
  Box
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  ContactMail as ContactMailIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Message as MessageIcon
} from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import styles from './Contact.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setFormStatus('Form submitted successfully!');
    resetForm();
  };

  return (
    <Container maxWidth="md" className={styles.container}>
      <Box className={styles.headerBox}>
        <Typography variant="h4" className={styles.pageTitle}>
          <ContactMailIcon className={styles.titleIcon} />
          Contact Me
        </Typography>
        <Typography variant="subtitle1" className={styles.pageSubtitle}>
          Have questions or want to work together? Send me a message!
        </Typography>
      </Box>

      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                variant="outlined"
                className={styles.textField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon className={styles.inputIcon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className={styles.formGroup}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                variant="outlined"
                className={styles.textField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon className={styles.inputIcon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className={styles.formGroup}>
              <TextField
                label="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={6}
                className={`${styles.textField} ${styles.messageField}`}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MessageIcon className={styles.inputIcon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className={styles.formGroup}>
              <Button 
                type="submit" 
                variant="contained" 
                className={styles.submitButton}
                size="large"
              >
                Send Message
              </Button>
            </div>

            {formStatus && (
              <Typography variant="body1" className={styles.successMessage}>
                {formStatus}
              </Typography>
            )}
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;