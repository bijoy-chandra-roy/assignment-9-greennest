import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updatePassword } from "firebase/auth";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ displayName, photoURL });
      toast.success("Profile information updated successfully!");
      if (password) {
        if (error) return;
        await updatePassword(user, password);
        toast.success("Password updated successfully!");
        setPassword("");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
              <img
                src={
                  photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Profile image URL"
                className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Full Name"
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="label">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  const val = e.target.value;
                  setPassword(val);
                  if (!/[A-Z]/.test(val))
                    setError(
                      "Password must contain at least one uppercase letter"
                    );
                  else if (!/[a-z]/.test(val))
                    setError(
                      "Password must contain at least one lowercase letter"
                    );
                  else if (val.length < 6)
                    setError("Password must be at least 6 characters long");
                  else setError("");
                }}
                onBlur={(e) => {
                  if (!e.target.value) setError("");
                }}
                placeholder="Enter new password"
                className="input input-bordered w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-lg z-10 bg-transparent focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-full py-2"  disabled={error ? true : false}>
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
