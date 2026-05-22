import React, { useState, useEffect, useRef } from "react";

import imga from "../assets/Banner1-1.webp";
import imgb from "../assets/Banner2.webp";
import imgc from "../assets/Banner-2.jpg";
import imgd from "../assets/Banner-3.jpg";
import imge from "../assets/kid.jpg";
import imgf from "../assets/toys.png";
import imgg from "../assets/return.png";
import imgh from "../assets/gift.png";
import imgi from "../assets/offer1.png";
import imgj from "../assets/offer2.png";
import imgk from "../assets/offer3.png";
import imgl from "../assets/benefit2.png";
import imgm from "../assets/benefit1.png";
import imgn from "../assets/benefit3.png";
import imgo from '../assets/blog1.jpg';
import imgp from '../assets/blog2.jpg';
import imgq from '../assets/blog3.jpg';
import imgr from '../assets/brand1.png';
import imgs from '../assets/brand2.jpg';
import imgt from '../assets/brand3.jpg';
import imgu from '../assets/brand4.jpg';
import imgv from '../assets/brand5.png';
import imgw from '../assets/brand6.png';
import imgx from '../assets/brand7.png';
import { FaChevronLeft }from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./Home.css";
import { GiBearFace } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineRepeat } from "react-icons/md";
import { Games } from "./Games";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import board from "../assets/board.png";
import puzzle from "../assets/puzzle.jpg";
import card from "../assets/card-01.png";
import floor from "../assets/floor.png";
import fun from "../assets/fun.png";
import block from "../assets/Blocks.png";
import rider from "../assets/riders.png";
import stem from "../assets/Stem.png";
import { useNavigate } from "react-router-dom";


const data = [
  {img: board, name: "Board Games"},
  {img: puzzle, name: "Puzzle Games"},
  {img: card, name: "Card Games"},
  {img: floor, name: "Floor Games"},
  {img: fun, name: "Fun Games"},
  {img: rider, name: "Riding Games"},
  {img: stem, name: "STEM Games"},
  {img: block, name: "Building Games"},
  
]
const images = [imga, imgb, imgc, imgd];



const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

 const navigate = useNavigate();
  const offer=[
    {
      id:1,
      img:imgi,
      title:"TOYS",
      description:"A Toy is an item that is generally used for children's play. Playing with toys is supposed to be an enjoyable means of training young children for life in society. Toys not only amuse, but also stir up ones imagination, stimulate creativity, improve power of observation & concentration.",
    },
      {
      id:2,
      img:imgj,
      title:"GAMES",
      description:"A Game is a structured form of play, usually undertaken for enjoyment and sometimes used as an educational tool. Key components of games are goals, rules, challenge, and interaction. Games generally involve mental or physical stimulation, and often both",
    },
      {
      id:3,
      img:imgk,
      title:"BOOKS",
      description:"Books are a Children's Best Friend, reading books helps kids gain knowledge easily. So it's better to start early, in order to make reading a habit rather than just a pastime. Reading not only develops language and critical thinking but also promotes independent learning.",
    },
  ]

 const blog=[
        {
          id:1,
          img:imgo,
          title:"Movies You Must Watch With Your Kids in This Summer Vacation 2024",
          date:"May 17 2024"
        },
         {
          id:2,
          img:imgp,
          title:" Ahmedabad’s Top 10 Places to Visit This Summer Vacation With Your Kids | 2024 Edition",
          date:"May 17 2024"
        },
         {
          id:3,
          img:imgq,
          title:"Republic Day 2024: 5 Key Lessons To Teach Your Kids",
          date:"May 17 2024"
        },
   
  ]
 
