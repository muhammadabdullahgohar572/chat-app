"use client"
import Image from "next/image"; // Import the Image component
import no1 from "../img/3030115.webp";
import no2 from "../img/3030224.webp";
import no3 from "../img/css3.png";
import no4 from "../img/images.png";
import no5 from "../img/java-script-js-logo-ACF4AE5082-seeklogo.com.png";

const Fourms = () => {
  const forums = [
    {
      title: "Python",
      description: "Lets discuss everything related to Python",
      icon: no2,
    },
    {
      title: "JavaScript",
      description: "Learn and share JavaScript knowledge.",
      icon: no5,
    },
    {
      title: "React",
      description: "Build amazing user interfaces with React.",
      icon: no4,
    },
    {
      title: "CSS",
      description: "Explore the world of designing and CSS",
      icon: no3,
    },
    {
      title: "Web Development",
      description:
        "Discuss front-end, back-end, and full-stack web development",
      icon: no1,
    },
  ];

  return (
    <div className="container mx-auto p-8">
      
      <h1 className="text-3xl font-bold mb-8">Discussion Forums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {forums.map((forum) => (
          <div
            key={forum.title}
            className="bg-white rounded-lg shadow-md p-6 hover:bg-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex justify-center items-center mb-4">
              {/* Use Image component for rendering images */}
              <Image
                src={forum.icon}
                alt={forum.title}
                width={80}
                height={50}
                className="mr-4"
              />
            </div>
              <h2 className="text-xl font-bold">{forum.title}</h2>
            <p className="text-gray-600">{forum.description}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105"
              onClick={() => alert(`You clicked on the ${forum.title} forum`)}
            >
              Discuss Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fourms;
