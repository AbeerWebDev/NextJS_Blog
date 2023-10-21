import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum eum fugit delectus recusandae obcaecati, molestiae amet, beatae repellat sapiente hic soluta corporis minima eligendi ducimus dolore fugiat, quam vel.
            </p>
            <div className={styles.author}>
              <Image
                src='/illustration.png'
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>jane doe</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src='/illustration.png' alt="" fill={true} className={styles.image} />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni cupiditate temporibus placeat omnis, fugiat eius natus vero architecto cumque, consequuntur veritatis enim cum similique quae culpa quo eligendi unde itaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab culpa, quasi repellat fugit cum voluptates neque officiis ducimus sit iure. Cum saepe, repellendus aliquam explicabo iure nisi sit quia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost