import React, { useEffect, useState } from "react";
import Loading from "../pages/Loading";

const GreenExperts = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((data) => {
        setExperts(data || []);
        setLoading(false);
      })
      .catch(() => {
        setExperts([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Meet Our Green Experts
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="flex flex-col items-center bg-base-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            {loading ? (
              <Loading />
            ) : (
              <img
                src={expert.image}
                alt={expert.name}
                className="w-48 h-64 object-cover mb-4 rounded-lg"
              />
            )}

            <h3 className="text-xl font-semibold">{expert.name}</h3>
            <p className="text-gray-500 text-center">{expert.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenExperts;
