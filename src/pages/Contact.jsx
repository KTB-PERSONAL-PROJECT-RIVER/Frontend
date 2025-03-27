import React from 'react';
import { Mail, Github, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md space-y-4">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <div className="flex items-center space-x-2 text-lg text-gray-700">
        <Mail size={20} />
        <span>gd12091@gmail.com</span>
      </div>

      <div className="flex items-center space-x-2 text-lg text-gray-700">
        <Github size={20} />
        <a
          href="https://github.com/shinnyriver"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          github.com/shinnyriver
        </a>
      </div>

      <div className="flex items-center space-x-2 text-lg text-gray-700">
        <Instagram size={20} />
        <a
          href="https://instagram.com/_shinny.river"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 underline"
        >
          instagram.com/_shinny.river
        </a>
      </div>
    </section>
  );
}
