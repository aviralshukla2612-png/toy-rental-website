import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

import {
  FaArrowRight,
  FaChartLine,
  FaChild,
  FaPuzzlePiece,
  FaStar,
} from "react-icons/fa";

const Chart = () => {
  const navigate = useNavigate();

  /* DEVELOPMENT GRAPH */

  const progressData = [
    { set: "SET 1", value: 20 },
    { set: "SET 2", value: 50 },
    { set: "SET 3", value: 70 },
    { set: "SET 4", value: 85 },
    { set: "SET 5", value: 100 },
    { set: "SET 6", value: 125 },
    { set: "SET 7", value: 150 },
    { set: "SET 8", value: 165 },
    { set: "SET 9", value: 180 },
  ];

  /* SKILLS GRAPH */

  const skillData = [
    { name: "Fine Motor", value: 2 },
    { name: "Gross Motor", value: 6 },
    { name: "Social", value: 2 },
    { name: "Sensory", value: 1 },
    { name: "Language", value: 5 },
    { name: "Stages", value: 9 },
  ];

  /* STATS */

  const stats = [
    {
      icon: <FaPuzzlePiece />,
      value: "150+",
      title: "Learning Activities",
    },

    {
      icon: <FaChild />,
      value: "20+",
      title: "Development Skills",
    },

    {
      icon: <FaStar />,
      value: "4.8",
      title: "Parent Rating",
    },

    {
      icon: <FaChartLine />,
      value: "95%",
      title: "Positive Growth",
    },
  ];

  const cardStyle =
    "bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300";

  return (
    <div className="bg-slate-100">

      {/* HERO */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Child Analytics
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Track Your Child’s Growth
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Monitor development progress, learning milestones and skill
            improvement through engaging educational activities.
          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {stats.map((item, index) => (

              <div
                key={index}
                className={`${cardStyle} p-8 text-center`}
              >

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

      {/* CHARTS */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid xl:grid-cols-2 gap-10">

            {/* LEFT CHART */}

            <div className={`${cardStyle} p-8`}>

              <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
                Development Progress
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Jimmy’s Learning Journey
              </h2>

              <p className="text-gray-600 mb-10 leading-relaxed">
                Our analytics track toy interaction, learning complexity,
                creativity and developmental milestones over time.
              </p>

              <ResponsiveContainer width="100%" height={350}>

                <LineChart data={progressData}>

                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                  <XAxis
                    dataKey="set"
                    tick={{ fill: "#6b7280" }}
                  />

                  <YAxis tick={{ fill: "#6b7280" }} />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#111827"
                    strokeWidth={4}
                  />

                </LineChart>

              </ResponsiveContainer>

              <div className="mt-8 bg-slate-100 rounded-2xl p-5 text-gray-700 leading-relaxed">

                Skills developed include Fine Motor, Gross Motor,
                Social Interaction, Sensory Processing and Language
                Development.

              </div>

            </div>

            {/* RIGHT CHART */}

            <div className={`${cardStyle} p-8`}>

              <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
                Skill Analysis
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Child Skill Breakdown
              </h2>

              <p className="text-gray-600 mb-10 leading-relaxed">
                Understand which developmental areas are improving through
                play-based learning activities and educational toys.
              </p>

              <ResponsiveContainer width="100%" height={350}>

                <BarChart data={skillData}>

                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                  />

                  <YAxis tick={{ fill: "#6b7280" }} />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#111827"
                    radius={[12, 12, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="bg-slate-100 rounded-2xl p-5 text-center">

                  <h3 className="text-3xl font-bold text-slate-900">
                    9
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Skill Areas
                  </p>

                </div>

                <div className="bg-slate-100 rounded-2xl p-5 text-center">

                  <h3 className="text-3xl font-bold text-slate-900">
                    180+
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Learning Points
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
            Start Today
          </p>

          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Help Your Child Learn Through Play
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover educational toys and personalized learning experiences
            that support your child’s development journey.
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

export default Chart;