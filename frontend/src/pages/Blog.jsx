import React from "react";

import {
  FaArrowRight,
  FaClock,
} from "react-icons/fa";

import imga from "../assets/blog1.jpg";
import imgb from "../assets/blog2.jpg";
import imgc from "../assets/blog3.jpg";
import imgd from "../assets/blog4.jpg";
import imge from "../assets/blog5.jpg";
import imgf from "../assets/blog6.jpg";
import imgg from "../assets/blog7.jpg";
import imgh from "../assets/blog8.jpg";
import imgi from "../assets/blog9.jpg";
import imgj from "../assets/blog10.jpg";
import imgk from "../assets/blog11.webp";
import imgl from "../assets/blog12.jpg";

const Blog = () => {

  const blogs = [
    {
      id: 1,
      img: imga,
      title: "Movies You Must Watch With Your Kids in This Summer Vacation 2024",
      date: "May 17 2024",
      category: "Parenting",
    },

    {
      id: 2,
      img: imgb,
      title: "Ahmedabad’s Top 10 Places to Visit This Summer Vacation With Your Kids",
      date: "May 17 2024",
      category: "Travel",
    },

    {
      id: 3,
      img: imgc,
      title: "Republic Day 2024: 5 Key Lessons To Teach Your Kids",
      date: "May 17 2024",
      category: "Education",
    },

    {
      id: 4,
      img: imgd,
      title: "5 Parenting New Year Resolutions You Can Keep in 2024",
      date: "May 17 2024",
      category: "Parenting",
    },

    {
      id: 5,
      img: imge,
      title: "Children’s Bedtime Routines: What to Do and What to Avoid?",
      date: "May 17 2024",
      category: "Health",
    },

    {
      id: 6,
      img: imgf,
      title: "How to Keep Children Safe While Enjoying Firecrackers This Diwali?",
      date: "May 17 2024",
      category: "Safety",
    },

    {
      id: 7,
      img: imgg,
      title: "7 Extracurricular Activities To Do With Your Kids At Home",
      date: "May 17 2024",
      category: "Activities",
    },

    {
      id: 8,
      img: imgh,
      title: "How do I Make My Kid Love Eating Vegetables?",
      date: "May 17 2024",
      category: "Health",
    },

    {
      id: 9,
      img: imgi,
      title: "Why Do Babies Choke? and How to Prevent It?",
      date: "May 17 2024",
      category: "Parenting",
    },

    {
      id: 10,
      img: imgj,
      title: "Why and How Playtime is Beneficial for Child Development?",
      date: "May 17 2024",
      category: "Learning",
    },

    {
      id: 11,
      img: imgk,
      title: "Work Life Balance 101 – Parents Edition",
      date: "May 17 2024",
      category: "Lifestyle",
    },

    {
      id: 12,
      img: imgl,
      title: "15 Super Fun Rainy Day Activities for Kids of All Ages",
      date: "May 17 2024",
      category: "Activities",
    },
  ];

  const cardStyle =
    "bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group";

  const btnStyle =
    "inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition";

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* HERO */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Parenting & Learning
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Our Latest Blog Articles
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore parenting insights, educational activities and fun learning
            ideas for growing children.
          </p>

        </div>

      </section>

      {/* BLOG GRID */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {blogs.map((blog) => (

              <div key={blog.id} className={cardStyle}>

                {/* IMAGE */}

                <div className="overflow-hidden">

                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />

                </div>

                {/* CONTENT */}

                <div className="p-8">

                  {/* CATEGORY */}

                  <span className="inline-block bg-slate-100 text-sm px-4 py-2 rounded-full mb-5">
                    {blog.category}
                  </span>

                  {/* TITLE */}

                  <h2 className="text-2xl font-bold text-slate-900 leading-snug min-h-[90px]">
                    {blog.title}
                  </h2>

                  {/* META */}

                  <div className="flex items-center gap-3 mt-5 text-gray-500 text-sm">

                    <FaClock />

                    <span>{blog.date}</span>

                    <span>•</span>

                    <span>5 min read</span>

                  </div>

                  {/* BUTTON */}

                  <button className={`mt-8 ${btnStyle}`}>

                    Read More

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Blog;