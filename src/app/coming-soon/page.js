'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  // Upcoming challenges data
  const upcomingChallenges = [
    {
      title: 'Zero Waste Day',
      description: 'Go through an entire day without generating any disposable waste.',
      launchDate: 'June 15, 2024',
      points: 100,
      difficulty: 'Medium'
    },
    {
      title: 'Bike to Work Week',
      description: 'Commute to work or school by bicycle for an entire week.',
      launchDate: 'July 1, 2024',
      points: 250,
      difficulty: 'Hard'
    },
    {
      title: 'Meatless Monday',
      description: 'Eat vegetarian for an entire day.',
      launchDate: 'June 10, 2024',
      points: 75,
      difficulty: 'Easy'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Coming Soon to EcoSphere
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Get excited about these upcoming challenges and features! Be the first to participate when they launch.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Upcoming Challenges
        </h2>
        
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {upcomingChallenges.map((challenge, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {challenge.title}
                  </h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    challenge.difficulty === 'Easy' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : challenge.difficulty === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {challenge.description}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-white">{challenge.points}</span> points
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Launches: <span className="font-medium text-gray-900 dark:text-white">{challenge.launchDate}</span>
                  </div>
                </div>
                
                <button 
                  className="w-full mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md cursor-not-allowed"
                  disabled
                >
                  Notify Me When Available
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">
          Upcoming Features
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6 mb-12">
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Real-time Ride Sharing</p>
                <p className="text-gray-600 dark:text-gray-300">Connect with nearby eco-conscious commuters for carpooling and reduced emissions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Carbon Footprint Calculator</p>
                <p className="text-gray-600 dark:text-gray-300">Advanced analytics to track and reduce your personal carbon emissions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 text-green-500 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Community Marketplace</p>
                <p className="text-gray-600 dark:text-gray-300">Buy, sell, or trade sustainable products and services with other EcoSphere users.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 