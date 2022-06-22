import React, { useState, useEffect } from "react";
import styles from "../../styles/About-us.module.css";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Nav />

      <section className={styles.section1}>
        <div className={styles.purpleRect} />
        <div className={styles.blueCircle} />
        <div className={styles.blur} />
        <div className={styles.text}>
          <p>
            <span className={styles.line} />
            <span className={styles.lineText}>ABOUT US</span>
          </p>
          <p className={styles.textLarge}>
            <span>Built for SaaS </span>
            <span>and E-commerce</span>
          </p>
          <p className={styles.textSmall}>
            Our tools are easy to set up and use with a user <br />
            friendly dashboard that enables you to set up, <br />
            launch, automate and manage multi-affiliate <br />
            campaigns in 5 minutes.
          </p>
        </div>
      </section>

      <section className={styles.section2}>
        <p className={styles.text}>
          Metricks was developed because just like <br />
          you, we needed a product that could give <br />
          us <span> good value.</span>
        </p>
      </section>

      <section className={styles.section3}>
        <div className={styles.plane}>
          <div className={styles.text}>
            <div className={styles.header}>
              <p>
                <span className={styles.line}>
                  <span>01</span>
                </span>
                <span className={styles.text}>WHY US?</span>
              </p>
            </div>
            <p>
              We pride ourselves in our ability to innovate and <br />
              create world-class tools that privide reliable and <br />
              efficient touchpoints between advertisers and <br />
              affiliates
            </p>
          </div>
        </div>

        <div className={styles.blur} />
        <div className={styles.blurFrame}>
          <div className={styles.blurFrameText}>
            <div className={styles.header}>
              <p>
                <span className={styles.line}>
                  <span>02</span>
                </span>
                <span className={styles.text}>GROWING WITH YOU</span>
              </p>
            </div>
            <div className={styles.text}>
              <p>
                Leveraging the best technology we have developed an all-in-{" "}
                <br />
                one affiliate marketing tracking software, a genius tool to help{" "}
                <br />
                you track, automate and optimize your influencer campaigns,{" "}
                <br />
                all from one dashboard.
              </p>
              <div className={styles.gap} />
              <p>
                Our team of experts are constantly brainstorming, testing and{" "}
                <br />
                developing new solutions with only one thing in mind - your{" "}
                <br />
                business growth. Your success is our success and by giving you{" "}
                <br />
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section4}>
        <div className={styles.text}>
          <p className={styles.header}>Got a question?</p>
          <p>
            See how Metricks can help your business grow with best afffiliate
            marketing tracking <br /> sortware.
          </p>

          <p className={styles.contact}>Contact us</p>
        </div>
        <div className={styles.blur} />
      </section>

      <Footer id={2} />

    </div>
  );
};

export default AboutUs;
