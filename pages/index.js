import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "./components/Nav";
import styles from "../styles/Home.module.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  const [showContactUs, setshowContactUs] = useState("false");

  const handleShowContactUs = () => {
    showContactUs ? setshowContactUs(false) : setshowContactUs(true);
  };

  return <div className={styles.container}>
      <Head>
        <title>Paddle Frontend Assesment </title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {showContactUs == true ? <ContactUs handle={handleShowContactUs} /> : ""}

      <div className={showContactUs == true ? styles.blur : ""}>
        <Nav handleShowContactUs={handleShowContactUs} />

        <main className={styles.main}>
          <div className={styles.purpleCirlce} />
          <div className={styles.blueCirlce} />
          <h1>SOMETHING AWSOME IS COMING SOON</h1>
          <p>
            Your all-in-one affiliate marketing tracking software <span className={styles.bold}>track</span>, <span className={styles.bold}>automate</span> and <span className={styles.bold}>optimize</span> your campaigns.
          </p>
          {/* countdown */}
          <div className={styles.countDown}>
            <div className={styles.numberCont}>
              <p className={styles.number}>7</p>
              <p className={styles.text}>Days</p>
            </div>
            <div className={styles.numberCont}>
              <p className={styles.number}>24</p>
              <p className={styles.text}>Hours</p>
            </div>
            <div className={styles.numberCont}>
              <p className={styles.number}>54</p>
              <p className={styles.text}>Minutes</p>
            </div>
            <div className={styles.numberCont}>
              <p className={styles.number}>11</p>
              <p className={styles.text}>Seconds</p>
            </div>
          </div>
          {/* form */}
          <form action="" className={styles.form}>
            <div className={styles.names}>
              <input type="text" name="first-name" id="first-name" placeholder="Frist name" />
              <input type="text" name="first-name" id="last-name" placeholder="Last name" />
            </div>

            <div className={styles.email}>
              <input type="email" name="email" id="email" placeholder="Enter your email address..." className={styles.emailInput} />
              <input type="submit" value="JOIN OUR WAITING LIST" id="submit" className={styles.submit} />
            </div>
          </form>
        </main>

        <Footer id={1} />
      </div>
    </div>;
}
