import React from "react";
import Footer from "../Footer";
import About from "../Home/About";
import About2 from "../Home/About2";
import Categories from "../Home/Categories";
import Contact from "../Home/Contact";
import Hero from "../Home/Hero";
import Testimonials from "../Home/Testimonials";
import { useEffect, useState } from 'react'
import PreLoader from '../Home/PreLoader';


const Home = () => {
  const [isVisible, setIsVisible] = useState(false)


  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])


  return (
    <>
      <PreLoader />
      <div className="bg-[#1A1A1A] font-Raleway">
        <Hero />
        <Categories />
        <About />

        {/* <About2 /> */}
        <Testimonials />
        <Contact />

        <Footer />

      </div>
      <div className="fixed bottom-8 right-8">
        <button
          type="button"
          onClick={scrollToTop}
          className={`${isVisible ? 'opacity-100' : 'opacity-0'} w-12 h-12 bg-slate-100 hover:bg-slate-300 flex items-center justify-center  rounded-full`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="#000000" />
          </svg>        </button>
      </div >
    </>
  );
};

export default Home;
