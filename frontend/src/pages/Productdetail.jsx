import React, { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { toast } from "react-hot-toast";

import {
  FaStar,
  FaHeart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import { useData } from "../context/DataProvider";

import imga from "../assets/games1.webp";
import imgb from "../assets/games2.webp";
import imgc from "../assets/games3.webp";
import imgd from "../assets/games4.webp";
import imge from "../assets/games5.webp";
import imgf from "../assets/games6.webp";



const products = [

  {
    id: 1,
    img: imga,
    title: "Bounce And Win",
    category: "Board Games",
    age: "4-7 Years",
    rating: "4.8",
    price: 299,

    description:
      "Race to recreate the pattern on the challenge card by bouncing balls into the grid.",

    features: [
      "Improves coordination",
      "Boosts focus and reflexes",
      "Interactive learning game",
    ],

    includes:
      "1 tray, 18 balls and 10 cards",
  },



  {
    id: 2,
    img: imgb,
    title: "Catch Ball Game",
    category: "Outdoor Fun",
    age: "4-7 Years",
    rating: "4.7",
    price: 299,

    description:
      "Fun catch ball game designed to improve parent-child interaction.",

    features: [
      "Improves hand-eye coordination",
      "Fun physical activity",
      "Perfect outdoor game",
    ],

    includes:
      "2 ball catchers and 4 balls",
  },



  {
    id: 3,
    img: imgc,
    title: "Number Duck Shape Tray",
    category: "Educational Games",
    age: "1-4 Years",
    rating: "4.9",
    price: 299,

    description:
      "Wooden puzzle introducing numbers 1 to 20 through interactive play.",

    features: [
      "Develops motor skills",
      "Teaches numbers",
      "Bright educational design",
    ],

    includes:
      "1 wooden tray",
  },



  {
    id: 4,
    img: imgd,
    title: "Ship Tray",
    category: "Puzzle Games",
    age: "1-4 Years",
    rating: "4.6",
    price: 299,

    description:
      "Colorful jigsaw puzzle helping children improve imagination and observation.",

    features: [
      "Sharpens observation",
      "Improves imagination",
      "Puzzle-solving skills",
    ],

    includes:
      "1 tray and cards",
  },



  {
    id: 5,
    img: imge,
    title: "Flipping Frog",
    category: "Board Games",
    age: "4-7 Years",
    rating: "4.8",
    price: 299,

    description:
      "Exciting frog launching game designed for fun and coordination.",

    features: [
      "Motor skill improvement",
      "Interactive multiplayer game",
      "Fun learning experience",
    ],

    includes:
      "24 frogs and accessories",
  },



  {
    id: 6,
    img: imgf,
    title: "Learning Dyno",
    category: "Educational Games",
    age: "4-7 Years",
    rating: "4.9",
    price: 299,

    description:
      "Colorful dinosaur learning board helping children learn numbers 1 to 30.",

    features: [
      "Improves counting skills",
      "Boosts creativity",
      "Develops logical thinking",
    ],

    includes:
      "1 tray and number pieces",
  },

];



export default function ProductDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useData();

  const [quantity, setQuantity] = useState(1);



  const product = products.find(
    (p) => p.id === Number(id)
  );



  if (!product) {

    return (

      <div className="
      h-screen
      flex
      items-center
      justify-center
      text-3xl
      font-bold
      ">
        Product Not Found
      </div>

    );

  }



  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );



  const handleAddToCart = () => {

    addToCart({
      ...product,
      quantity,
    });

    toast.success("Added to Cart");

  };



  return (

    <>

      {/* HERO */}

      <section className="
      bg-slate-900
      py-20
      text-white
      ">

        <div className="
        max-w-7xl
        mx-auto
        px-6
        ">

          <p className="
          text-gray-400
          text-sm
          uppercase
          tracking-[3px]
          ">
            Home / Games / Product
          </p>

          <h1 className="
          text-5xl
          font-bold
          mt-4
          ">
            {product.title}
          </h1>

        </div>

      </section>



      {/* PRODUCT SECTION */}

      <section className="
      bg-slate-50
      py-24
      ">

        <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-16
        items-center
        ">



          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
            bg-white
            rounded-3xl
            p-10
            shadow-sm
            overflow-hidden
            "
          >

            <img
              src={product.img}
              alt={product.title}
              className="
              w-full
              h-[500px]
              object-contain
              hover:scale-105
              transition
              duration-500
              "
            />

          </motion.div>



          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >



            {/* BADGES */}

            <div className="
            flex
            flex-wrap
            gap-3
            mb-6
            ">

              <span className="
              bg-black
              text-white
              px-4
              py-2
              rounded-full
              text-sm
              ">
                {product.category}
              </span>

              <span className="
              bg-gray-200
              px-4
              py-2
              rounded-full
              text-sm
              ">
                Age: {product.age}
              </span>

            </div>



            {/* TITLE */}

            <h1 className="
            text-5xl
            font-bold
            text-slate-900
            leading-tight
            ">
              {product.title}
            </h1>



            {/* RATING */}

            <div className="
            flex
            items-center
            gap-2
            mt-6
            ">

              <div className="
              flex
              items-center
              text-yellow-400
              gap-1
              ">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <span className="
              text-gray-600
              ">
                ({product.rating})
              </span>

            </div>



            {/* PRICE */}

            <h2 className="
            text-4xl
            font-bold
            text-black
            mt-8
            ">
              ₹ {product.price}
            </h2>



            {/* DESCRIPTION */}

            <p className="
            mt-8
            text-lg
            text-gray-600
            leading-relaxed
            ">
              {product.description}
            </p>



            {/* FEATURES */}

            <div className="mt-10">

              <h3 className="
              text-2xl
              font-bold
              mb-5
              ">
                Features
              </h3>

              <ul className="
              space-y-4
              text-gray-600
              ">

                {product.features.map((feature, index) => (

                  <li
                    key={index}
                    className="
                    flex
                    items-center
                    gap-3
                    "
                  >

                    <span className="
                    w-2
                    h-2
                    rounded-full
                    bg-black
                    "></span>

                    {feature}

                  </li>

                ))}

              </ul>

            </div>



            {/* INCLUDES */}

            <div className="
            mt-10
            bg-white
            rounded-2xl
            p-6
            shadow-sm
            ">

              <h3 className="
              text-xl
              font-bold
              mb-3
              ">
                What's Included
              </h3>

              <p className="text-gray-600">
                {product.includes}
              </p>

            </div>



            {/* QUANTITY */}

            <div className="
            flex
            items-center
            gap-6
            mt-10
            ">

              <div className="
              flex
              items-center
              border
              border-gray-300
              rounded-2xl
              overflow-hidden
              ">

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                  className="
                  px-5
                  py-4
                  hover:bg-gray-100
                  transition
                  "
                >
                  <FaMinus />
                </button>

                <span className="
                px-6
                font-semibold
                ">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="
                  px-5
                  py-4
                  hover:bg-gray-100
                  transition
                  "
                >
                  <FaPlus />
                </button>

              </div>



              {/* BUTTONS */}

              <button
                onClick={handleAddToCart}
                className="
                bg-black
                text-white
                px-8
                py-4
                rounded-2xl
                hover:bg-slate-800
                transition
                duration-300
                "
              >
                Add To Cart
              </button>



              <button className="
              border
              border-gray-300
              px-5
              py-4
              rounded-2xl
              hover:bg-gray-100
              transition
              ">

                <FaHeart />

              </button>

            </div>

          </motion.div>

        </div>

      </section>



      {/* RELATED PRODUCTS */}

      <section className="
      bg-white
      py-24
      ">

        <div className="
        max-w-7xl
        mx-auto
        px-6
        ">

          <div className="
          text-center
          mb-16
          ">

            <p className="
            uppercase
            tracking-[4px]
            text-sm
            text-gray-500
            mb-4
            ">
              Recommendations
            </p>

            <h2 className="
            text-5xl
            font-bold
            text-slate-900
            ">
              Related Products
            </h2>

          </div>



          <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          ">

            {relatedProducts.map((item) => (

              <div
                key={item.id}
                onClick={() =>
                  navigate(`/product/${item.id}`)
                }
                className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                cursor-pointer
                "
              >

                <div className="
                overflow-hidden
                bg-slate-50
                ">

                  <img
                    src={item.img}
                    className="
                    w-full
                    h-72
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                    "
                  />

                </div>



                <div className="p-6">

                  <span className="
                  inline-block
                  bg-gray-100
                  text-sm
                  px-3
                  py-1
                  rounded-full
                  mb-4
                  ">
                    {item.category}
                  </span>

                  <h3 className="
                  text-2xl
                  font-bold
                  text-slate-900
                  ">
                    {item.title}
                  </h3>

                  <p className="
                  mt-4
                  text-gray-600
                  ">
                    ₹ {item.price}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>

  );

}