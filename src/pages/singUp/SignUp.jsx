// File: src/pages/SignUp/SignUp.jsx
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.signUpPage}>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.signUpCard}>
            <div className={styles.signUpHeader}>
              <h1>Create Your Account</h1>
              <p>Begin your seamless relocation journey with us</p>
            </div>
            
            <form className={styles.signUpForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName" className={styles.formLabel}>Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.formLabel}>Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Create a secure password"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.formLabel}>Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              
              <div className={styles.termsContainer}>
                <input type="checkbox" id="terms" className={styles.termsCheckbox} required />
                <label htmlFor="terms" className={styles.termsLabel}>
                  I agree to the <a href="#" className={styles.termsLink}>Terms of Service</a> and <a href="#" className={styles.termsLink}>Privacy Policy</a>
                </label>
              </div>
              
              <button type="submit" className={styles.submitButton}>Create Account</button>
              
              <div className={styles.loginRedirect}>
                <p>Already have an account? <Link to="/login" className={styles.loginLink}>Log In</Link></p>
              </div>
            </form>
            
            <div className={styles.divider}>
              <span>Or continue with</span>
            </div>
            
            <div className={styles.socialAuth}>
              <button className={styles.socialButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                  <path d="M3.153 7.3455L6.4385 9.755C7.3275 7.554 9.4805 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.159 2 4.828 4.1685 3.153 7.3455Z" fill="#FF3D00"/>
                  <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.6055 17.5455 13.3575 18 12 18C9.399 18 7.1905 16.3415 6.3585 14.027L3.0975 16.5395C4.7525 19.778 8.1135 22 12 22Z" fill="#4CAF50"/>
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
                </svg>
                Google
              </button>
              
              <button className={styles.socialButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 23.994V15.563H7.078V12.073H10.125V9.413C10.125 6.387 11.917 4.716 14.658 4.716C15.97 4.716 17.344 4.951 17.344 4.951V7.923H15.83C14.34 7.923 13.875 8.853 13.875 9.808V12.073H17.203L16.671 15.563H13.875V23.994C19.612 23.094 24 18.1 24 12.073Z" fill="#1877F2"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignUp;