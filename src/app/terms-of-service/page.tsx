// src/app/terms-of-service/page.tsx

import Head from 'next/head';
import styles from './TermsOfService.module.css';

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terms of Service</title>
        <meta name="description" content="NailMe Terms of Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.date}>Effective Date: 2025-01-01</p>

        <section>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.paragraph}>
            By accessing or using the NailMe app ("App"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, you must not use the App.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>2. Changes to Terms</h2>
          <p className={styles.paragraph}>
            We reserve the right to modify these Terms at any time. When we make changes, we will update the effective date at the top of this page. Your continued use of the App after the changes are made constitutes your acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>3. User Accounts</h2>
          <p className={styles.paragraph}>
            To use certain features of the NailMe App, you may need to create a user account. You agree to provide accurate and complete information during registration and keep your account information up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>4. Use of the App</h2>
          <p className={styles.paragraph}>
            You agree to use the NailMe App only for lawful purposes and in accordance with these Terms. You are prohibited from using the App in any way that could damage, disable, or impair the App or interfere with other users' ability to use the App.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>5. In-App Purchases</h2>
          <p className={styles.paragraph}>
            The NailMe App offers In-App Purchases (IAP) that allow you to unlock additional features, content, or services. All payments for In-App Purchases are processed through Apple’s App Store and are subject to their terms and conditions. You agree to pay all applicable fees for any IAP you choose to purchase.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>6. User Content</h2>
          <p className={styles.paragraph}>
            You retain ownership of any content you submit, upload, or otherwise make available through the App. By submitting content, you grant NailMe a worldwide, royalty-free, sublicensable, and transferable license to use, display, and modify the content for the purposes of providing and improving the App.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>7. Privacy and Data Collection</h2>
          <p className={styles.paragraph}>
            Your use of the NailMe App is also governed by our Privacy Policy. By using the App, you consent to the collection and use of your data in accordance with our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>8. Termination</h2>
          <p className={styles.paragraph}>
            We reserve the right to suspend or terminate your access to the NailMe App at our sole discretion, without notice, for any reason, including but not limited to a violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>9. Disclaimers and Limitation of Liability</h2>
          <p className={styles.paragraph}>
            The NailMe App is provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that the App will be error-free, secure, or available at all times. To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the App.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>10. Governing Law</h2>
          <p className={styles.paragraph}>
          These Terms shall be governed by and construed in accordance with the laws of the Province of Saskatchewan, Canada, without regard to its conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>11. Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className={styles.paragraph}><strong>Email:</strong>flexibuilder@gmail.com</p>
        </section>
      </main>

      <footer className={styles.footerClass}>
        <p>&copy; {new Date().getFullYear()} FlexiBuilder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;
