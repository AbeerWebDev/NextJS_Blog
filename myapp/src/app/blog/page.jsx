import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/button/Button';


const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              alt=""
              src="/illustration.png"
            />
          </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              alt=""
              src="/illustration.png"
            />
          </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
    </div>
  );
}

export default Blog