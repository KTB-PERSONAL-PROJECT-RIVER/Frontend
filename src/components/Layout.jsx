import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 font-sans min-h-screen sm:flex">
      <Sidebar />
      <main className="pt-4 pb-20 px-4 sm:ml-64 sm:p-10 w-full max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}
