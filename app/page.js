import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200 p-10">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Submission to my Final Project</h1>
      <Link href="./portifolio" className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300 text-center">
          Please click here to open my project
      </Link>
      <div className="bg-white p-4 shadow-lg rounded-lg max-w-md w-full text-center text-black">
       <p className='text-xl font-semibold'>Southern Alberta Institute of Technology</p>
       <p className='text-l text-grey-600'>School of Advanced Digital Technology</p>
       <p className="font-bold text-lg">Submitted to: Akinbode Olusola</p>
        <p className="font-bold text-lg">Submitted by:</p>
        <p>Name: Preetinder Singh</p>
        <p>ID: 000913461</p>
        <p>Subject: Web Development (CPRG306)</p>
        <p>Course: Software Development Semester 3</p>
      </div>
    </main>
  );
}
