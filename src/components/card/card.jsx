import Image from "next/image";

const Card = ({ image, title, description, techStack, liveLink, codeLink }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
      <Image
        className="w-full h-48 object-cover"
        src={image}
        alt="Project Cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-gray-500 text-xs mb-4">
          <strong>Tech stack: </strong>
          {techStack}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={liveLink}
            className="text-blue-500 hover:underline text-sm flex items-center"
          >
            Live Preview
          </a>
          <a
            href={codeLink}
            className="text-blue-500 hover:underline text-sm flex items-center"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;