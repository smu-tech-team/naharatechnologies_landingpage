"use client";

import { useState } from 'react'
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {  ArrowLeft } from "lucide-react";


const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-12" id="contact">
      <div className="mb-6">
        <Link href="/">
          <button className="flex items-center gap-2 text-red-800 hover:text-orange-800 font-semibold transition">
            <ArrowLeft size={18} /> Back to Home
          </button>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-red-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Contact Info + WhatsApp */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              We’d love to hear from you. Whether you have a question, feedback,
              or just want to say hi — feel free to reach out!
            </p>

            <div className="flex items-start gap-4">
              <MapPin className="text-red-800 w-6 h-6" />
              <p className="text-gray-700">
                Nahara Technologies HQ, <br /> No. 10 Innovation Street, Lagos,
                Nigeria.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-red-800 w-6 h-6" />
              <a
                href="mailto:hello@smutechteam.com"
                className="text-gray-700 hover:underline"
              >
                hello@naharatechnologies.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-red-800 w-6 h-6" />
              <a
                href="tel:+2348123456789"
                className="text-gray-700 hover:underline"
              >
                +234 9078781812
              </a>
            </div>

            <a
              href="https://wa.me/2349078781812?text=Hello%20SMU%20Tech%20Team!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              💬 Chat with us on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-red-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
              <button
                type="submit"
                className="flex items-center gap-2 bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="w-full h-[400px] mt-16 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <iframe
            title="SMU Tech Team Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.7373901058486!2d3.3500003153542175!3d6.524379024885024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d09c5f1c3f1%3A0x1b6c676429733be2!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1616166161616!5m2!1sen!2sng"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-none"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
