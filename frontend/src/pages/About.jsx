import React from 'react';
import imgc from '../assets/about.jpg';
import choose from '../assets/about1.jfif';
import delivery from '../assets/about2.jfif';
import play from '../assets/about3.jfif';
import exchange from '../assets/about4.jfif';
import variety from '../assets/about5.jfif';
import sanitized from '../assets/about6.jfif';
import affordable from '../assets/about7.jpg';
import eco from '../assets/about8.png';
import fast from '../assets/about9.jfif';
import easy from '../assets/about10.webp';
import toy from '../assets/about11.jfif';
import happy from '../assets/about12.jfif';
import city from '../assets/about13.jfif';
import star from '../assets/about14.jfif';



 const About = () => {

  const steps =[
    {
      img:choose,
      title:"CHOOSE TOYS",
      description:"Browse our collection and select toys suitable for your child's age.",
    },
    {
      img:delivery,
      title:"DELIVERY TO YOUR HOME",
      description:"We deliver sanitized toys directly to your doorstep.",
    },
    {
      img:play,
      title:"PLAY & LEARN",
      description:"Kids play, learn and enjoy with our educational toys.",
    },
    {
      img:exchange,
      title:"RETURN OR EXCHANGE",
      description:"Return toys when done and exchange them for new ones anytime.",
    },
  ]

  const features =[
    {
      img:variety,
      title:"Wide Variety of Toys",
    },
    {
      img:sanitized,
      title:"100% Sanitized Toys",
    },
    {
      img:affordable,
      title:"Affordable Rental Plans"
    },
    {
      img:eco,
      title:"Eco-Friendly Toy Sharing",
    },
    {
      img:fast,
      title:"Fast Delivery",
    },
    {
      img:easy,
      title:"Easy Exchange Policy"
    },
  ]

  const stats =[
    {
      img:toy,
      number:"500+",
      title:"Toys Availabel",
    },
      {
      img:happy,
      number:"1000+",
      title:"Happy Families",
    },
      {
      img:city,
      number:"20+",
      title:"Cities Served"
    },
       {
      img:star,
      number:"4.8",
      title:"Customer Rating"
    },

  ]
  return (
    <>
      <div className="bg-gray-100 py-10 relative mt-10">
        <h1 className="font-bold text-4xl text-center mb-12">ABOUT US</h1>

        <div className="flex flex-col md:flex-row items-center px-20 gap-10">

         
          <div className="md:w-1/2">
            <p className="text-lg font-bold text-gray-700 mb-8">
              Welcome to our toy rental website, where we believe in the power of play and the joy it brings to children.
              Our mission is to provide a convenient and affordable way for families to access a wide variety of toys
              without the need for long-term ownership.<br/> 

              Children grow quickly and their interests change, which is why we offer a diverse selection of toys that
              cater to different age groups and developmental stages.<br/> 
              By renting toys from us, parents can save money, reduce clutter, and promote sustainability by giving toys
              a second life. We are committed to providing high-quality, clean, and safe toys that inspire creativity,
              learning, and fun for children of all ages.
            </p>
          </div>

         
          <div className="md:w-1/2 ">
            <img src={imgc} alt="Toy Banner" className="rounded-lg shadow-lg w-full h-[400px]"/>
          </div>

        </div>
      </div>
      <div className="bg-gray-100 py-10 relative mt-10 ">
        <h1 className="font-bold text-4xl text-center mb-12">HOW OUR TOY RENTAL WORK</h1>
         <div className='grid md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto'>
           {steps.map((step,index)=>(
            <div key={index} className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer'>
              <img src={step.img} alt={step.title} className='w-32 h-32 object-contain mx-auto mb-4'/>
              <h3 className='text-lg font-semibold mb-2'>{step.title}</h3>
              <p className='text-gray-600 text-sm'>{step.description}</p>
              </div>
           ))}
         </div>
      </div>

     <div className="bg-gray-100 py-10 relative mt-10 ">
        <h1 className="font-bold text-4xl text-center mb-12">WHY CHOOSE US</h1>
         <div className='grid grid-cols-2 md:grid-cols-6 gap-10 max-w-6xl mx-auto px-6'>
          {features.map((item,index)=>(
            <div key={index} className='flex flex-col items-center text-center'>
              <img src={item.img} alt={item.title} className='w-32 h-32 object-contain mb-4'/>
              <h3 className='font-semibold text-lg'>{item.title}</h3>
            </div>
          ))}
         </div>
      </div>

    <div className="bg-gray-100 py-16 mt-10">

  <h1 className="font-bold text-4xl text-center mb-12">
    OUR ACHIEVEMENTS
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">

    {stats.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 "
      >

        <img
          src={item.img}
          alt={item.title}
          className="w-40 h-40 mx-auto mb-4 object-contain"
        />

        <h2 className="text-3xl font-bold text-purple-600">
          {item.number}
        </h2>

        <p className="text-gray-600 mt-2">
          {item.title}
        </p>

      </div>
    ))}

  

  </div>

</div>

    </>
  );
};
export default About;