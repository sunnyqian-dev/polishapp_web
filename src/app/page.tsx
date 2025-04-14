"use client";

import { useState } from 'react';

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">
      <main className="relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-24 left-8 w-10 h-10 rounded-full bg-pink-200 bg-opacity-40"></div>
        <div className="absolute bottom-32 right-12 w-16 h-16 rounded-full bg-purple-200 bg-opacity-30"></div>
        <div className="absolute top-40 right-10 w-6 h-6 rounded-full bg-cyan-200 bg-opacity-40"></div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/app_logo.jpg"
              alt="NailMe Logo"
              className="w-16 h-16 object-contain mr-4"
            />
          </div>
          <div className="hidden md:flex space-x-6 text-black font-medium">
            <a href="#features" className="hover:text-pink-600 transition">Features</a>
            <a href="#how-it-works" className="hover:text-pink-600 transition">How It Works</a>
          </div>
          <div>
            <button className="bg-pink-500 bg-opacity-70 text-black font-semibold px-5 py-2 rounded-full flex items-center hover:bg-opacity-80 transition">
              <span className="mr-2 text-pink-700">✨</span>
              Download App
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative px-6 pt-12 pb-24 md:pt-20 md:pb-32 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 md:mb-24">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-pink-200 bg-opacity-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                ✨ Magical AI Nail Designer ✨
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
                Transform Your Nails with AI-Enhanced Designs! Upload a photo and let our AI create stunning nail art just for you.
              </p>
              
              <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
                <a
                  href="https://apps.apple.com/app/6743779765"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-64 py-4 px-8 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full text-black font-bold text-lg shadow-md hover:from-pink-400 hover:to-pink-600 transition duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.3-37.3 16.4-65.5 51.4-86.4-19.3-28.2-48.7-44.1-89.2-47-37.3-2.8-77.5 22-91.7 22-14.6 0-50.2-21.4-77.5-21.4-56.7.9-117.3 47.4-117.3 135.7 0 29.8 5.6 59.7 16.8 89.2 15.1 39.6 70.1 135.8 127.3 133.8 25-.6 43-17.8 75.6-17.8 31.7 0 48.2 17.8 76.1 17.8 57.9-1 110.9-87.2 125.7-126.7-79.6-37.3-74.4-110.2-74.2-118.2zM261.6 79c17.2-20.8 28.6-49.7 25.4-79.1-24.6.9-54.4 16.3-71.9 37.1-15.8 18.3-29.6 47.5-25.8 75.3 27.4 2.1 55.1-14 72.3-33.3z"/>
                    </svg>
                    iOS App
                  </button>
                </a>
              </div>
            </div>

            {/* App mockup placeholder */}
            <div className="relative mx-auto max-w-3xl">
              <div className="w-full h-96 md:h-[500px] bg-white bg-opacity-70 rounded-3xl flex items-center justify-center border-2 border-pink-200 shadow-lg">
                <div className="text-gray-700">
                  {/* Placeholder for phone mockup */}
                  <p className="text-xl font-medium mb-2">Place app mockup image here</p>
                </div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute -right-4 md:right-8 top-1/4 w-40 md:w-60 p-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl border border-pink-200 shadow-md transform rotate-3">
                <div className="w-full h-20 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg mb-3"></div>
                <p className="text-gray-800 text-sm md:text-base font-medium">✨ Unicorn Sparkle Design</p>
              </div>
              
              <div className="absolute -left-4 md:left-8 bottom-1/4 w-40 md:w-60 p-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl border border-pink-200 shadow-md transform -rotate-3">
                <div className="w-full h-20 bg-gradient-to-r from-purple-200 to-cyan-200 rounded-lg mb-3"></div>
                <p className="text-gray-800 text-sm md:text-base font-medium">✨ Mystic Ocean Nails</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-white bg-opacity-60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                ✨ Magical Features ✨
              </h2>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                Discover what makes NailMe the ultimate AI nail design experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-2xl border border-pink-200 backdrop-blur-sm shadow-md">
                <div className="w-16 h-16 rounded-full bg-pink-200 bg-opacity-50 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Photo Analysis</h3>
                <p className="text-gray-800">
                  Upload your nail photos and our AI will analyze them to create personalized designs tailored to your style.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl border border-purple-200 backdrop-blur-sm shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-200 bg-opacity-50 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Designs</h3>
                <p className="text-gray-800">
                  Generate unlimited unique nail art designs based on your preferences, nail shape, and current trends.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-6 rounded-2xl border border-cyan-200 backdrop-blur-sm shadow-md">
                <div className="w-16 h-16 rounded-full bg-cyan-200 bg-opacity-50 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trend Inspiration</h3>
                <p className="text-gray-800">
                  Get inspired by the latest nail trends and styles, with AI recommendations based on what's popular.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                ✨ How The Magic Happens ✨
              </h2>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                Transform your nails in just a few simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-pink-200 bg-opacity-50 flex items-center justify-center mb-6 border-2 border-pink-300">
                  <span className="text-pink-700 text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Take a Photo</h3>
                <p className="text-gray-800 text-center">
                  Snap a picture of your nails or choose one from your gallery.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-purple-200 bg-opacity-50 flex items-center justify-center mb-6 border-2 border-purple-300">
                  <span className="text-purple-700 text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">AI Analysis</h3>
                <p className="text-gray-800 text-center">
                  Our magical AI analyzes your nail shape and suggests perfect designs.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-cyan-200 bg-opacity-50 flex items-center justify-center mb-6 border-2 border-cyan-300">
                  <span className="text-cyan-700 text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Get Designs</h3>
                <p className="text-gray-800 text-center">
                  View AI-generated designs and save your favorites for your next nail appointment.
                </p>
              </div>
            </div>
            
            {/* App showcase placeholder */}
            <div className="mt-20 relative mx-auto max-w-4xl">
              <div className="w-full h-64 md:h-96 bg-white bg-opacity-70 rounded-3xl flex items-center justify-center border-2 border-pink-200 shadow-lg">
                <div className="text-gray-700">
                  {/* Placeholder for app usage showcase */}
                  <p className="text-xl font-medium mb-2">Place app workflow showcase here</p>
                  <p className="opacity-70">(Step-by-step screens of the app in action)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
                ✨ What Users Say ✨
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Hear from our magical community of nail enthusiasts
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white bg-opacity-10 p-6 rounded-2xl border border-white border-opacity-20 backdrop-blur-sm shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center mr-4">
                    <span className="font-bold">JM</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Jessica M.</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="opacity-90">
                  "This app is absolutely magical! I'm always getting compliments on my nail designs now. The AI somehow knows exactly what styles suit me best!"
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white bg-opacity-10 p-6 rounded-2xl border border-white border-opacity-20 backdrop-blur-sm shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center mr-4">
                    <span className="font-bold">AT</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Alex T.</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="opacity-90">
                  "As a nail technician, this app has been a game changer for my business. My clients love browsing through custom designs created just for them!"
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white bg-opacity-10 p-6 rounded-2xl border border-white border-opacity-20 backdrop-blur-sm shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-pink-400 flex items-center justify-center mr-4">
                    <span className="font-bold">LW</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Lisa W.</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="opacity-90">
                  "I'm obsessed with NailMe! The unicorn-themed designs are absolutely gorgeous, and it's so fun to see what the AI comes up with for my nail shape."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-500/40 via-purple-500/40 to-cyan-500/40 p-10 md:p-16 rounded-3xl border-2 border-white border-opacity-20 backdrop-blur-sm shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-md">
              ✨ Ready for Magical Nails? ✨
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
              Download the NailMe app today and transform your nail game with our magical AI designer!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a
                href="https://apps.apple.com/app/6743779765"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="py-4 px-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full font-bold text-lg shadow-lg border-2 border-white border-opacity-40 flex items-center justify-center hover:from-pink-500 hover:to-pink-700 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.3-37.3 16.4-65.5 51.4-86.4-19.3-28.2-48.7-44.1-89.2-47-37.3-2.8-77.5 22-91.7 22-14.6 0-50.2-21.4-77.5-21.4-56.7.9-117.3 47.4-117.3 135.7 0 29.8 5.6 59.7 16.8 89.2 15.1 39.6 70.1 135.8 127.3 133.8 25-.6 43-17.8 75.6-17.8 31.7 0 48.2 17.8 76.1 17.8 57.9-1 110.9-87.2 125.7-126.7-79.6-37.3-74.4-110.2-74.2-118.2zM261.6 79c17.2-20.8 28.6-49.7 25.4-79.1-24.6.9-54.4 16.3-71.9 37.1-15.8 18.3-29.6 47.5-25.8 75.3 27.4 2.1 55.1-14 72.3-33.3z"/>
                  </svg>
                  Download for iOS
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white bg-opacity-5 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-10">
            <div className="text-center">
            <h3 className="text-xl font-bold mb-4">NailMe</h3>
            <p className="opacity-70">
              Transform your nails with the power of AI. The most magical nail design experience.
            </p>
          </div>
              
              <div>
                <h4 className="text-lg font-bold  mb-4">Links</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className=" opacity-70 hover:opacity-100">Features</a></li>
                  <li><a href="#how-it-works" className=" opacity-70 hover:opacity-100">How It Works</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold  mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className=" opacity-70 hover:opacity-100">About Us</a></li>
                  <li><a href="#" className=" opacity-70 hover:opacity-100">Careers</a></li>
                  <li><a href="#" className=" opacity-70 hover:opacity-100">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold   mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="/terms" className=" opacity-70 hover:opacity-100">Terms of Service</a></li>
                  <li><a href="/privacy" className=" opacity-70 hover:opacity-100">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white border-opacity-20 flex flex-col md:flex-row justify-between items-center">
              <p className="opacity-70 mb-4 md:mb-0">
                © {new Date().getFullYear()} NailMe. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="opacity-70 hover:opacity-100">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="opacity-70 hover:opacity-100">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="opacity-70 hover:opacity-100">
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