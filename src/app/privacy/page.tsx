"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-cyan-200">
      <Head>
        <title>Privacy Policy - NailMe</title>
        <meta name="description" content="Privacy Policy for NailMe AI Nail Design App" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="relative overflow-hidden">
        {/* Decorative elements matching the magical nail theme */}
        <div className="absolute top-24 left-8 w-10 h-10 rounded-full bg-pink-200 bg-opacity-40"></div>
        <div className="absolute bottom-32 right-12 w-16 h-16 rounded-full bg-purple-200 bg-opacity-30"></div>
        <div className="absolute top-40 right-10 w-6 h-6 rounded-full bg-cyan-200 bg-opacity-40"></div>
        
        {/* Adding star decorations to match the image */}
        <div className="absolute top-60 left-20 text-yellow-300 text-xl">✦</div>
        <div className="absolute bottom-40 left-40 text-yellow-300 text-sm">✦</div>
        <div className="absolute top-80 right-30 text-yellow-300 text-lg">✦</div>
        <div className="absolute top-20 right-20 text-pink-300 text-sm">✦</div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">✨</span>
                <h1 className="text-3xl font-bold text-black tracking-wider">NailMe</h1>
              </div>
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-4 text-sm">Last Updated: April 11, 2025</p>
            <div className="prose prose-pink max-w-none">
              <p className="mb-6">
                At NailMe, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect several types of information from and about users of our Service, including:</p>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.1 Personal Data</h3>
              <p className="mb-4">
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include:
              </p>
              <ul className="list-disc ml-8 mb-6">
                <li className="mb-2">Email address</li>
                <li className="mb-2">First name and last name</li>
                <li className="mb-2">Phone number</li>
                <li className="mb-2">Address, State, Province, ZIP/Postal code, City</li>
                <li className="mb-2">Cookies and Usage Data</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.2 Images and User Content</h3>
              <p className="mb-4">
                When you use our Service, we collect images of your nails that you upload for design purposes. These images are used to generate AI-powered nail designs and to improve our service.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">1.3 Usage Data</h3>
              <p className="mb-6">
                We may also collect information about how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected data for various purposes:</p>
              <ul className="list-disc ml-8 mb-6">
                <li className="mb-2">To provide and maintain our Service</li>
                <li className="mb-2">To notify you about changes to our Service</li>
                <li className="mb-2">To provide customer support</li>
                <li className="mb-2">To gather analysis or valuable information so that we can improve our Service</li>
                <li className="mb-2">To monitor the usage of our Service</li>
                <li className="mb-2">To detect, prevent, and address technical issues</li>
                <li className="mb-2">To process and generate AI nail designs based on your uploaded images</li>
                <li className="mb-2">To train and improve our AI algorithms</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. AI Training and Image Use</h2>
              <p className="mb-6">
                The nail images you upload may be used to train our AI models to improve design generation. By using our Service, you grant us permission to use these images for improving our AI technology. If you do not want your images to be used for AI training, you can opt out in your account settings or by contacting us directly.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Data Retention</h2>
              <p className="mb-6">
                We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p className="mb-6">
                We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">5. Disclosure of Data</h2>
              <p className="mb-4">We may disclose your Personal Data in the following situations:</p>
              <ul className="list-disc ml-8 mb-6">
                <li className="mb-2">To service providers that perform services for us</li>
                <li className="mb-2">To comply with a legal obligation</li>
                <li className="mb-2">To protect and defend the rights or property of NailMe</li>
                <li className="mb-2">To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li className="mb-2">To protect the personal safety of users of the Service or the public</li>
                <li className="mb-2">To protect against legal liability</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">6. Data Security</h2>
              <p className="mb-6">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">7. Your Data Protection Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain data protection rights. NailMe aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
              </p>
              <p className="mb-4">
                If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
              </p>
              <p className="mb-6">
                In certain circumstances, you have the following data protection rights:
              </p>
              <ul className="list-disc ml-8 mb-6">
                <li className="mb-2">The right to access, update, or delete the information we have on you.</li>
                <li className="mb-2">The right of rectification - the right to have your information corrected if it is inaccurate or incomplete.</li>
                <li className="mb-2">The right to object - the right to object to our processing of your Personal Data.</li>
                <li className="mb-2">The right of restriction - the right to request that we restrict the processing of your personal information.</li>
                <li className="mb-2">The right to data portability - the right to be provided with a copy of your Personal Data in a structured, machine-readable format.</li>
                <li className="mb-2">The right to withdraw consent - the right to withdraw your consent at any time where NailMe relied on your consent to process your personal information.</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">8. Children's Privacy</h2>
              <p className="mb-6">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">10. California Privacy Rights</h2>
              <p className="mb-6">
                If you are a California resident, you have the right to request information about the personal information we've collected from you, request the deletion of your personal information, and not be discriminated against for exercising your privacy rights. To exercise these rights, please contact us.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">11. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="mb-1">By email: privacy@nailme.app</p>
              <p className="mb-1">By mail: NailMe Inc., 123 AI Way, San Francisco, CA 94105</p>
            </div>
          </div>
        </section>

        {/* Footer */}
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