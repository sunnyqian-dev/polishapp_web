// src/app/privacy-policy/page.tsx

import Head from 'next/head';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="NailMe Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.date}>Effective Date: 2025-01-01</p>

        <section>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
          <p className={styles.paragraph}>
            NailMe collects the following types of information when you use our app:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Personal Information:</strong> When you create an account, we may collect personal details such as your name, email address, and other relevant information to enhance your experience.</li>
            <li className={styles.listItem}><strong>Device Information:</strong> We may collect information about your device, including device model, operating system, and unique identifiers, to improve app performance and functionality.</li>
            <li className={styles.listItem}><strong>Usage Data:</strong> We track usage data, such as app interactions, features used, and time spent in the app, to analyze user behavior and improve app performance.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
          <p className={styles.paragraph}>The information we collect is used for the following purposes:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>To personalize your experience and provide AI-powered nail design recommendations.</li>
            <li className={styles.listItem}>To communicate with you regarding app updates, offers, or support.</li>
            <li className={styles.listItem}>To monitor app performance, troubleshoot issues, and enhance the overall user experience.</li>
            <li className={styles.listItem}>To comply with legal obligations and protect our rights and safety.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>3. Data Sharing and Disclosure</h2>
          <p className={styles.paragraph}>NailMe does not share or sell your personal information to third parties for marketing purposes. We may share information in the following cases:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong>Service Providers:</strong> We may share your data with third-party service providers who assist in app operation, such as payment processors or cloud services.</li>
            <li className={styles.listItem}><strong>Legal Compliance:</strong> We may disclose your information to comply with legal obligations, respond to legal requests, or protect our rights, property, or the safety of users.</li>
          </ul>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>4. Data Security</h2>
          <p className={styles.paragraph}>We implement reasonable security measures to protect your personal data from unauthorized access, use, or disclosure. However, no data transmission over the internet or storage method is 100% secure, and we cannot guarantee the absolute security of your information.</p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>5. In-App Purchases</h2>
          <p className={styles.paragraph}>NailMe offers In-App Purchases (IAP) that allow you to unlock additional features, content, or services. All payments for In-App Purchases are processed through Apple’s App Store and are subject to their terms and conditions. NailMe does not handle payment transactions directly.</p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>6. Your Rights</h2>
          <p className={styles.paragraph}>As a user, you have the right to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Access and update your personal information.</li>
            <li className={styles.listItem}>Request the deletion of your account and personal data (subject to applicable legal requirements).</li>
            <li className={styles.listItem}>Opt-out of marketing communications.</li>
          </ul>
          <p className={styles.paragraph}>To exercise your rights, please contact us at flexibuilder@gmail.com.</p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>7. Children's Privacy</h2>
          <p className={styles.paragraph}>NailMe is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children. If we learn that we have inadvertently collected personal data from a child under 13, we will delete that information as quickly as possible.</p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>
          <p className={styles.paragraph}>We may update this Privacy Policy from time to time. When we make changes, we will update the effective date at the top of the policy. We encourage you to review this Privacy Policy periodically for any updates.</p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>9. Contact Us</h2>
          <p className={styles.paragraph}>If you have any questions about this Privacy Policy or our practices, please contact us at:</p>
          <p className={styles.paragraph}><strong>Email:</strong>flexibuilder@gmail.com</p>
        </section>
      </main>

      <footer className={styles.footerClass}>
        <p>&copy; {new Date().getFullYear()} NailMe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
