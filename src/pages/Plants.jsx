import { Link } from "react-router";
import { useEffect, useState, Suspense } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Loading from "./Loading";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
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
    <div className="flex flex-wrap gap-8 p-6 justify-center">
      {plants.map((plant) => (
        <div
          key={plant.plantId}
          className="w-70 bg-base-100 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <Suspense fallback={<span>Loading...</span>}>
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-48 object-cover"
            />
          </Suspense>
          <div className="p-4 text-center">
            <div className="flex justify-between gap-4 mb-4">
              <div className="badge badge-outline border-none rounded-[4px] text-neutral bg-base-200 flex items-center gap-1 px-3 py-1">
                <MdOutlineAttachMoney />
                {plant.price}
              </div>
              <div className="badge badge-outline border-none rounded-[4px] text-secondary bg-base-200 flex items-center gap-1 px-3 py-1">
                {plant.rating === 5 ? (
                  <FaStar />
                ) : plant.rating > 1 ? (
                  <FaStarHalfAlt />
                ) : (
                  <FaRegStar />
                )}
                {plant.rating}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-3">{plant.plantName}</h3>
            <Link to={`/plantdetails/${plant.plantId}`}>
              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-green-600 transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plants;
