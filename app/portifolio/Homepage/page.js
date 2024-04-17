"use client";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
import Footer from "./footer";

const Page = () => {
  const { user } = useUserAuth();

  useEffect(() => {
    if (!user) {
      console.log("User not logged in. Redirecting to login page...");
    }
  }, [user]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element not found:", id);
    }
  };

  if (!user) {
    return (
      <main className="p-5 min-h-screen bg-blue-50 flex justify-center items-center">
        <div>
          <h1 className="text-xl font-bold text-center text-blue-800">
            Oops!!! Please log in to access my portfolio.
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="p-5 min-h-screen bg-blue-50">
      <nav className="fixed z-10 top-0 left-0 right-0 flex justify-between items-center p-3 bg-white shadow">
        <h1 className="text-3xl font-bold text-black cursor-pointer" onClick={() => scrollTo('home')}>
          P.
        </h1>
        <div className="flex">
          <button onClick={() => scrollTo('home')} className="mx-2 text-gray-800 hover:text-black active:text-orange-500">Home</button>
          <button onClick={() => scrollTo('about')} className="mx-2 text-gray-800 hover:text-black active:text-orange-500">About</button>
          <button onClick={() => scrollTo('contact')} className="mx-2 text-gray-800 hover:text-black active:text-orange-500">Contact</button>
          {/* I haven't made my resume on document file when will do then will upload! */}
          <a href="/resume.pdf" className="mx-2 text-gray-800 hover:text-black active:text-orange-500" download="Not-uploading-personal-reasons.pdf">
          Resume
          </a>
        </div>
      </nav>
      <div className="pt-16">
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Page;






