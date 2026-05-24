import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaBrain,
  FaChild,
  FaPuzzlePiece,
} from "react-icons/fa";

const Table = () => {
const navigate = useNavigate();
  const headers = [
    "Fine Motor Skills",
    "Gross Motor Skills",
    "Play & Social",
    "Self Care",
    "Sensory Development",
    "Speech Development",
  ];

  const tableData = [
    {
      age: "Description",

      data: [
        "Finger and hand skills such as writing, cutting and gripping.",

        "Large muscle movements like walking, balancing and climbing.",

        "Social interaction, sharing and imaginative play activities.",

        "Daily tasks such as dressing, eating and hygiene routines.",

        "Processing and responding to environmental sensory input.",

        "Speech clarity, communication and sound development.",
      ],
    },

    {
      age: "0 - 6 Months",

      data: [
        "Reflexive grasp to controlled reaching movements.",

        "Rolls over and sits with support.",

        "Eye contact and social smiling.",

        "Tracks objects and expresses needs.",

        "Responds to sound and movement.",

        "Cooing sounds and voice reactions.",
      ],
    },

    {
      age: "6 - 12 Months",

      data: [
        "Pincer grasp and toy handling.",

        "Crawls and transitions posture.",

        "Peek-a-boo and social interaction.",

        "Bottle holding and self-feeding.",

        "Explores textures and gestures.",

        "Basic babbling sounds.",
      ],
    },

    {
      age: "1 - 2 Years",

      data: [
        "Stacks blocks and scribbles.",

        "Walks independently and climbs.",

        "Parallel play and imitation.",

        "Feeds self and removes clothes.",

        "Explores objects through senses.",

        "Speaks simple words.",
      ],
    },

    {
      age: "2 - 3 Years",

      data: [
        "Draws lines and flips pages.",

        "Runs, jumps and kicks ball.",

        "Pretend play and sharing toys.",

        "Toilet training development.",

        "Sorts shapes and colors.",

        "Uses short sentences.",
      ],
    },
  ];

  const stats = [
    {
      icon: <FaPuzzlePiece />,
      value: "20+",
      title: "Skill Categories",
    },

    {
      icon: <FaChild />,
      value: "0-3",
      title: "Years Tracking",
    },

    {
      icon: <FaBrain />,
      value: "100+",
      title: "Learning Activities",
    },
  ];

  const statCard =
    "bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center";

  return (
    <div className="bg-slate-100">

      {/* HERO */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Child Development
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Track Development Milestones
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Understand your child’s growth journey through developmental
            milestones, learning skills and play-based progress tracking.
          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {stats.map((item, index) => (

              <div key={index} className={statCard}>

                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mx-auto mb-6">

                  {item.icon}

                </div>

                <h2 className="text-5xl font-bold text-slate-900 mb-3">
                  {item.value}
                </h2>

                <p className="text-gray-600">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TABLE */}

      <section className="pb-24">

        <div className="max-w-[95%] mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

            {/* HEADER */}

            <div className="p-10 border-b border-gray-200">

              <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
                Development Guide
              </p>

              <h2 className="text-4xl font-bold text-slate-900">
                Child Skill Development Timeline
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed max-w-3xl">
                Monitor how children develop motor skills, communication,
                social interaction and sensory processing through different
                age stages.
              </p>

            </div>

            {/* TABLE CONTAINER */}

            <div className="overflow-x-auto">

              <table className="min-w-full border-collapse">

                {/* TABLE HEADER */}

                <thead>

                  <tr className="bg-slate-900 text-white">

                    <th className="p-6 text-left min-w-[180px] border-b border-slate-700">

                      Age Group

                    </th>

                    {headers.map((header, index) => (

                      <th
                        key={index}
                        className="p-6 text-left min-w-[240px] border-b border-slate-700"
                      >

                        {header}

                      </th>

                    ))}

                  </tr>

                </thead>

                {/* TABLE BODY */}

                <tbody>

                  {tableData.map((row, rowIndex) => (

                    <tr
                      key={rowIndex}
                      className="hover:bg-slate-50 transition"
                    >

                      {/* AGE */}

                      <td className="p-6 font-bold text-slate-900 border-b border-gray-200 bg-slate-100">

                        {row.age}

                      </td>

                      {/* CELLS */}

                      {row.data.map((cell, cellIndex) => (

                        <td
                          key={cellIndex}
                          className="p-6 text-gray-700 leading-relaxed border-b border-gray-200 align-top"
                        >

                          {cell}

                          {row.age === "Description" && (

                            <button className="ml-2 text-black font-semibold hover:underline inline-flex items-center gap-2">

                              Read More

                              <FaArrowRight className="text-sm" />

                            </button>

                          )}

                        </td>

                      ))}

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
            Get Started
          </p>

          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Support Your Child’s Growth Journey
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover educational toys and personalized activities that help
            children learn, explore and grow through play.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition"
          onClick={() => navigate("/plan")}>

            Explore Learning Plans

            <FaArrowRight />

          </button>

        </div>

      </section>

    </div>
  );
};

export default Table;