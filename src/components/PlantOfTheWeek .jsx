import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../pages/Loading";

const PlantOfTheWeek = () => {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((plants) => {
        if (!Array.isArray(plants) || plants.length === 0) return;
        const maxRating = Math.max(...plants.map((p) => Number(p.rating || 0)));
        const topPlants = plants.filter((p) => Number(p.rating) === maxRating);
        setFeatured(topPlants[0]);
      })
      .catch(() => setFeatured(null));
  }, []);

  if (!featured) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div className="my-25">
      <h1 className="text-5xl font-bold text-center">Plant of the Week</h1>

      <div className="hero mt-8">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src={featured.image || "/images/placeholder.png"}
            alt={featured.plantName || "Featured plant"}
            className="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{featured.plantName}</h2>
            <p className="text-lg">{featured.description}</p>
            <div className="space-y-1 text-sm">
              <p>Provider: {featured.providerName}</p>
              <p>Category: {featured.category}</p>
              <p>Care level: {featured.careLevel}</p>
            </div>
            <div className="space-x-2">
              <span className="badge badge-primary">
                Rating: {featured.rating}
              </span>
              <span className="badge badge-neutral">
                Price: ${featured.price}
              </span>
            </div>
            <p className="text-sm py-2">{featured.careTips}</p>
            <Link to="/plants">
              {" "}
              <button className="btn btn-primary hover:bg-green-600 transition">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;
