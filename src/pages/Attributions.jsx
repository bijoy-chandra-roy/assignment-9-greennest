import React from "react";

// This component assumes Tailwind & daisyUI are set up in your project.
// It uses semantic colors from your theme (bg-base-100, text-primary, etc.)

function Attributions() {
  // A helper variable for the "fake alias" classes to keep the JSX clean
  const aliasClass = "italic font-mono bg-secondary/20 px-2 py-1 rounded-md";
  
  // Tooltip text to be shown on hover
  const tooltipText = "This is a placeholder for web development practice";

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-base-100 text-base-content">
      <h1 className="text-3xl font-bold mb-4 text-center pb-2 border-b border-base-200">
        Attributions
      </h1>
      <p className="mb-8 text-center text-lg">
        Thank you to the creators and platforms for providing these assets.
      </p>

      {/* --- LOGO --- */}
      <h2 className="text-2xl font-semibold mb-3 mt-6">Logo</h2>
      <ul className="space-y-4">
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          "Modern Logo for Indoor Plants" by{" "}
          <a
            href="https://www.vecteezy.com/free-vector/staff"
            className="text-primary hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vecteezy
          </a>{" "}
          -{" "}
          <a
            href="https://www.vecteezy.com/vector-art/27996088-modern-logo-for-indoor-plants"
            className="text-primary hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.vecteezy.com/vector-art/27996088-modern-logo-for-indoor-plants
          </a>
        </li>
      </ul>

      {/* --- PEOPLE --- */}
      <h2 className="text-2xl font-semibold mb-3 mt-6">People</h2>
      <ul className="space-y-4">
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <div className="font-bold text-lg mb-1">
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Bob Leaf"
            </span>
          </div>
          <div className="pl-4">
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Air-Purifying Plant Expert"
            </span>{" "}
            - Image by wayhomestudio -{" "}
            <a
              href="https://www.freepik.com/free-photo/young-bearded-man-with-striped-shirt_9660042.htm"
              className="text-primary hover:underline break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.freepik.com/free-photo/young-bearded-man-with-striped-shirt_9660042.htm
            </a>
          </div>
        </li>
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <div className="font-bold text-lg mb-1">
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Alice Green"
            </span>
          </div>
          <div className="pl-4">
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Indoor Plant Specialist"
            </span>{" "}
            - Image by wayhomestudio -{" "}
            <a
              href="https://www.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_10421502.htm"
              className="text-primary hover:underline break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_10421502.htm
            </a>
          </div>
        </li>
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <div className="font-bold text-lg mb-1">
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Clara Bloom"
            </span>
          </div>
          <div className="pl-4">
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Flowering Plant Specialist"
            </span>{" "}
            - Image by benzoix -{" "}
            <a
              href="https://www.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_17096951.htm"
              className="text-primary hover:underline break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_17096951.htm
            </a>
          </div>
        </li>
      </ul>

      {/* --- PLANTS --- */}
      <h2 className="text-2xl font-semibold mb-3 mt-6">Plants</h2>
      <ul className="space-y-4">
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <strong>
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Pothos"
            </span>
            :
          </strong>{" "}
          Image by azerbaijan_stockers -{" "}
          <a
            href="https://www.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_5430218.htm"
            className="text-primary hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_5430218.htm
          </a>
        </li>
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <strong>
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Spider Plant"
            </span>
            :
          </strong>{" "}
          Image from Unsplash -{" "}
          <a
            href="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            className="text-primary hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://images.unsplash.com/photo-1501004318641-b39e6451bec6
          </a>
        </li>
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <strong>
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Lily"
            </span>
            :
          </strong>{" "}
          Image by devmaryna -{" "}
          <a
            href="https://www.freepik.com/free-photo/calla-lily-plant-flowers-white-fabric-background_9131781.htm"
            className="text-primary hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.freepik.com/free-photo/calla-lily-plant-flowers-white-fabric-background_9131781.htm
          </a>
        </li>
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <strong>
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "ZZ Plant"
            </span>
            :
          </strong>{" "}
          Image by Dragana_Gordic -{" "}
          <a
            href="https://www.freepik.com/free-photo/maranta-tricolor-isolated-white-background-beautiful-home-leaves-plant-isolated-white-background_1174292.htm"
            className="text-primary hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.freepik.com/free-photo/maranta-tricolor-isolated-white-background-beautiful-home-leaves-plant-isolated-white-background_1174292.htm
          </a>
        </li>
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <strong>
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Snake Plant"
            </span>
            :
          </strong>{" "}
          Image by wirestock -{" "}
          <a
            href="https://www.freepik.com/free-photo/houseplant-with-long-leaves-pot-against-wooden-wall-lights_10292271.htm"
            className="text-primary hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.freepik.com/free-photo/houseplant-with-long-leaves-pot-against-wooden-wall-lights_10292271.htm
          </a>
        </li>
        <li className="bg-base-200 p-4 rounded-lg shadow-sm">
          <strong>
            <span
              className={`${aliasClass} tooltip`}
              data-tip={tooltipText}
            >
              "Rubber Plant"
            </span>
            :
          </strong>{" "}
          Image by rawpixel.com -{" "}
          <a
            href="https://www.freepik.com/free-photo/dieffenbachia-camille-plant-pot_16234962.htm"
            className="text-primary hover:underline break-words"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.freepik.com/free-photo/dieffenbachia-camille-plant-pot_16234962.htm
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Attributions;