import React from 'react'
import {LineChart,Line,XAxis,YAxis,Tooltip,BarChart,Bar,CartesianGrid,ResponsiveContainer} from "recharts";

export const Chart = () => {
     const progressData = [
    { set: "SET 1", value: 20 },
    { set: "SET 2", value: 50 },
    { set: "SET 3", value: 70 },
    { set: "SET 4", value: 85 },
    { set: "SET 5", value: 100 },
    { set: "SET 6", value: 125 },
    { set: "SET 7", value: 150 },
    { set: "SET 8", value: 165 },
    { set: "SET 9", value: 180 }
  ];

  // Right Graph Data (Skills)
  const skillData = [
    { name: "Fine Motor", value: 2 },
    { name: "Gross Motor", value: 6 },
    { name: "Social", value: 2 },
    { name: "Sensory", value: 1 },
    { name: "Language", value: 5 },
    { name: "Stages", value: 9 }
  ];
  return (
     <div className="bg-gray-100 py-16 px-6">

      <h1 className="text-4xl font-bold text-center text-green-600 mb-4">
        SEE HOW YOUR CHILD GROWS!
      </h1>

      <p className="text-center text-gray-900 mb-12">
        When joining CurioKid you can see how our toys and activities improves your child's skills overtime
      </p>

     
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        
        <div>
          <h2 className="text-2xl font-bold text-center mb-2">
            Jimmy’s Development
          </h2>

          <p className="text-center text-sm text-gray-600 mb-4">
            Our algorithm measure skill base, set complexity, build time, age, and other factors.
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="set" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2c7a7b"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

          <p className="text-xs text-gray-600 mt-4 text-center">
            Skills developed: Fine Motor, Gross Motor, Social, Sensory Processing, Language
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-bold text-center mb-4">
            SKILL
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skillData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#76c7c0" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};