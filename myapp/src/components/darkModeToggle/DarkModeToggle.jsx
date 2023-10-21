import React from 'react'
import styles from './darkModeToggle.module.css'

const DarkModeToggle = () => {
    const mode = 'light'
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} style={mode === 'dark' ? {right: '2px'} : {left: '2px'}}/>
    </div>
  );
}

export default DarkModeToggle