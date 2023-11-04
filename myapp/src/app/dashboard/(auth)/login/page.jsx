"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const Login = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === "loading") {
    <p>Loading...</p>
  } 
  
  if (session.status === "authenticated") {
    router?.push('/dashboard')
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    signIn("credentials", {
      email,
      password,
    })
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          className={styles.input}
          id=""
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className={styles.input}
          id=""
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/register">
        Create new account
      </Link>
    </div>
  );
}

export default Login