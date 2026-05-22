import React from "react";
import { useParams } from "react-router-dom";
import imga from '../assets/games1.webp';
import imgb from '../assets/games2.webp';
import imgc from '../assets/games3.webp';
import imgd from '../assets/games4.webp';
import imge from '../assets/games5.webp';
import imgf from '../assets/games6.webp';
import { useData } from "../context/DataProvider";



const products = [
  {
    id: 1,
    img: imga,
    title: "Bounce And Win",
    description: "Race to recreate the pattern on the challenge card by bouncing balls into the grid. Flip over a challenge card to determine the pattern. The first to complete the patterns wins the card and the first to earn 3 cards with the games",
    age: "4-7 Years",
    benefits: "Improves coordination",
    Includes:"1 tray, 18 balls, and 10 cards",
    Price:"299"
  },
  {
    id: 2,
    img: imgb,
    title: "Catch Ball Game",
    description: "Playing a catch ball game with a little child is the best way to spend your precious time with them thus ensuring the development of the parent-child relationship. Bring home this amazing catch ball game and indulge in playing with your child for hours.",
    age: "4-7 Years",
    benefits: "Hand-eye coordination",
    Includes:"2 ball catcher and 4 balls",
     Price:"299"
  },
   {
    id: 3,
    img: imgc,
    title: "Number Duck Shape Tray With Knob",
    description: "A fine crafted soft wooden puzzle offers a hand-on introduction to numbers 1 to 20. Children learn through play as they fit the brightly colored wooden pieces in the cavities of the board.",
    age: "1-4 Years",
    benefits: " Improving hand-eye coordination and encouraging the development of essential motor skills.",
    Includes:"1 Little Genius Number Duck Shape Tray with Knob, Multi-Colors",
     Price:"299"
  },
  {
    id: 4,
    img: imgd,
    title: "Ship Tray",
    description: "While the children are engrossed in fixing together pieces of the attractive jigsaw puzzle, they do not realize that the puzzle is secretly contributing to their mental growth.",
    age: "1-4 Years",
    benefits: "it helps to build their imagination and sharpness their power of observation ",
    Includes:"1 tray and 10 cards",
     Price:"299"
  },
  {
    id: 5,
    img: imge,
    title: "Flipping Frog",
    description: "The object of the game is simple: Be the player with the most frogs in the tree at the end of a round. Win three rounds, and you win the game. However, it’s not as easy as it looks. The flexible, rubbery plastic frogs are shaped to hang easily from the tree branches, but when the branches pop up, these little amphibian friends tend to go flying.",
    age: "4-7 Years",
    benefits: "Improves aim, motor skills, and hand-eye coordination",
    Includes:"24 frogs, 4 launchers, 1 base, 1 tree trunk, 4 branches, 1 treetop, and 1 instructional sheet; this game requires three AA batteries (not included)",
     Price:"299"  
},
  {
    id: 6,
    img: imgf,
    title: "AL-92 Learning Dyno Number 1 to 30",
     description: [
    "This Cute Dyno shaped colorful learning board includes 30 pieces of smooth numbers painted in different colors",
    "This toy has number puzzles ranging from 1–30",
    "Helps develop fine motor skills, creativity, and imagination",
    "Bright colors make learning fun",
    "Improves logical thinking and hand-eye coordination",
    "Each number has a small knob for easy handling"
  ],
    age: "4-7 Years",
    benefits: "Counting skills",
    Includes:"1 tray and 30 cards",
     Price:"299"
  }
];



  export default function ProductDetail() {

  const { id } = useParams();
  const { addToCart } = useData();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="w-10/12 mx-auto mt-10 flex gap-10">
      
      <img src={product.img} className="w-1/2 mb-5" />

      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <h2 className="mt-4 font-semibold">Description:</h2>

        {Array.isArray(product.description) ? (
          <ul className="mt-2 list-disc pl-5 space-y-2">
            {product.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2">{product.description}</p>
        )}

        <p className="mt-2"><b>Age:</b> {product.age}</p>
        <p className="mt-2"><b>Benefits:</b> {product.benefits}</p>
        <p className="mt-2"><b>Include:</b> {product.Includes}</p>
        <p className="mt-2"><b>Price: </b> ₹ {product.Price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-5 bg-blue-500 text-white px-6 py-2 rounded cursor-pointer hover:bg-amber-400"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}
 


