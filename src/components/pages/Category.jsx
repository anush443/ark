import React from "react";
import Navbar from "../Navbar/Navbar";

import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { NavLink } from "reactstrap";
import { projects } from "../../constants/projects"
import { formatTitle } from "../../utils/helpers"
import { useNavigate } from "react-router-dom";



const Category = () => {
  const location = useLocation();
  const studioName = location.pathname.split("/")[2];
  let navigate = useNavigate();
  const catProjects = projects?.filter(item => item.category === studioName)



  return (
    <>
      <Navbar custom={"bg-[#1A1A1A]"} />
      <section id="category" className="bg-[#1A1A1A] font-Raleway ">
        <div className="max-w-6xl mx-auto px-4 mb-32 text-[#acacad] md:px-0">
          {/* <img src="/backArrow.svg" /> */}
          <svg onClick={() => navigate(-1)} className="hover:fill-black cursor-pointer" width="35" height="35" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 27H40M14 27L24.4 17M14 27L24.4 37M52 27C52 40.8071 40.8071 52 27 52C13.1929 52 2 40.8071 2 27C2 13.1929 13.1929 2 27 2C40.8071 2 52 13.1929 52 27Z" stroke="#414141" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <h2 className="text-4xl  pt-12 uppercase pb-12 font-Raleway">
            {studioName} Studios
          </h2>
          {catProjects?.map((item, index) => (
            <div
              className={`flex flex-col  mb-12 space-y-16 md:flex-row  ${(index + 1) % 2 === 0 && "md:flex-row-reverse "
                }`}
              key={item.index}
            >
              <div className="w-full md:w-1/2 ">
                <div class="relative  overflow-hidden bg-no-repeat z-0">
                  <img
                    src={item?.images[0]?.url}
                    alt={`ark-designs-${item.title}`}
                    loading="lazy"
                    className="h-[565px] w-[512px] object-cover transition duration-[500ms] ease-in-linear hover:scale-105 delay-100"
                  />
                </div>
              </div>
              <div className="flex flex-col md:mr-12 space-y-6 md:space-x-0 ">
                <h3 className="text-3xl font-md  md:px-0">{formatTitle(item.title)}</h3>
                <p className="max-w-sm leading-relaxed text-[#6b6b6b]">{item.snippet}</p>
                <NavLink href={`${studioName}/${item.title}`} className="p-0">
                  <button className="w-40 px-4 py-2 bg-[#6a6a6a] text-black hover:bg-[#dbdada]">
                    View
                    <span className="ml-4">
                      <ArrowForwardOutlinedIcon />
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Category;
