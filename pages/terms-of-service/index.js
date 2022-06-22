import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styles from "../../styles/tos.module.css";
import Footer from "../components/Footer";


const TermsOfService = () => {
  return <div className={styles.container}>
      <Nav />
      <div className={styles.header}>
        <h1>Terms of Service</h1>

        <p>
          These Terms of Service constitute an agreement (this “Agreement”) for the provision of Cloud Services by Metricks Inc. and any person <br />
          or entity opening an online account with Metricks Inc (“Customer”) as specified in the information provided by Customer to Metricks in the <br /> online registration form. These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with Metricks website (the <br /> "Service") operated by Metricks Inc ("us", "we", or "our").
        </p>

        <div className={styles.borderedLeft}>
          <p className={styles.mTop}>
            This Agreement is effective as of the date Customer clicks “Accepted and Agreed To” or a similar button in the process of opening an online <br /> account with Metricks Inc (the “Effective Date”). Customer’s use of and Metricks provision of the Cloud Services and Metricks System (each as <br /> defined below) are governed by this Agreement.
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <h1>1. Website Terms and Conditions of Use </h1>
        <p>
          Please read these Terms of Service carefully before using the
          Service as they contain important information regarding the legal
          rights, remedies and obligations. Your access to and use of the
          Service is conditioned on your acceptance of and compliance with
          these Terms. These Terms apply to all visitors, users and others who
          access or use the Service.
        </p>
        <p>
          By accessing this Website, accessible from http://Metricks.io, you
          are agreeing to be bound by these Website Terms and Conditions of
          Use and agree that you are responsible for the agreement with any
          applicable local laws. If you disagree with any of these terms, you
          are prohibited from accessing this site. The materials contained in
          this Website are protected by copyright and trademark law. You agree
          that Metricks reserves the right to update and change these Terms
          from time to time without notice.
        </p>

        <p>
          Any new updates, features or options that will be added to the
          Service, including the release of new tools and resources, shall be
          subject to these Terms. Please note that these Terms may be amended
          from time to time. In continuing to use the Service you confirm that
          you accept the then-current terms and conditions in full at the time
          you use the Service.
        </p>
      </section>

      <section className={styles.section}>
        <h1>2. Definitions</h1>
        <p>
          Metricks is a company that enables advertisers (“Advertisers”) to
          market their products online with the help of publishers
          (“Affiliates”). Metricks contracts only with Advertisers and has no
          responsibility in the relationship between Advertisers and
          Affiliates. Metricks offers tools to improve, register and
          facilitate online marketing through Affiliates (the “Service”). The
          payment of Affiliates shall always be the sole responsibility of the
          Advertisers and Metricks shall therefore never be held liable for
          any damages resulting from any failure of the Advertiser to pay an
          Affiliate in a complete and timely manner.
        </p>
        <p>
          By accepting these Terms, any Advertiser using our Service warrants
          that he will pay the relevant Affiliate in a complete and timely
          manner.
        </p>
      </section>

      <section className={styles.section}>
        <h1>3. Registration</h1>
        <p>
          To make use of the Service, it is necessary to create an account
          (“Account”). The Service is intended solely for persons who are 18
          or older. Any access to or use of the Service by anyone under 18 is
          expressly prohibited. By accessing or using the Service you
          represent and warrant that you are 18 or older.
        </p>
      </section>

      <section className={styles.section}>
        <h1>4. Accounts</h1>
        <p>
          1. When you create an account with us, you must provide us with
          information that is accurate, complete, and current at all times.
          Failure to do so constitutes a breach of the Terms, which may result
          in immediate termination of your account on our Service. To create
          your Account you will have to provide your full name with a current
          email address and credit card details (only Advertisers).
        </p>
        <p>
          2. You are responsible for safeguarding the password that you use to
          access the Service and for any activities or actions under your
          password, whether your password is with our Service or a third-party
          service.
        </p>
        <p>
          3. You agree not to disclose your password to any third party. You
          must notify us immediately upon becoming aware of any breach of
          security or unauthorized use of your account.
        </p>
        <p>
          4. You may not use as a username the name of another person or
          entity or that is not lawfully available for use, a name or
          trademark that is subject to any rights of another person or entity
          other than you without appropriate authorization, or a name that is
          otherwise offensive, vulgar or obscene.
        </p>
        <p>
          5. Your Account is strictly personal and may not be used by anyone
          else. You may not impersonate any other person in any registration
          whether or not that other person is a user of the Service.
        </p>
        <p>
          6. If you manage more than one business entity, you must create a
          new Account for each different business entity. If you fail to do
          so, we reserve the right at our discretion to block, cancel or
          remove an Account of any person who in our opinion possesses more
          than one Account at any time.
        </p>
        <p>
          7. We reserve the right to terminate your registration immediately
          without notice if in our opinion you have breached these Terms.
        </p>
        <p>
          8. You may not use the Service for any illegal or unauthorized
          purpose. You must not, in the use of the Service, violate any laws
          in your jurisdiction (including but not limited to copyright laws).
        </p>
      </section>

      <section className={styles.section}>
        <h1>4. Fees</h1>
        <p>
          1. A valid payment method, including a credit card or PayPal, is
          required for paying accounts. If neither of these is present on the
          account, the account may be closed.
        </p>
        <p>
          2. Metricks, in its sole discretion and at any time, may modify the
          Subscription fees for the Subscriptions. Any Subscription fee change
          will become effective at the end of the then-current Billing Cycle.
          You hereby agree to keep such valid credit card and/or bank account
          in effect with sufficient credit limit to enable Metricks to charge
          the Subscription Fees every month, quarter or another period of each
          Term, as applicable, and not to challenge such charges or to request
          reversal of such charges.
        </p>
      </section>

      <section className={styles.section}>
        <h1>5. Taxes</h1>
        <p>
          All fees are exclusive of all taxes, levies, or duties imposed by
          taxing authorities, and you shall be responsible for payment of all
          such taxes, levies, or duties. Metricks has no responsibility or
          legal power to ensure the payment of the Advertiser and accepts no
          responsibility or liability if the Affiliate fails to arrange or
          collect payment from the Advertiser. Metricks may add any such taxes
          to the applicable Fees.
        </p>
      </section>

      <section className={styles.section}>
        <h1>6. Refunds</h1>
        <p>
          The Service is billed in advance on a monthly or yearly basis and is
          non-refundable. There will be no refunds or credits for partial
          months of service, upgrade/downgrade refunds, or refunds for months
          unused with an open account.
        </p>
      </section>

      <section className={styles.section}>
        <h1>7. Fee Changes</h1>
        <p>
          1. Metricks, in its sole discretion and at any time, may modify the
          Subscription fees for the Subscriptions. Any Subscription fee change
          will become effective at the end of the then-current Billing Cycle.
          Metricks will provide you with reasonable prior notice of any change
          in Subscription fees to allow you to terminate your Subscription
          before such change becomes effective. Your continued use of the
          Service after the Subscription fee change comes into effect
          constitutes your agreement to pay the modified Subscription fee
          amount.
        </p>
        <p>
          2. Metricks shall not be liable to you or any third party for any
          modification, price change, suspension or discontinuance of the
          Service.
        </p>
      </section>

      <section className={styles.section}>
        <h1>8. Subscription and Tracking</h1>
        <p>
          1. If you choose to upgrade or downgrade your Service, your credit
          card will automatically be charged the new rate on your next billing
          cycle. on your next billing cycle.
        </p>
        <p>
          2. Downgrading your Service may cause the loss of content, features,
          or capacity of your Account. Metricks does not accept any liability
          for such loss.
        </p>
        <p>
          3. Downgrading your Service to a non-white label level will cause
          all Affiliates who registered while the white label Service was
          activated, to be deactivated
        </p>
        <p>
          4. Every Service level has its number of tracking events (“Tracking
          Events”). Whenever the number of Tracking Events, as agreed upon and
          limited in the relevant Service level, is exceeded during the
          Subscription Period, we will calculate the price for the surplus
          Tracking Events following the overage fees listed on the pricing
          page as part of the service level. In such a case, the extra costs
          of the surplus Tracking Events will be added to the relevant monthly
          fee.
        </p>
      </section>

      <section className={styles.section}>
        <h1>9. Cancellation and Termination</h1>
        <p>
          1. We may terminate or suspend your account immediately, without
          prior notice or liability, for any reason whatsoever, including
          without limitation if you breach the Terms. Upon termination, your
          right to use the Service will immediately cease. If you wish to
          terminate your account, you may simply discontinue using the
          Service.
        </p>
        <p>
          2. If we exercise our discretion under these Terms to do so, any or
          all of the following can occur with or without prior notice or
          explanation to you: (a) your Account will be deactivated or
          suspended, your password will be disabled, and you will not be able
          to access the Service, or receive assistance from our customer
          service.
        </p>
        <p>
          3. You may cancel your Account at any time from the Subscription &
          Billing page. You are solely responsible for properly cancelling
          your account. Please note that if your Account is cancelled, we do
          not have an obligation to delete or return to you any content.
        </p>
        <p>
          4. All of your content (text and files) may be immediately deleted
          from the Service upon cancellation. This information cannot be
          recovered once your account is cancelled.
        </p>
        <p>
          5. If you cancel the Service before the end of your current Service
          Period, your cancellation will take effect immediately and you will
          not be charged again.
        </p>
        <p>
          6. Metricks, in its sole discretion, has the right to suspend or
          terminate your account and refuse any current or future use of the
          Service, or any other service from Metricks, for any reason at any
          time. Such termination of the Service will result in the
          deactivation or deletion of your Account or your access to your
          Account, and the forfeiture and relinquishment of all content in
          your Account. Metricks reserves the right to refuse service to
          anyone for any reason at any time.
        </p>
      </section>

      <section className={styles.section}>
        <h1>10. Intellectual Property</h1>
        <p>
          The Service and its original content, features and functionality are
          and will remain the exclusive property of Metricks Inc and its
          licensors. The Service is protected by copyright, trademark, and
          other laws of both the United States of America and foreign
          countries. Our trademarks and trade dress may not be used in
          connection with any product or service without the prior written
          consent of Metricks.
        </p>
      </section>

      <section className={styles.section}>
        <h1>11 .Disclaimer</h1>
        <p>
          1. All the materials on Metricks Website are provided "as is".
          Metricks makes no warranties, may it be expressed or implied,
          therefore negates all other warranties. Furthermore, Metricks does
          not make any representations concerning the accuracy or reliability
          of the use of the materials on its Website or otherwise relating to
          such materials or any sites linked to this Website.
        </p>
        <p>
          2. Metricks, its subsidiaries, affiliates, and its licensors do not
          warrant that a) the Service will function uninterrupted, secure or
          available at any particular time or location; b) any errors or
          defects will be corrected; c) the Service is free of viruses or
          other harmful components, or d) the results of using the Service
          will meet your requirements.
        </p>
        <p>
          3. We do not screen user-generated content or information on the
          Service and we cannot give any assurance as to its accuracy or
          completeness. Users of the Service are expressly asked not to
          publish any defamatory, misleading or offensive content or any
          content which infringes any other persons intellectual property
          rights (eg. copyright). Any such content is contrary to our policy
          we do not accept liability in respect of such content, and the user
          responsible will be personally liable for any damages or other
          liability arising and you agree to indemnify us with any liability
          we may suffer as a result of any such content.
        </p>
        <p>
          4. Metricks has the right in its sole discretion to refuse or remove
          any Content that is available via the Service.
        </p>
        <p>
          5. The Service and this website or any portion of the Service or the
          website may not be reproduced, duplicated, copied, sold, resold,
          visited, or otherwise exploited for any commercial purpose without
          our express written consent. You may not systematically extract
          and/or re-utilise parts of the contents of the Service without our
          express written consent. In particular, you may not utilise any data
          mining, robots, or similar data gathering and extraction tools to
          extract (whether once or many times) for re-utilisation of any
          substantial parts of the Service without our express written
          consent.
        </p>
        <p>
          6. All content posted on the Service must comply with the relevant copyright law. <br /> We claim no intellectual property rights over the material you provide to the Service. Your profile and materials uploaded remain yours. However, if you or anyone else with access to your account makes any content public, you agree to allow others to view and share your content.
        </p>
      </section>

      <section className={styles.section}>
        <h1>12. Limitation Of Liability</h1>
        <p>
          1. In no event shall Metricks, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from <br />
          (i) your access to or use of or inability to access or use the Service; <br />
          (ii) any conduct or content of any third party on the Service; <br /> (iii) any content obtained from the Service; <br /> (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
        </p>
        <p>
          2. Your access to the Service may be occasionally restricted to
          allow for repairs, maintenance or the introduction of new facilities
          or services. We will attempt to restore the Service as soon as we
          reasonably can. Your access to the Service may be occasionally
          restricted to allow for repairs, maintenance or the introduction of
          new facilities or services. We will attempt to restore the Service
          as soon as we reasonably can. Your access to the Service may be
          occasionally restricted to allow for repairs, maintenance or the
          introduction of new facilities or services. We will attempt to
          restore the Service as soon as we reasonably can.
        </p>
        <p>
          3. From time to time it may be necessary to suspend access to the
          Service for some time and any such interruptions shall not
          constitute a breach by us of these Terms.
        </p>
        <p>
          4. The User agrees that the above exclusions of liability are
          reasonable in all the circumstances, especially because our Service
          includes only the provision of the Service and responsibility for
          any payment to Affiliates lies solely with the Advertisers.
        </p>
      </section>

      <section className={styles.section}>
        <h1>13. Publicity</h1>
        <p>
          In further consideration of the rights granted hereunder to the
          User, User agrees to permit Metricks to use User’s name and
          trademarks and service marks to identify User as Metricks’s customer
          on the Website, in Metricks’s marketing materials and other sales
          and marketing activities, provided that User does not notify
          Metricks in writing of its revocation of such permission. User
          agrees to cooperate with Metricks in reasonable publicity efforts
          involving the System, such as, for example, media releases and
          marketing materials following Metricks's reasonable request.
        </p>
      </section>

      <section className={styles.section}>
        <h1>Your Privacy</h1>
        <p>Please read our Privacy Policy.</p>
      </section>

      <section className={styles.section}>
        <h1>14. General</h1>
        <p>
          1. Your use of the Service is at your sole risk. The Service is
          provided on an “as is” and “as available” basis.
        </p>
        <p>
          2. You understand that Metricks uses third party vendors and hosting
          partners to provide the necessary hardware, software, networking,
          storage, and related technology required to run the Service.
        </p>
        <p>
          3. You must not modify, adapt or hack the Service or modify another
          website to falsely imply that it is associated with the Service or
          Metricks.
        </p>
        <p>
          4. You may not reverse engineer or reuse source code that is in
          public view. This includes all javascript.
        </p>
        <p>
          5. Verbal, physical, written or other abuse (including threats of
          abuse or retribution) of any Metricks customer, employee, member, or
          officer will result in immediate Account termination.
        </p>
        <p>
          6. You understand that the technical processing and transmission of
          the Service, including your content, may be transferred unencrypted
          and involve (a) transmissions over various networks; and (b) changes
          to conform and adapt to the technical requirements of connecting
          networks or devices.
        </p>
        <p>
          7. You must not upload, post, host, or transmit unsolicited emails
          or “spam” messages.
        </p>
        <p>
          8. You must not transmit any worms or viruses or any code of a
          destructive nature.
        </p>
        <p>
          9. If your bandwidth usage exceeds the monthly limit or
          significantly exceeds the average bandwidth usage, we reserve the
          right to immediately suspend your account or throttle your file
          hosting until you can reduce your bandwidth consumption or upgrade
          your account.
        </p>
        <p>
          10. We do not warrant that <br /> (i) the Service will meet your specific requirements, <br /> (ii) the Service will be uninterrupted, timely, secure, or error-free, <br /> (iii) the results that may be obtained from the use of the Service will be accurate or reliable, <br /> (iv) the quality of any products, the Service, information, or other material purchased or obtained by you through the Service will meet your expectations.
        </p>
        <p>
          11. The failure of Metricks to exercise or enforce any right or
          provision of these Terms shall not constitute a waiver of such right
          or provision. These Terms constitute the entire agreement between
          you and Metricks and govern your use of the Service, superseding any
          prior agreements between you and Metricks (including, but not
          limited to, any prior versions of these Terms).
        </p>
        <p>
          12. Neither party will be liable to the other or be deemed to be in
          breach of these Terms because of any delay in performing, or any
          failure to perform, any of their obligations if the delay or failure
          was due to any event of force majeure beyond their reasonable
          control such as severe weather, subsidence, power or other utility
          cut-offs, burglary, natural disaster, strikes, governmental action,
          terrorism, war or civil unrest.
        </p>
        <p>
          13. The parties agree that these Terms are fair and reasonable in
          all circumstances. However, if any provision of these Terms is held
          not to be valid by a court of competent jurisdiction but would be
          valid if part of the wording were deleted, then such provision shall
          apply with such deletions as may be necessary to make it valid. If
          any of the provisions in these terms are held not to be valid the
          remaining provisions of these terms shall remain in full force and
          effect.
        </p>
        <p>
          13. The parties agree that these Terms are fair and reasonable in
          all circumstances. However, if any provision of these Terms is held
          not to be valid by a court of competent jurisdiction but would be
          valid if part of the wording were deleted, then such provision shall
          apply with such deletions as may be necessary to make it valid. If
          any of the provisions in these terms are held not to be valid the
          remaining provisions of these terms shall remain in full force and
          effect.
        </p>
        <p>
          14. If you breach these terms and conditions and we decide to take
          no action or neglect to do so, then we will still be entitled to
          take action and enforce our rights and remedies for any other
          breach.
        </p>
        <p>
          15. We may make changes to the format of the Service or the content
          of the Service at any time without notice.
        </p>
        <p>
          16. Advertisers will be solely responsible for the registration of
          Affiliates. Such registration can be executed for instance through a
          branded registration page, as a result of which Affiliates might
          receive transactional emails from Metricks.
        </p>
        <p>
          17. The Advertiser will impose these general terms and conditions
          unconditionally upon all its Affiliates and is and will be on all
          circumstances liable for any infringement on these terms by any
          Affiliate and/or any claim brought forward by one or more
          Affiliates.
        </p>
        <p>
          18. Affiliates who registered before a white label was activated by
          the Advertiser, will not be able to use the custom subdomain or the
          domain alias to log in on the affiliate portal. As a result of this,
          they will not be able to see the custom branding. They will be able
          however to promote the programs of the Advertiser and all Affiliate
          links will remain active
        </p>
        <p>
          19. Once a domain alias has been created, without any costs, this
          alias can be changed during the first 7 days. After this term of 7
          days, Metricks will be entitled to charge extra costs for such
          change.
        </p>
      </section>

      <section className={styles.section}>
        <h1>15. Acceptance</h1>
        <p>
          1. The User acknowledges having read this agreement, understands it
          and agrees to be bound by its terms. The person accepting this
          agreement on the User’s behalf through Metricks’s online
          registration process or by means of a User order represents that
          he/she has the authority to bind User to these terms and conditions.
        </p>
        <p>
          2. The User further acknowledges that this Agreement does not have
          to be signed in order to be binding. User will have indicated its
          assent to the terms of the Agreement by clicking on the "Accepted
          and Agreed To" (or similar button) that is presented to the user at
          the time of its opening of an online account with Metricks and
          submitting an order for the Cloud Services through Metricks’s online
          registration process on the Website
        </p>
      </section>

      <section className={styles.section}>
        <h1>16. Terms of Service Modifications</h1>
        <p>
          1.The User acknowledges having read this agreement, understands it
          and agrees to be bound by its terms. The person accepting this
          agreement on the User’s behalf through Metricks’s online
          registration process or employing a User order represents that
          he/she has the authority to bind User to these terms and conditions.
        </p>
        <p>
          2. The User further acknowledges that this Agreement does not have
          to be signed to be binding. User will have indicated its assent to
          the terms of the Agreement by clicking on the "Accepted and Agreed
          To" (or similar button) that is presented to the user at the time of
          its opening of an online account with Metricks and submitting an
          order for the Cloud Services through Metricks’s online registration
          process on the Website
        </p>
      </section>

      <section className={styles.section}>
        <h1>Contact Us</h1>
        <p>
          If you have any questions about these Terms, please contact us over
          live chat or email support@metricks.io
        </p>
      </section>

            <Footer id={2} />
      
    </div>;
};

export default TermsOfService;
