"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const sendEmail = () => {
    // EmailJS configuration
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        'service_bheqx1f', // Replace with your EmailJS service ID
        'template_leo7mlc', // Replace with your EmailJS template ID
        templateParams,
        'lvvNPA0jJuwPZxuvY' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setSuccess(true); // Display success message
          setName(''); // Clear form fields
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Failed to send email. Error:', error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
            <span className="font-mono text-gray-600 dark:text-gray-400">05.</span>
            Get In Touch
          </h2>
          <div className="h-px bg-gray-400 dark:bg-gray-600 flex-grow"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block border-2 border-gray-900 dark:border-white px-6 py-3 rounded text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
        
        {success && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md flex items-center justify-between">
            <span>Message sent successfully!</span>
            <button
              onClick={() => setSuccess(false)}
              className="ml-4 text-white font-bold focus:outline-none hover:text-gray-200"
            >
              ×
            </button>
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
              required
            ></textarea>
          </div>
          <button
            type="button"
            onClick={sendEmail}
            className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Send Message
          </button>
        </div>
      </motion.div>
    </section>
  );
}
