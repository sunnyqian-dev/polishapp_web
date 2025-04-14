// app/terms/page.tsx
"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <Head>
        <title>Terms of Service - NailMe</title>
        <meta name="description" content="Terms of Service for NailMe AI Nail Design App" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-24 left-8 w-10 h-10 rounded-full bg-pink-200 bg-opacity-40"></div>
        <div className="absolute bottom-32 right-12 w-16 h-16 rounded-full bg-purple-200 bg-opacity-30"></div>
        <div className="absolute top-40 right-10 w-6 h-6 rounded-full bg-cyan-200 bg-opacity-40"></div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-3xl font-bold text-black tracking-wider">NailMe</h1>
            </Link>
          </div>
          <div>
            <Link href="/">
              <button className="bg-pink-500 bg-opacity-70 text-black font-semibold px-5 py-2 rounded-full flex items-center hover:bg-opacity-80 transition">
                <span className="mr-2 text-pink-700">✨</span>
                Back to Home
              </button>
            </Link>
          </div>
        </nav>

        {/* Content Section */}
        <section className="relative px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-3xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-4 text-sm">Last Updated: April 11, 2025</p>
            
            <div className="prose prose-pink max-w-none">
              <p className="mb-6">
                Welcome to NailMe! These Terms of Service ("Terms") govern your use of the NailMe mobile application and website (collectively, the "Service"), operated by NailMe Inc. ("we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By creating an account, downloading the app, or otherwise accessing or using our Service, you agree to these Terms. If you are using the Service on behalf of an organization, you are agreeing to these Terms for that organization and promising that you have the authority to bind that organization to these Terms.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Account Registration</h2>
              <p className="mb-6">
                To use certain features of the Service, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding the password that you use to access the Service. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. User Content</h2>
              <p className="mb-6">
                Our Service allows you to upload, store, and share content, including photos of your nails ("User Content"). You retain ownership of any intellectual property rights that you hold in that User Content. By uploading User Content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise use your User Content for the purposes of operating, developing, providing, and improving the Service.
              </p>
              <p className="mb-6">
                You represent and warrant that: (1) you own the User Content posted by you on or through the Service or otherwise have the right to grant the rights and licenses set forth in these Terms; and (2) the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. AI-Generated Content</h2>
              <p className="mb-6">
                The Service uses artificial intelligence to generate nail designs based on user inputs. The AI-generated designs ("AI Content") are provided for inspiration and reference purposes only. While we strive to create unique designs, we cannot guarantee that AI Content will be entirely original or free from similarity to existing designs.
              </p>
              <p className="mb-6">
                You may use the AI Content for personal purposes. However, if you are a nail technician or business using AI Content professionally, you are responsible for ensuring that your use of such designs does not infringe on any third-party intellectual property rights.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Prohibited Uses</h2>
              <p className="mb-6">You agree not to use the Service:</p>
              <ul className="list-disc ml-8 mb-6">
                <li className="mb-2">In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li className="mb-2">To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                <li className="mb-2">To impersonate or attempt to impersonate NailMe, a NailMe employee, another user, or any other person or entity</li>
                <li className="mb-2">To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm NailMe or users of the Service</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Subscription and Billing</h2>
              <p className="mb-6">
                Some aspects of the Service may be provided for a fee. You agree to pay all fees in accordance with the fees, charges, and billing terms in effect at the time a fee is due and payable. You are responsible for paying all applicable taxes associated with your use of the Service. All payment obligations are non-cancelable and fees paid are non-refundable, except as expressly set forth in these Terms.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. Termination</h2>
              <p className="mb-6">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or delete your account through the app settings.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="mb-6">
                In no event shall NailMe, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">9. Disclaimer</h2>
              <p className="mb-6">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">10. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">11. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us at support@nailme.app.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white bg-opacity-5 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-10">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">NailMe</h3>
                <p className="text-black opacity-70">
                  Transform your nails with the power of AI. The most magical nail design experience.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-black mb-4">Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/#features" className="text-black opacity-70 hover:opacity-100">Features</Link></li>
                  <li><Link href="/#how-it-works" className="text-black opacity-70 hover:opacity-100">How It Works</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-black mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="text-black opacity-70 hover:opacity-100">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="text-black opacity-70 hover:opacity-100">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-black mb-4">Contact</h4>
                <p className="text-black opacity-70">
                  Questions? Reach out to us at<br />
                  <a href="mailto:support@nailme.app" className="hover:underline">support@nailme.app</a>
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-black border-opacity-20 flex flex-col md:flex-row justify-between items-center">
              <p className="text-black opacity-70 mb-4 md:mb-0">
                © {new Date().getFullYear()} NailMe. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-black opacity-70 hover:opacity-100">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-black opacity-70 hover:opacity-100">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-black opacity-70 hover:opacity-100">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}