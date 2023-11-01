"use client"
import React from 'react'
import styles from "./page.module.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()
  console.log(session)
  
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>
  } else if (session.status === "unauthenticated") {
    router?.push("/dashboard/login")
  } else {
    return <div className={styles.container}>Dashboard</div>;
  }
}

export default Dashboard