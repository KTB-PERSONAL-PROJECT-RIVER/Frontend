import React from 'react';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <main className="ml-64 p-10 w-full max-w-5xl mx-auto">{children}</main>
    </div>
  );
}
