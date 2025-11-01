import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";


const PlantDetails = () => {
  const { plantId } = useParams();
  const [plant, setPlant] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/plants.json", { signal });
        if (!res.ok) throw new Error("Failed to load plants.json");
        const data = await res.json();
        const found = data.find((p) => String(p.plantId) === String(plantId));
        if (!found) {
          setError("Plant not found");
          setPlant(null);
        } else {
          setPlant(found);
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Error loading data");
        setPlant(null);
      } finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [plantId]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Please provide name and email");
      return;
    }
    toast.success("Consultation booked");
    setName("");
    setEmail("");
  }

  if (loading) {
    return (
     <Loading></Loading>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <p className="text-red-600 mb-4">{error}</p>
        </div>
      </div>
    );
  }

  if (!plant) return null;

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <ToastContainer position="top-right" />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-8 max-w-5xl w-full">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="max-w-sm rounded-lg shadow-2xl object-cover h-80 w-full"
          />

          <div className="w-full">
            <h1 className="text-3xl font-bold mb-2">{plant.plantName}</h1>
            <p className="text-gray-700 mb-4">{plant.description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="badge badge-lg badge-outline">
                Price: ${plant.price}
              </div>
              <div className="badge badge-lg badge-outline">
                Rating: {plant.rating}
              </div>
              <div className="badge badge-lg badge-outline">
                Stock: {plant.availableStock}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-medium mb-2">Care tips</h2>
              <ul className="list-disc list-inside text-gray-700">
                {plant.careTips ? (
                  <li>{plant.careTips}</li>
                ) : (
                  <li>No care tips provided</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow max-w-xl w-full mx-auto my-20">
        <div className="card-body">
          <h3 className="text-lg font-medium mb-3">Book Consultation</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block">
              <span className="label-text">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full mt-1"
                required
                aria-label="Name"
              />
            </label>

            <label className="block">
              <span className="label-text">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full mt-1"
                required
                aria-label="Email"
              />
            </label>

            <div className="flex gap-3 pt-2">
              <button type="submit" className="btn btn-neutral">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
