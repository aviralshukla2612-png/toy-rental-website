import React from 'react'
import imga from '../assets/blog1.jpg';
import imgb from '../assets/blog2.jpg';
import imgc from '../assets/blog3.jpg';
import imgd from '../assets/blog4.jpg';
import imge from '../assets/blog5.jpg';
import imgf from '../assets/blog6.jpg';
import imgg from '../assets/blog7.jpg';
import imgh from '../assets/blog8.jpg';
import imgi from '../assets/blog9.jpg';
import imgj from '../assets/blog10.jpg';
import imgk from '../assets/blog11.webp';
import imgl from '../assets/blog12.jpg';

export const Blog = () => {

  const blog=[
    {
      id:1,
      img:imga,
      title:"Movies You Must Watch With Your Kids in This Summer Vacation 2024",
      date:"May 17 2024"
    },
     {
      id:2,
      img:imgb,
      title:" Ahmedabad’s Top 10 Places to Visit This Summer Vacation With Your Kids | 2024 Edition",
      date:"May 17 2024"
    },
     {
      id:3,
      img:imgc,
      title:"Republic Day 2024: 5 Key Lessons To Teach Your Kids",
      date:"May 17 2024"
    },
     {
      id:4,
      img:imgd,
      title:"5 Parenting New Year Resolutions You Can Keep in 2024",
      date:"May 17 2024"
    },
     {
      id:5,
      img:imge,
      title:"Children’s Bedtime Routines: What to Do and What to Avoid?",
      date:"May 17 2024"
    },
     {
      id:6,
      img:imgf,
      title:"How to Keep Children Safe While Enjoying Firecrackers This Diwali?",
      date:"May 17 2024"
    },
     {
      id:7,
      img:imgg,
      title:"7 Extracurricular Activities To Do With Your Kids At Home",
      date:"May 17 2024"
    },
     {
      id:8,
      img:imgh,
      title:"How do I Make My Kid Love Eating Vegetables?",
      date:"May 17 2024"
    },
     {
      id:9,
      img:imgi,
      title:"Why Do Babies Choke? and How to Prevent It?",
      date:"May 17 2024"
    },
     {
      id:10,
      img:imgj,
      title:"Why and How Playtime is Beneficial for the Child Development?",
      date:"May 17 2024"
    },
     {
      id:11,
      img:imgk,
      title:"Work Life Balance 101 – Parents Edition",
      date:"May 17 2024"
    },
     {
      id:12,
      img:imgl,
      title:"15 Super Fun Rainy Day Activities for Kids of All Ages",
      date:"May 17 2024"
    },
  ]
  return (
    <>
   
    <div className='bg-gray-100 py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {blog.map((blog)=>(
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={blog.img} alt={blog.title} className='w-full h-52 object-cover'/>
              <div className='p-6'>
                <h2 className='text-xl font-bold text-gray-800 mb-3 hover:text-red-700'>{blog.title}</h2>
                <p className="text-gray-500 text-sm mb-6 ">Posted <span className='text-green-700 hover:text-sky-700'>{blog.date}</span></p>
                <button className="bg-teal-500 hover:bg-red-600 text-white px-6 py-2 rounded-md ">READ MORE</button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}
