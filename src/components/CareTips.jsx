import React, { useEffect, useState } from "react";
import Loading from "../pages/Loading";

const CareTips = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/plants.json")
      .then((r) => r.json())
      .then((d) => {
        setPlants(d || []);
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
    <div className="m-10">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Plant Care Tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((p) => (
          <div
            key={p.plantId}
            className="card bg-base-100 shadow-sm p-4 relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 group"
          >
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500"></div>
            <h3 className="text-xl font-bold mb-2 relative z-10">
              {p.plantName}
            </h3>
            <p className="text-gray-700 relative z-10">{p.careTips}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareTips;