const review=[
  {
    name:"-Neha Samdani",
    role:"Customer",
    text:"___ has surpassed my expectations on all levels.Your product ideas have helped my company grow in leaps and bounds. Your professionalism, ease in working together and genuine interest in my requirements have been greatly appreciated.",

  },
  {
    name:"-Shaily Shah",
    role:"Customer",
    text:"___ I am very pleased with your customer service. Your team has excellent communication skills and a quick response and turnaround time. Top most work quality.",

  },
    {
    name:"-Smita Sinha",
    role:"Customer",
    text:"___ have been a long-term supplier of ours and are a delight to work with. They are professional, responsive and very effective at what they do. They are very keenly focused on our needs and are always flexible in meeting our requirements. I would highly recommend them.",

  },
    {
    name:"-Jignesh Patel",
    role:"Customer",
    text:"We have worked with ___ for a sufficient time now and found them to be a great business partner. They are quick to revert and offer high quality and reliable products and service. I would not hesitate to recommend them.",

  },
    {
    name:"-Nikita Raval",
    role:"Customer",
    text:"___ bring the top level of professionalism to the products and services they offer. They have been particularly cooperative on product needs with high levels of complexity. They always receive every query with a smile and sincerely go the extra mile to be of help.",


  },
    {
    name:"-Krishnan Reddy",
    role:"Customer",
    text:"I want to express my gratitude for the contribution ___ team has made towards my company. I am highly impressed with their use of creativity, quality of development and a strong commitment towards the customer.",

  },
    {
    name:"-Anuj Shah",
    role:"Customer",
    text:"The company has an impressive knowledge of our requirements that leads them to partner well with our business in strategies for continuous improvements.",

  },
]

