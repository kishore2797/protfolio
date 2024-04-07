import React from 'react'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { profile_img } from "../assets/images"
const Home = () => {
  return (
    <section className='max-container h-full'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative'>
          <img
            src={profile_img}
            alt="Tanuja portrait"
            width="192"
            height="192"
            // quality="80"
            priority="true"
            className='h-24 w-24 rounded-full object-cover border-[.35rem] border-white shadow-xl'
          />
          <span className='absolute bottom-0 right-0 text-4xl'>
            👋
          </span>
        </div>
        <h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Tanuja</span> I'm a{" "}
          <span className="font-bold">backend developer</span> with{" "}
          <span className="font-bold">1.3+ years</span> of experience. I enjoy
          crafting <span className="italic">RESTful APIs and microservices</span>. My focus is{" "}
          <span className="underline">Spring Boot & Java</span>.
        </h1>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            to="/contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {

            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="ms-5 group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
            href="/CV.pdf"
            download="CV"
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="ms-5 bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlac"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          {/* <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack "
            href="https://github.com"
            target="_blank"
          >
            <FaGithubSquare />
          </a> */}
        </div>
      </div>
    </section>
  )
}

export default Home
