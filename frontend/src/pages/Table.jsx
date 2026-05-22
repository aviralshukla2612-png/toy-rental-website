import React from 'react';

export const Table = () => {

  const tableData = [
    {
      age: "Description",
      data: [
        "Finger and hand skills such as writing, cutting, tying shoelaces.",
        "Skills requiring whole body movement using large muscles.",
        "Play is voluntary engagement associated with enjoyment.",
        "Daily life tasks like dressing, eating, hygiene.",
        "Sensory processing helps interpret environmental inputs.",
        "Speech clarity and production of sounds."
      ]
    },
    {
      age: "0-6 months",
      data: [
        "Reflexive grasp → voluntary grasp → controlled reach",
        "Rolls over, sits with support",
        "Eye contact, smiles, social response",
        "Tracks objects, expresses needs by crying",
        "Responds to sound, tracks visually",
        "Cooing sounds, reacts to voice"
      ]
    },
    {
      age: "6-12 months",
      data: [
        "Pincer grasp, picks & drops toys",
        "Crawls, sits, posture transitions",
        "Peek-a-boo, clapping, interaction",
        "Holds bottle, starts self-feeding",
        "Imitates gestures, handles textures",
        "Babbling (ba-ba, da-da)"
      ]
    },
    {
      age: "1-2 years",
      data: [
        "Stacks blocks, scribbles",
        "Walks independently, climbs",
        "Parallel play, imitates adults",
        "Feeds self, removes clothes",
        "Explores objects using senses",
        "Says simple words"
      ]
    },
    {
      age: "2-3 years",
      data: [
        "Draws lines, turns pages",
        "Runs, jumps, kicks ball",
        "Pretend play, shares toys",
        "Toilet training begins",
        "Sorts shapes, colors",
        "2-3 word sentences"
      ]
    }
  ];

  const headers = [
    "Fine Motor Skills",
    "Gross Motor Skills",
    "Play and Social",
    "Self Care Development",
    "Sensory Processing Development",
    "Speech Sounds Development"
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">

      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
        SEE HOW YOUR CHILD GROWS!
      </h1>

      <p className="text-center text-gray-800 mb-10">
        When joining CurioKid you can see how our toys and activities improves your child's skills overtime
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-purple-900 text-sm">

        
          <thead>
            <tr className="bg-purple-900 text-white">
              <th className="p-4 border w-[150px]"></th>
              {headers.map((head, i) => (
                <th key={i} className="p-4 border min-w-[200px]">
                  {head}
                </th>
              ))}     
            </tr>
          </thead>

         
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="align-top hover:bg-gray-50">

                <td className="bg-purple-900 text-white font-bold p-4 border">
                  {row.age}
                </td>

                {row.data.map((cell, j) => (
                  <td key={j} className="p-4 border bg-white">
                    {cell}
                    {row.age === "Description" && (
                      <span className="text-blue-600 cursor-pointer ml-1">
                        ...Read More
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};