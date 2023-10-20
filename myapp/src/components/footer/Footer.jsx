"use client"
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 BiteSize. All rights reserved.</div>
      <div className={styles.socials}>
        <Image
          className={styles.icon}
          src="/1.png"
          width={15}
          height={15}
          alt="Bite Size Facebook Account"
        />
        <Image
          className={styles.icon}
          src="/2.png"
          width={15}
          height={15}
          alt="Bite Size Instagram Account"
        />
        <Image
          className={styles.icon}
          src="/3.png"
          width={15}
          height={15}
          alt="Bite Size Twitter Account"
        />
        <Image
          className={styles.icon}
          src="/4.png"
          width={15}
          height={15}
          alt="Bite Size Youtube Account"
        />
      </div>
    </div>
  );
}

export default Footer