const brand = [
  {img: imgr},
  {img: imgs},
  {img: imgt},
  {img: imgu},
  {img: imgv},
  {img: imgw},
  {img: imgx},


]
const scrollRef = useRef();
  const scrollLeft = ()=>{
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  };
  const scrollRight =()=>{
    scrollRef.current.scrollBy({
      left:200,
      behavior:"smooth"
    });
  };

  return (
    <>
    <div style={{ textAlign: "center" }} className="mt-5">
      <img
  src={images[current]}
  className="w-full h-[200px] sm:h-[300px] md:h-[500px] object-cover"
/>

      
<div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-20 mt-6 px-4 md:px-10">
  <h1 className="text-lg md:text-2xl font-bold text-center md:text-left">
    Improve Your Child's Skills With Fresh Toys Tailored to Their Age! <br/>
    Rent Toys - Play, Return, Repeat!
  </h1>

  <button 
    className="bg-red-500 text-white px-5 py-3 md:px-6 md:py-4 rounded-full hover:bg-amber-400"
    onClick={()=>navigate("/inquire")}
  >
    INQUIRE NOW
  </button>
</div>
 </div>

<div className="mt-10 ">

<section className="how-section">

 <div className="how-card flex flex-col md:flex-row overflow-hidden">

    <div className="left-box font-semibold">
      <h2 className="font-bold text-3xl mb-2">How it works?</h2>

      <ul>
        <li>You select two toys each shipment</li>
        <li>We mail cleaned & sanitized toys</li>
        <li>Play & return, keep toys you like</li>
        <li>No charge for normal wear</li>
      </ul>
    </div>

    <div className="right-box bg-black">
      
        <iframe className="w-full h-[200px] md:h-[300px]" 
        // src="https://www.youtube.com/embed/${abc123XYZ}}"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>

  </div>

  <div className="icon-row flex flex-col md:flex-row justify-center gap-6 md:gap-16 px-4">

    <div className="icon-item">
      <img src={imgf} alt="toys" />
      <div>
        <h3>Pick</h3>
        <p>From Range Of Toys</p>
      </div>
    </div>

    <div className="icon-item">
      <img src={imgh} alt="gift" />
      <div>
        <h3>Enjoy</h3>
        <p>As Long As You Want</p>
      </div>
    </div>

    <div className="icon-item">
      <img src={imgg} alt="return" />
      <div>
        <h3>Return & Repeat</h3>
        <p>Easy Cancellation</p>
      </div>
    </div>

  </div>

</section>

   
</div>
 
   <div className='bg-gray-100 py-10 relative mt-10'>
        <h1 className='font-bold text-4xl text-center mb-12'>GAME CATEGORY</h1>
  
        <button onClick={scrollLeft} className='absolute left-2 md:left-10 top-1/2 bg-white shadow-lg p-3 rounded-full'><FaChevronLeft /></button>
        <button onClick={scrollRight} className='absolute right-2 md:right-10 top-1/2 bg-white shadow-lg p-3 rounded-full'><FaChevronRight /></button>
      
      <div 
  ref={scrollRef} 
  className="flex gap-6 md:gap-12 overflow-x-auto px-4 md:px-20 scroll-smooth"
>
        {data.map((item,index)=>(
          <div key={index} className='text-center w-30 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:-translate-y-2'>
            <img src={item.img} alt='' className='h-28 mx-auto mb-4 transition-all duration-300 hover:drop-shadow-xl'/>
            <h2 className='font-semibold text-lg transition-colors duration-300 hover:text-red-500'>{item.name}</h2>
          </div>
        ))}
      </div>
      
      </div>

   <div className='bg-sky-900 py-20 mt-10'>
      <div className='max-w-7xl mx-auto px-5'>
        <h1 className="text-center text-4xl text-white font-bold mb-5">OUR OFFERING</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
          {offer.map((offer)=>(
            <div key={offer.id} className=" rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={offer.img} alt={offer.title} className=' justify-center items-center w-full h-40  object-contain'/>
              <div className='p-6'>
                <h2 className='text-xl font-bold text-white mb-3 text-center'>{offer.title}</h2>
                <p className="text-white text-sm mb-3 text-center ">{offer.description}</p>
               
            </div>
            </div>
              ))}
       
        </div>
      </div>
    </div>

   <div className="max-w-7xl mx-auto px-4 md:px-10">

 
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-12">
    
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src={imgl} 
        className="h-[220px] md:h-[280px] w-auto object-contain"
      />
    </div>

    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-2xl md:text-4xl font-bold text-gray-700 leading-snug">
        Supplement with Real Toys that Develop Key Skills
      </h3>

      <p className="mt-4 text-gray-500 text-base md:text-lg">
        Provides engaging real play experience for hours
      </p>

      <button
        className="bg-red-500 text-white px-6 py-3 mt-6 rounded-full hover:bg-amber-400 transition"
        onClick={() => navigate('/chart')}
      >
        VIEW
      </button>
    </div>
  </div>


  <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-12">
    
    <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
      <h3 className="text-2xl md:text-4xl font-bold text-gray-700 leading-snug">
        Get a break, guilt-free!
      </h3>

      <p className="mt-4 text-gray-500 text-base md:text-lg">
        See your child develop real skills while getting some Me-Time!
      </p>

      <button
        className="bg-red-500 text-white px-6 py-3 mt-6 rounded-full hover:bg-amber-400 transition"
        onClick={() => navigate('/table')}
      >
        VIEW
      </button>
    </div>

    <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
      <img 
        src={imgm} 
        className="h-[220px] md:h-[280px] w-auto object-contain"
      />
    </div>
  </div>


  
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-12">
    
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src={imgn} 
        className="h-[220px] md:h-[280px] w-auto object-contain"
      />
    </div>

    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-2xl md:text-4xl font-bold text-gray-700 leading-snug">
        No Need To Buy Expensive Toys
      </h3>

      <p className="mt-4 text-gray-500 text-base md:text-lg">
        We provide toys on rent for children's best growth
      </p>

      <button
        className="bg-red-500 text-white px-6 py-3 mt-6 rounded-full hover:bg-amber-400 transition"
        onClick={() => navigate("/plan")}
      >
        VIEW
      </button>
    </div>
  </div>

</div>
   <div className="bg-pink-700 mt-10 py-20">
    <h1 className="text-center mt-10 font-bold text-yellow-600  text-4xl">OUR BLOG</h1>
    <p className="mt-10 text-xl text-center text-white">LATEST POST FROM OUR BLOG</p>
   <div className=' py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
          {blog.map((blog)=>(
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition " >
              <div className="">
              <img src={blog.img} alt={blog.title} className='w-full h-52 object-cover'/>
              </div>
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

   </div>
   
  <div className="bg-yellow-500 mt-10 py-20">
    <h1 className="text-center mt-10 font-bold text-white  text-4xl">WHAT OUR CLIENT SAY</h1>

 
  <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  loop={true}
  
>

        {review.map((review, index) => (
          <SwiperSlide key={index}>

            <p className="max-w-5xl p-10 text-2xl font-bold text-white  mx-auto">
              "{review.text}"
            </p>

            <h3 className="font-bold text-white text-center">{review.name}</h3>
            <p className="font-semibold text-center text-white mb-13">{review.role}</p>

          </SwiperSlide>
        ))}

      </Swiper>

  
   </div>

   <div className=" bg-white mt-10 py-20">
    <h1 className="text-center font-bold text-4xl mb-4">OUR BRANDS</h1>
    <p className="text-center font-semibold text-2xl text-gray-500 ">More Than Your Average Toy Store</p>
      <Swiper className="mt-20 max-w-5xl"
        modules={[Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={5}
        autoplay={{ delay: 3000 }}
        loop={true}
      >

        {brand.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">

           <img src={item.img} className="h-24" />

          </SwiperSlide>
        ))}

      </Swiper>
    
       
        </div>

  </>





  );
};

export default Home;