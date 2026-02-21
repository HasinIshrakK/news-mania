import { useState } from "react";

function Filters({ setFilters }) {
  const [localFilters, setLocalFilters] = useState({
    language: "",
    country: "",
    category: "",
    author: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setLocalFilters({ ...localFilters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    // to remove empty values
    const cleaned = Object.fromEntries(
      Object.entries(localFilters).filter(([_, v]) => v !== "")
    );
    setFilters(cleaned);
  };

  return (
    <div className="bg-base-100 p-4 rounded-xl shadow-md grid md:grid-cols-6 gap-4 mb-6">
      <select
        name="language"
        value={localFilters.language}
        onChange={handleChange}
        className="select select-bordered"
      >
        <option value="">Language</option>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={localFilters.author}
        onChange={handleChange}
        className="input input-bordered"
      />

      <select
        name="country"
        value={localFilters.country}
        onChange={handleChange}
        className="select select-bordered"
      >
        <option value="">Country</option>
        <option value="us">USA</option>
        <option value="gb">UK</option>
      </select>

      <select
        name="category"
        value={localFilters.category}
        onChange={handleChange}
        className="select select-bordered"
      >
        <option value="">Category</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
      </select>

      <input
        type="date"
        name="startDate"
        value={localFilters.startDate}
        onChange={handleChange}
        className="input input-bordered"
      />

      <input
        type="date"
        name="endDate"
        value={localFilters.endDate}
        onChange={handleChange}
        className="input input-bordered"
      />

      <button
        onClick={applyFilters}
        className="btn btn-primary col-span-full mt-2"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default Filters;