import React, { useState, useEffect } from "react";
import styles from "../../styles/ContactUs.module.css";

const ContactUs = props => {
  return (
    <div className={styles.container}>
      <div className={styles.blur} />
      <div className={styles.formCont}>
        <div className={styles.closePage}>
          <svg
            onClick={props.handle}
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40.5" cy="40.5" r="40.5" fill="white" />
            <path
              d="M50.7071 40.7071C51.0976 40.3166 51.0976 39.6834 50.7071 39.2929L44.3431 32.9289C43.9526 32.5384 43.3195 32.5384 42.9289 32.9289C42.5384 33.3195 42.5384 33.9526 42.9289 34.3431L48.5858 40L42.9289 45.6569C42.5384 46.0474 42.5384 46.6805 42.9289 47.0711C43.3195 47.4616 43.9526 47.4616 44.3431 47.0711L50.7071 40.7071ZM31 41L50 41L50 39L31 39L31 41Z"
              fill="#271AC1"
            />
          </svg>
        </div>
        <h2>
          Hey, we are still in the works, <br /> but you can send us a message!
        </h2>

        <form action="" >
          <div>
            <label htmlFor="firstname">
              First name
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter your first name "
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastname">
              Last name
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your last name "
              />
            </label>
          </div>
          <div>
            <label htmlFor="firstname">
              First name
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter your first name "
              />
            </label>
          </div>
          <div>
            <label htmlFor="firstname">
              Email address
              <textarea
                name="email"
                id="email"
                placeholder="Enter your Email addresss"
              />
            </label>
          </div>
          <div>
            <div className={styles.submitCont}>
              <input type="submit" value="SEND NOW" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
