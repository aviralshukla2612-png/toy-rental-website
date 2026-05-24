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
import  Games  from "./Games";
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

    {/* HERO SECTION */}

    <section className="relative h-screen overflow-hidden">

      <img
        src={images[current]}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

        <div className="max-w-3xl text-white">

          <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-5">
            Interactive Learning Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Improve Your Child's Skills Through Smart Play
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-2xl">
            Educational toys and games designed to improve creativity,
            learning, teamwork and logical thinking.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
              onClick={() => navigate('/game')}
            >
              Explore Games
            </button>

            <button
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300"
              onClick={() => navigate('/inquire')}
            >
              Inquire Now
            </button>

          </div>

        </div>

      </div>

    </section>



    {/* HOW IT WORKS */}

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
            Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            How It Works
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="bg-slate-50 p-10 rounded-3xl shadow-sm">

            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Rent Toys In 3 Easy Steps
            </h3>

            <ul className="space-y-5 text-gray-600 text-lg">
              <li>✔ Select toys from our collection</li>
              <li>✔ Get sanitized toys delivered</li>
              <li>✔ Return & repeat anytime</li>
            </ul>

          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[350px]"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

       
  {/* PICK CARD */}

  <div className="
  bg-white
  rounded-3xl
  p-10
  shadow-sm
  hover:shadow-2xl
  hover:-translate-y-2
  transition-all
  duration-300
  text-center
  border
  border-gray-100
  ">

    <div className="
    bg-amber-100
    w-28
    h-28
    rounded-full
    flex
    items-center
    justify-center
    mx-auto
    mb-8
    ">

      <img
        src={imgf}
        className="w-14 h-14 object-contain"
        alt="Pick"
      />

    </div>

    <h3 className="
    text-3xl
    font-bold
    text-slate-900
    ">
      Pick
    </h3>

    <p className="
    mt-4
    text-gray-600
    leading-relaxed
    text-lg
    ">
      Choose from a wide range of educational
      toys designed for smart learning.
    </p>

  </div>



  {/* ENJOY CARD */}

  <div className="
  bg-white
  rounded-3xl
  p-10
  shadow-sm
  hover:shadow-2xl
  hover:-translate-y-2
  transition-all
  duration-300
  text-center
  border
  border-gray-100
  ">

    <div className="
    bg-blue-100
    w-28
    h-28
    rounded-full
    flex
    items-center
    justify-center
    mx-auto
    mb-8
    ">

      <img
        src={imgh}
        className="w-14 h-14 object-contain"
        alt="Enjoy"
      />

    </div>

    <h3 className="
    text-3xl
    font-bold
    text-slate-900
    ">
      Enjoy
    </h3>

    <p className="
    mt-4
    text-gray-600
    leading-relaxed
    text-lg
    ">
      Let your child learn through engaging,
      creative and educational play experiences.
    </p>

  </div>



  {/* RETURN CARD */}

  <div className="bg-white  rounded-3xl p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100">

    <div className=" bg-green-100 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-8">

      <img
        src={imgg}
        className="w-14 h-14 object-contain"
        alt="Return"
      />

    </div>

    <h3 className="text-3xl font-bold text-slate-900">
      Return
    </h3>

    <p className="mt-4 text-gray-600 leading-relaxed text-lg">
      Easily exchange toys anytime and keep
      discovering new learning experiences.
    </p>

  </div>

</div>

      </div>
         

    </section>



    {/* GAME CATEGORY */}

    <section className="bg-slate-50 py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
            Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Explore Game Categories
          </h2>

        </div>


        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-6"
        >

          {data.map((item, index) => (

            <div
              key={index}
              className="min-w-[220px] bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
            >

              <img
                src={item.img}
                className="h-28 mx-auto mb-6 object-contain"
              />

              <h3 className="text-xl font-semibold text-slate-900">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>



    {/* OFFERINGS */}

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
            Offerings
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Offerings
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {offer.map((offer) => (

            <div
              key={offer.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >

              <img
                src={offer.img}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {offer.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {offer.description}
                </p>

                <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition">
                  Learn More
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>



    {/* BENEFITS */}

    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6 space-y-24">


        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <img src={imgl} className="rounded-3xl shadow-lg" />
          </div>

          <div>

            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Supplement With Real Toys That Develop Skills
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Real-world play experiences designed to improve creativity,
              engagement and learning.
            </p>

            <button
              className="mt-8 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition"
              onClick={() => navigate('/chart')}
            >
              View More
            </button>

          </div>

        </div>


        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="order-2 md:order-1">

            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Enjoy Stress-Free Parenting Time
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Help your child grow while creating valuable free time for yourself.
            </p>

            <button
              className="mt-8 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition"
              onClick={() => navigate('/table')}
            >
              View More
            </button>

          </div>

          <div className="order-1 md:order-2">
            <img src={imgm} className="rounded-3xl shadow-lg" />
          </div>

        </div>


        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <img src={imgn} className="rounded-3xl shadow-lg" />
          </div>

          <div>

            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              No Need To Buy Expensive Toys
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Access premium educational toys without huge investment.
            </p>

            <button
              className="mt-8 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition"
              onClick={() => navigate('/plan')}
            >
              View More
            </button>

          </div>

        </div>

      </div>

    </section>



    {/* BLOG */}

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
            Blog
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Latest Articles
          </h2>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blog.map((blog) => (

            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
            >

              <img
                src={blog.img}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <p className="text-sm text-gray-500 mb-4">
                  Posted on {blog.date}
                </p>

                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  {blog.title}
                </h3>

                <button className="mt-6 bg-black text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition">
                  Read More
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>



    {/* TESTIMONIALS */}

    <section className="bg-slate-900 py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-3">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          What Our Clients Say
        </h2>


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

              <div className="bg-slate-800 rounded-3xl p-10 md:p-16">

                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  {review.text}
                </p>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {review.name}
                </h3>

                <p className="text-gray-400 mt-2">
                  {review.role}
                </p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>



    {/* BRANDS */}

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
            Brands
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Trusted Brands
          </h2>

        </div>


        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5}
          autoplay={{ delay: 2000 }}
          loop={true}
        >

          {brand.map((item, index) => (

            <SwiperSlide key={index}>

              <div className="bg-slate-50 rounded-2xl p-6 flex justify-center items-center h-36">
                <img src={item.img} className="h-20 object-contain" />
              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>


  </>
);
}
export default Home;
