import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200 p-10">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Hey Guys I am Preetinder!</h1>
      <Link href="./portifolio" className="bg-blue-400 mb-3 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition duration-300 text-center">
          Please click here to open my Portfolio
      </Link>
      <div className="bg-white p-4 shadow-lg rounded-lg max-w-md w-full text-center text-black">
       <p className='text-xl font-semibold'>I trust you guys but still you have to give a security check!</p>
      </div>
    </main>
  );
}
 