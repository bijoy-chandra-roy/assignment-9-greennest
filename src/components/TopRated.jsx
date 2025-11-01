import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Loading from "../pages/Loading";

const TopRated = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plants.json")
      .then((r) => r.json())
      .then((d) => {
        const sorted = d.sort((a, b) => b.rating - a.rating).slice(1, 5);
        setPlants(sorted);
        setLoading(false);
      })
      .catch(() => {
        setPlants([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div className="my-10">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Top Rated Plants
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {plants.map((p) => (
          <div
            key={p.plantId}
            className="card bg-base-100 w-80 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <figure>
              <img
                src={p.image}
                alt={p.plantName}
                className="h-56 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {p.plantName}
                <div className="badge badge-secondary">{p.rating}★</div>
              </h2>
              <p className="text-gray-600">${p.price}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/plantdetails/${p.plantId}`}
                  className="btn btn-sm btn-primary hover:bg-green-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
